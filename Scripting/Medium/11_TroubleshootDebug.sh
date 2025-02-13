#!/bin/bash

#Print each comand as it executes
set +x
#Exit immediately when coman in scrit fails
set +e


#Your Sript here


#Check exit Code
#$? stores exitcode ost recen command
#0 means success, any other means Error
if [$? -ne 0 ]; then
  echo "Error occured"
fi




#Check logs
