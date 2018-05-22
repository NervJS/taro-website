#!/bin/bash
if [ "$1" = "false" ]
# not a pull request, deploy to github pages
then ( cd dist
  git init
  git config user.name "ltp11"
  git config user.email "823285635@qq.com"
  git add .
  git commit -m "Deployed to Github Pages [skip ci]"
  git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages
)
fi
