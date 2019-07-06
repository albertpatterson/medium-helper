## Step-by-step build instructions to create an exact copy of the add-on code
Create a copy of the optimized code using ./build.sh, which will clone the git repo, install dependencies, and generate the output. 

## A build script that executes all necessary technical steps
```
$ ./build.sh
```

## Operating system and build environment requirements
from https://npme.npmjs.com/docs/up-and-running/requirements.html

```
To install the latest version of npm Enterprise, you need a server fulfilling these basic specs:

64-bit architecture
Kernel version 3.10 or higher
One of the following Linux flavors (see note on supported platforms below):

Ubuntu 14.04 / 15.10
CentOS 6.x
Red Hat Enterprise Linux (RHEL) 7.x
Debian 7.7
4 or more CPUs/cores

At least 16 GB of memory/RAM
At least 25 GB of disk space (see note on disk space below)
Ports opened for inbound TCP traffic:

8800 (admin console)
8080 (registry)
8081 (website)
Access to the public internet, either directly or via proxy (see network requirements below)

If using Amazon Web Services, see note on AWS below.
```

## Details (including required version and installation instructions), of any programs used in the build process (for example: node and npm version used).
```
$ npm -v
6.9.0

node --version
v12.4.0
```