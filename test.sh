#!/usr/bin/env bash
cd /home/abhishekshukla/dev_env/fullstackdemo

git add .

DATE=$(date)

git commit -m "Changes made on $DATE"

git push
