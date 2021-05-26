---
slug: challenges-of-decentralized-hpc-containerization
date: 2018-01-26T11:04
tags: Science
excerpt: |
  As part of Dat in the Lab we are working with different campuses in the University of California network. One of our goals is to publish researcher's data, code, and executable Linux container all as files in a version controlled Dat repository. 
author: dat
title: Is Open Science ready for software containers?
---

As part of the Dat in the Lab project we are working with different campuses in the University of California network. One of our goals is to publish researcher's data, code, and executable Linux container all as files in a version controlled Dat repository. For this to be useful, a person should be able to execute these Linux environments (aka containers) anywhere.

If you own your computer, or rent a cloud server, you can use `sudo` or root access to run containers. Most container systems like Docker expect you to have superuser privileges. In many university computing clusters (aka High-performance computing - "HPC"), hundreds of researchers share a single Linux environment and do not have the ability to install global software packages or execute commands that require `sudo`. Even workstations and laptops that are owned by an institution often do not allow users these privileges.

We are working with researchers who want to run a bioinformatics pipeline that was developed at UCLA on the cluster located at University of California, Merced. Both campuses have shared computing clusters running CentOS 7 Linux. However, the clusters are different. The UCLA cluster has thousands of software packages installed. These have been requested over time by UCLA researchers. These packages are not a standard part of the CentOS ecosystem and are not available to easily install at UC Merced.

The pipeline we are working with requires specific versions of Python, Bash, R and GCC to be installed and compiled. The UC Merced cluster does not have these versions available. The traditional way researchers have dealt with these code portability issues is by asking their cluster sysadmins to install all of the packages they need. Sometimes the sysadmins say no, as upgrading to (for example) Python 3 globally would break all Python 2 applications. Sometimes sysadmins say yes, but it takes a while as this is tedious work.  

