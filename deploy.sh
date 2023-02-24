#!/bin/sh


##Set original values
origin="$(pwd)"
dist='./dist/static'
bucketName='marcos.cetystijuana.com'

echo "$origin"
echo "$(pwd)"

echo "Automating Deployment Of Static site";

echo "Building Angular App";
#Build site

echo "Angular Builded. \n Generating Static site";
#Static Site Generation
powershell.exe -File "build.ps1"

echo " Static Cite generated";
echo " Running Tests";

## Run tests



    #If test  passed deploy

cd $dist;
aws s3 sync ./ "s3://$bucketName"
status="COMPLETED"
   
   
echo "Deployment  completed succesfully"


#Commit Changes And report bugs

cd "$origin";

git add .
git commit -m "$status Deployment $(date)"
git push