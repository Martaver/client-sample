#!/bin/bash

aws s3 sync ./../dist/ s3://demo.portyr.com --acl public-read