To address global upgrade breakages at UCLA they use the [Environment Modules](http://modules.sourceforge.net/) system to allow users to load in specific versions of packages into their environment. For example, when you first login to a compute node shell there will be no version of R loaded. But you can run a command like `module load R/3.4.2` to get a specific version loaded into your path for that specific shell session. The UCLA pipeline we are working with has a series of `module load` directives executed at the beginning of the pipeline to ensure the correct environment is set up.

However, moving the pipeline to another cluster requires moving all of the modules as well. Some modules are single binary executables, easy to move to any other server with the same architecture, but others (such as R) are a complicated dependency graph including things like a certain version of an Intel Fortran compiler needed to compile R packages at runtime. 

Moving the pipeline code is easy, but moving the underlying machinery (the specifically compiled and installed software dependencies and overall supporting Linux environment) can be very complicated. The worst part is, even if you seem to get the pipeline to work, there is no way to verify that you installed and compiled everything *exactly* the same on the new machine as it was installed on the old machine. You can only see if your program works, but there may be subtle bugs lurking that may go undetected due to an environmental difference (e.g. a slightly different C++ compiler being used which throws off the Fortran calculations in an obscure old version of an R package). 

Our initial idea was to simply copy *all* of the modules from UCLA onto UC Merced, but this proved impossible. Running `du -sh` would have told us see how big the total installed size of all modules on the UCLA cluster was, but after many hours the command never finished. We needed another approach. 

### Containers

In theory, containers are a better way to address this problem. Instead of having everyone on a machine share a single Linux environment, containers allow for many environments to execute at the same time. The entire container can be version controlled for reproducibility, giving you cryptographically secure confidence that the code will run the same everywhere. Before we talk about containers, let's run over the basics of Linux.

Conceptually, Linux is made up of the kernel and user-space. The kernel interfaces with the physical hardware of the computer and presents an API (called system calls or syscalls) to interact with the hardware. Virtual machines (VMs) emulate everything from the hardware up, including the kernel, which provides a complete emulation of an environment but comes at the cost of performance, as your application is using e.g. virtual RAM which has to get mapped to physical RAM through multiple layers of abstraction. For a bioinformatics pipeline that might be designed to use 1TB of RAM, this will reduce performance and defeat the purpose of buying specialized hardware.

Containers differ from virtualization in that all containers running on one machine share the same kernel, which means they are not emulating any hardware or emulating the kernel. A program like VirtualBox or Xen does not qualify a container, but is rather classified as a VM because they emulate the whole machine. There are many ways to implement a container system depending on what your requirements are. A container system is any program that will use a set of syscalls to run a program in a Linux file system. What syscalls are used determine the security tradeoffs and kernel compatibility. You may have heard the phrase "everything in Linux is a file". This means that you can simply take a filesystem, throw it in a ZIP archive, and you have a container. How you execute the files as processes depends on which syscalls you use, but a container is essentially just a folder full of files and a way to run a process in that folder.

By renting a cloud machine, one can pick a distribution with the latest Linux kernel and use `sudo` without issue. Thereby giving access to every syscall, including the new shiny ones that modern container systems rely on. However researchers using shared university servers don't have control over the kernel and probably don't have `sudo` access.

To return to our goals: We want to publish researcher's data, code, and executable Linux container all as files in a version controlled Dat repository. We want anyone to be able to execute these Linux containers anywhere. To do this, it needs to be easy for researchers to set up and maintain containers on university machines without special sysadmin permissions.

### Possible solutions

All of that stuff above leads to the real challenge of containers for reproducible science: making containers run everywhere, including restricted shared computing clusters. With that in mind let's look at different approaches to running containers in Linux.

#### chroot

The `chroot` syscall is sort of the proto-container. It's been around in Linux forever. In Linux, your filesytem starts at `/`. Usually a user puts their stuff somewhere like `/home/alex`. If you unzipped an Ubuntu distribution at `/home/alex/ubuntu`, you can use `chroot` to spawn a new process that is running relative to `/home/alex/ubuntu` but thinks it's at `/`. At it's most basic form, this lets you 'nest' filesystems and have different processes sharing the same kernel, but using different Linux environments. Using our definition above, this qualifies as a container. The downside is that there is no built-in security preventing things in the chroot from achieving root privileges, and you have to be root to create a chroot.

#### Root Daemon (Docker)

Docker runs a daemon process as root that, if you also have root, you can ask to download and boot containers for you. This means that with Docker, containers are executed as the root user. Also by default only other root users can talk to the Docker daemon at all. You can change the security so that users can run Docker without sudo, but this is not recommended by Docker as it means any user can execute root commands (e.g. Docker daemon access basically [means root access](https://www.projectatomic.io/blog/2015/08/why-we-dont-let-non-root-users-run-docker-in-centos-fedora-or-rhel/)).

The advantage of this approach is that it's simple. The Docker daemon manages the lifecycle of all containers running on a system. You use the Docker protocol to talk to the daemon, and the daemon translates that to whatever syscalls are available to it on the kernel it's running on. If you move to a different kernel, the Docker protocol stays the same (in theory, in practice this can break their protocol a lot which defeats the purpose of Docker in our opinion, but that's a different blog post). The downside is that the containers don't run as the user, they run as root. University sysadmins don't like this.

#### Rootless containers (runC, Charliecloud)

Since Linux Kernel 3.8 you have access to a syscall `CLONE_NEWUSER` which lets you create an user namespace as an unprivileged user. There's more info in [this excellent blog post](https://www.cyphar.com/blog/post/20160627-rootless-containers-with-runc) but the tl;dr is that you can, without `sudo`, create a process tree that maps your user on the actual system to a virtual user (like root) inside the new process namespace, meaning you can run processes as a "virtual" root without needing root yourself. Unfortunately in CentOS/RHEL user namespaces are [still not enabled](https://rhelblog.redhat.com/2015/07/07/whats-next-for-containers-user-namespaces/) by default due to security concerns.

The [Charliecloud](https://hpc.github.io/charliecloud/) project from Los Alamos has developed a minimal (~900 lines of C) chroot-style container system that is based on having user namespaces enabled.

CentOS appears to be is the only distribution that doesn't have user namespaces enabled. CentOS also happens to be popular in universities. In the long term, this seems like the best security for containers for shared environments. For now, to support CentOS as well as older servers/kernels, other solutions are still needed.

#### SetUID (Singularity, Bubblewrap)

If you don't have a way to do rootless containers, but you don't want to give your researchers root access, then you have to find a middle ground. [Singularity](http://singularity.lbl.gov/) is one such approach that works here. To install singularity, you need to be root, so that you can use the `setuid` syscall to 'mark' the `singularity` binary executable with root privileges. This means that `singularity` can do stuff as root, but the user's program cannot. As long as Singularity doesn't have any security exploits it's a nice tradeoff. Once you have Singularity installed, you can run containers without superuser privileges, and the container processes are owned by your user, not running as root.

Singularity will use user namespaces if they are available instead of `setuid`, so it works similarly to Docker in that it tries to provide a portal container execution context that works on a variety of new and old Linux distributions, but differs in that it doesn't require a central root daemon process, which makes it more popular with university sysadmins.

[Bubblewrap](https://github.com/projectatomic/bubblewrap) is another similar approach that specifically tries to be a minimal setuid-based program that can spawn a container process and de-escalate all other privileges. The goal of bubblewrap is to keep surface area of the program minimal so that it can be audited more effectively, which is a great engineering principle that is (in my opinion) often overlooked. OpenSSL vs. Libsodium comes to mind.

### Conclusion

It's worth mentioning [the article that coined the phrase "containers don't contain"](https://opensource.com/business/14/7/docker-security-selinux) when discussing container security. In the university use case we described, we aren't looking for perfect security, but rather security that fulfills the requirements of university sysadmins.

So, which of the above approaches are we using at UC Merced? We've put in a request for the sysadmins there to install Singularity, which seems like the best approach since we can't run rootless containers on their CentOS. If they weren't running on CentOS we would probably just use rootless containers, as we could use them without asking the sysadmins to do anything. We'll do another blog post later in the year with more details on exactly what we're building with all this container stuff, but we wanted to take the opportunity here to talk about the scope of the challenge of deploying containers in the open science ecosystem.

