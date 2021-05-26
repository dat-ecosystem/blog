---
slug: dat-cryptography
date: 2017-09-21T14:29
author: maxogden
banner: /content/images/2017/09/cat-bg.png
title: An Intro To Dat's Cryptography
excerpt: |
  Dat is a secure peer to peer live syncing file sharing protocol for the web. Here's an overview of the cryptography used in the project. Even more technical details can be found in
---

Dat is a secure peer to peer live syncing file sharing protocol for the web. Here's an overview of the cryptography used in the project. Even more technical details can be found in the [Dat Paper](https://datproject.org/paper).

*This post is adapted from Tim Caswell's excellent presentation for Utah.js called [100 Weird Applications Of Public Key Cryptography](https://twitter.com/creationix/status/909873163906908160). Tim is the Director of Engineering at [Daplie](https://daplie.com/).*

## Sodium

Dat uses [Sodium (aka libsodium)](https://github.com/jedisct1/libsodium) for cryptography. Sodium is a modern, easy-to-use software library for encryption, decryption, signatures, password hashing and more. It is a portable, cross-compilable, installable, packageable fork of [NaCl](https://nacl.cr.yp.to/), with a compatible API, and an extended API to improve usability even further. Its goal is to provide all of the core operations needed to **build higher-level cryptographic tools**.

Sodium is cross-platforms and cross-languages. It runs on a variety of compilers and operating systems, including Windows (with MinGW or Visual Studio, x86 and x86_64), iOS and Android. **Javascript and WebAssembly versions are also available and are fully supported**. Bindings for all common programming languages are available and well-supported.

The design choices emphasize security and ease of use. But despite the **emphasis on high security**, primitives are **faster across-the-board** than most implementations of the NIST standards.

## Application 001: Sealed Boxes

<div class="image-div" style="width: 400px;"><img src="/content/images/2017/09/Screen-Shot-2017-09-18-at-3.01.29-PM.png"></img></div>

#### Sealed Boxes Analogy

- Bob wants to send a message to alice
- He wants to ensure that only Alice can read the message
- He doesn't want or need Alice to know it came from him
- Alice gives away open padlocks, but not the key
- Bob uses one to send a sealed box to Alice

#### Sealed Boxes - Sodium

Sealed boxes are designed to **anonymously** send messages to a recipient given their **public** key.

Only the recipient can decrypt these messages, using their **private** key. While the recipient can verify the **integrity** of the message, they cannot verify the **identity** of the sender.

A messge is **encrypted** using an ephemeral key pair, meaning the secret key is destroyed right after the encryption process.

Without knowing the secret key used for a given message, the sender cannot **decrypt** their own message later. And without additional data, a message cannot be **correlated** with the identity of its sender.

#### Sending a sealed box in JavaScript

```js
// Alice generates a key pair and publisher her public key
let { publicKey, privateKey } = crypto_box_keypair()

// Bob composes an important message.
let message = 'Alice, there is a package on your doorstep'

// And seals it up tight in an anoymous box
let cipher = crypto_box_seal(message, publicKey)

// Alice opens the sealed box using her private key.
let decrypted = crypto_box_seal_open(cipher, publicKey, privateKey, 'text')

// She prints the message for us to see.
console.log(decrypted)
```

## Application 010: Public-Key Signatures

<div class="image-div" style="width: 400px;"><img src="/content/images/2017/09/Untitled-1.png"></img></div>

#### Public-Key Signatures Analogy

- Bob wants to send a message to Alice
- He wants Alice to know it came from him
- The message contents can be read by others
- Bob gives away copies of his seal and signature
- Bob signs and seals messages before sending to Alice

#### Public-Key Signatures  - Sodium

In this sytem, a signer generates a key pair:

- A **secret** key, that will be used to append a signature to any number of messages.
- A **public** key, that anybody can use to **verify** that the signature appended to a message was actually issued by the creator of the public key.

Verifiers need to already know and ultimately **trust** a public key before messages signed using it can be verified.

#### Signing and verifying in JavaScript

```js
// Bob generates a key pair and publishes his public key
let { publicKey, privateKey } = crypto_sign_keypair()

// Bob composes an important message
let message = 'Tonight is the meetup at 7pm'

// And signs it using his private key
let signature = crypto_sign_detached(message, privateKey)

// Alice gets the signed message and wants to verify it
let isVerified = crypto_sign_verify_detached(signature, message, publicKey)

console.log({message: message, isVerified: isVerified})
```

#### Signing and verifying - Detect Tampering

```js
// Bob generates a key pair and publishes his public key
let { publicKey, privateKey } = crypto_sign_keypair()

// And signs it using his private key
let message = 'Tonight is the meetup at 7pm'
let signature = crypto_sign_detached(message, privateKey)

// The message is tampered with
message = message.replace('7pm', 'midnight')

// Alice gets the signed message and wants to verify it
let isVerified = crypto_sign_verify_detached(signature, message, publicKey)

console.log({message: message, isVerified: isVerified})
```

## Application 011: Authenticated Encryption

<div class="image-div" style="width: 400px;"><img src="/content/images/2017/09/Screen-Shot-2017-09-18-at-3.19.53-PM.png"></img></div>

#### Public-Key Authenticated Encryption - Sodium

Using public-key authenticated encryption, Bob can encrypt a **confidential** message specifically for Alice, using Alice's **public** key.

Using Bob's **public** key, Alice can **verify** that the encrypted message was actually created by Bob and was not tampered with, before eventually decrypting it.

Alice only needs Bob's public key, the nonce and the **ciphertext**. Bob should never ever share his **secret** key, even with Alice.

And in order to send message to Alice, Bob only needs Alice's public key. Alice should never ever share her **secret** key either, even with Bob.

Alice can reply to Bob using the **same system**, without having to generate a distinct key pair.

```js
// Bob and Alice generate key pairs.
let bob = crypto_box_keypair()
let alice = crypto_box_keypair()

// Bob composes a sensitive message.
let message = 'Meet me by the blue lagoon on the next full moon.'

// Bob encrypts the message with a random nonce and authentication.
// Uses his private key and her public key.
let nonce = randombytes_buf(crypto_box_NONCEBYTES)
let cipher = crypto_box_easy(message, nonce, alice.publicKey, bob.privateKey)

// Alice decrypts and verifies the message using nonce,
// her private key and his public key
let original = crypto_box_open_easy(
  cipher, nonce, bob.publicKey, alice.privateKey, 'text'
)
```

## Application 100: Key Exchange

<div class="image-div" style="width: 400px;"><img src="/content/images/2017/09/Screen-Shot-2017-09-18-at-3.25.58-PM.png"></img></div>

> Using the key exchange API, two parties can securely compute a set of shared keys using their peer's public key and their own secret key.

*- libsodium 1.0.12*

```js
let server = crypto_kx_keypair()
let client = crypto_kx_kepair()

// From client's point of view generate shared keys
let clientKeys = crypto_kx_client_session_keys(
  client.publicKey, client.privateKey, server.publicKey
)

// Sasme thing from server's point of view
let serverKeys = crypto_kx_server_session_keys(
  server.publicKey, server.privateKey, client.publicKey
)

// The keys should match on both sides
assert(memcmp(client.sharedRx, serverKeys.sharedTx))
assert(memcmp(clientKeys.sharedTx, serverKeys.sharedRx))
```

## Supporting Tech 001: Content Addressable Storage

"Content Addressable' is a storage system where keys are derived from values.

- Changing the value changes the key.
- The value for any given key is immutable.
- You can only point to keys that exist already.
- Links/pointers are one way. It's "directed".
- Cycles are impossible. It's "acyclic".
- Only the top hash is needed to traverse and verify the whole graph.

#### Content Addressable Storage - Git Internals

<div class="image-div" style="width: 600px;"><img src="/content/images/2017/09/Screen-Shot-2017-09-18-at-3.31.37-PM.png"></img></div>

- Blobs hold files.
- Trees point to blobs, trees, and commits (submodules).
- Commits point to trees and parent commits (history, merges).
- Annotated Tags point to any object.
- Tags can be signed using PGP Keys.

#### Content Addressable Storage - Signed Storage

```js
async function store (value, privateKey) {
  let body = serialize(value)
  if (privateKey) body = crypto_sign(body, privateKey)
  let key = crypto_genericHash(32, body, null, 'hex')
  return set(key, body)
}

async function retrieve (key, publicKey) {
  let body = await get(key)
  assert(key == crypto_generichash(32, body, null, 'hex'))
  if (publicKey) body = crypto_sign_open(body, publicKey)
  return deserialize(body)
}

let { publicKey, privateKey } = crypto_sign_keypair()

let teamKey = await store({
  tim: await store({ name: 'Tim', age: 35, isMaker: true })
  jack: await store ({ name: 'Jack', age: 11, isMaker: true })
}, privateKey)

console.log('Team Key', teamKey)

let team = await retrieve(teamKey, publicKey)
console.log('Team', team)

let jack = await.retrieve(team.jack)
console.log('Jack', jack)
```

#### Content Addressable Storage With Signed Roots

- Hash links are great for pointing to existing data
- Public keys are great for verifying new hashes created after the key
- Distribute your public key to consumers once
- Public signed hashes as new data appears
- Clients can verify the new content without a new public key

## Supporting Tech 010: Signed Merkle Tree

#### Merkle Tree

<div class="image-div" style="width: 600px;"><img src="/content/images/2017/09/Screen-Shot-2017-09-18-at-3.38.29-PM.png"></img></div>

- Every leaf node contains a piece of data
- Non-leaf nodes contain the hash of their two child nodes
- Allows efficient verification of partial trees
- Root nodes can be signed using public key cryptography

#### Signed Merkle Tree - Append Only Event Registers

- Multiple peers can replicate a growing Merkle tree
- The roots are signed by the owner with each publish
- The owner must give the same event history to all consumers
- A file tree can be stored in the log using change events. Read from end first.
    - `SET indexes path value`
    - `DEL indexes path`
- The **indexes** can really bloat the tree if it's too wide or too deep

#### Signed Merle Tree - Path Based Event Log

- `PUT src/answer.js' 'export let answer = 42\n'`
- `PUT 'src/index.js' 'import { answer } from "./answer"\n'`
- `PUT 'README.md' 'This *is* the README\n'`
- `put 'src/more.js' 'export let more = false\n'`

```js
let log = [
  [0, ['src', 'answer.js'], [[0], [0]], 'export let answer = 42\n'],
  [1, ['src', 'index.js'], [[1], [0, 1]], 'import  { answer } from ...'],
  [2, ['README.md'], [[2]], 'This *is* the README\n'],
  [3, ['src', 'more.js'], [[2, 3], [0, 1, 3]], 'export let more = ...'],
]
```

## Supporting Tech 011: Hash Array Mapped Trie (HAMT)

<div class="image-div" style="width: 600px;"><img src="/content/images/2017/09/03-HashMappedArrayTrie.gif"></img></div>

<a href="http://code.hootsuite.com/super-charging-react-with-immutablejs/">(Gif source)</a>

- Keys are hashed to a string of bits
- The trie is walked using the bit prefixes
- This helps distribute the indexes for the log format in the Merkle tree
- We now have a fast key/value store
- [HyperDB](https://github.com/mafintosh/hyperdb) in Dat is an implementation of this (Using siphash from libsodium)

## Supporting tech 100: Secure P2P Services

#### Distributed Hash Table

<div class="image-div" style="width: 400px;"><img src="/content/images/2017/09/Screen-Shot-2017-09-18-at-3.50.43-PM.png"></img></div>

- DHT (Distributed Hash Table) is a P2P system for mapping keys to machines that know the value.
- Think of it at distributed DNS.
- Key is the hash of the services.
- Value is the address of a peer that provides that service.

### Public Key As Address

The main problem with typical DHT systems is lots of untrusted peers know what you're searching for (For example BitTorrent)

Client can have a secure socket with the server knowing only it's public key and providing a transient public key of it's own.

This authenticates the server and prevents eavesdroppers from listening in.

But we don't have to use the public key directly as the discovery key. We can hash the public key and use that in the DHT to find the server. This is how Dat addresses work.

## References

Thank you again to [Tim Caswell](https://twitter.com/creationix) for creating such a great overview of the cryptography used in Dat. We have created and maintain a number of modules that make Sodium easy to use in all JavaScript environment (even WebAssembly). Check them out at [Sodium Friends](https://github.com/sodium-friends).


