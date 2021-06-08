#!/bin/bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
echo "Permanent solution maintained for watchers related problem in case of ubuntu operating system for REACT Apps"