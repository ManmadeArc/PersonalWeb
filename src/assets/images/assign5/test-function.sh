#!/bin/bash
aws lambda invoke --function-name moroyoqui_api --cli-binary-format raw-in-base64-out --payload '{"pathParameters": {"id":"030934"}, "httpMethod":"GET"}' out;

cat out;
