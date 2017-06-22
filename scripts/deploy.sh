#!/bin/bash

aws s3 cp ./../dist/ s3://demo.portyr.com --recursive
