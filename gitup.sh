#!/bin/bash

git checkout master || exit 1
git add .
git commit -m "m"
git push origin master
git checkout stage
git merge master
git push origin stage
git checkout master