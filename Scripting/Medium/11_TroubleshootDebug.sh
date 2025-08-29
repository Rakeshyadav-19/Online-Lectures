#!/bin/bash

#Print each command as it executes
set -x
#Exit immediately when command in script fails
set -e


#Your Script here
# Some script here
ls /etc


#Check exit Code
#$? stores exitcode ost recen command
#0 means success, any other means Error
if [ $? -ne 0 ]; then
  echo "Error occured"
fi




#Check logs
