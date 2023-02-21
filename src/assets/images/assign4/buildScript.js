#!/bin/sh
function test(){
  ## Write validation code to know if test were succesfully
  echo "True"
}

##Set original values
origin="$(pwd)"
dist='./dist/static'
bucketName='marcos.cetystijuana.com'

echo "Automating Deployment Of Static site";

echo "Building Angular App";
#Build site
ng build;
echo "Angular Builded. \n Generating Static site";
#Static Site Generation
npx scully --scanRoutes;

echo " Static Cite generated";
echo " Running Tests";

## Run tests
RES="$(test)"

status=""

if [ $RES  == "True"  ];
    then
    #If test  passed deploy
    echo "Test Passed";
    cd $dist;
    aws s3 sync ./ "s3://$bucketName"
    status="COMPLETED"
   
   
   echo "Deployment  completed succesfully"
else
    # Else don't deploy
    echo "Tests Failed"
    status="FAILED"
fi

#Commit Changes And report bugs
cd $origin
git add .
git commit -m "$(status) Deployment $(date)"
git push