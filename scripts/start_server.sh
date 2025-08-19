#!/bin/bash
cd /home/ec2-user/nodeapp_with_jenkins
nohup node index.js > app.log 2>&1 &
