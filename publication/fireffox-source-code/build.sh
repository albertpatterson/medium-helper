#!/usr/bin/env bash

git clone https://github.com/albertpatterson/medium-helper.git
cd medium-helper
npm install
gulp compile-prod
gulp main-zip