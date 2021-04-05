#!/usr/bin/env sh

# abort on errors
set -e

# set date
now=`date`

# build
npm run docs:build

# copy dist to deploy.git
find ./deploy.git -mindepth 1 -not -regex "^\.\/deploy.git\/\.git.*" -delete
cp -Rf docs/.vuepress/dist/* deploy.git/
cd deploy.git

# if you are deploying to a custom domain
echo 'note.situ2001.com' > CNAME

# git init
git add -A
git commit -m "deploy: $now"

# if you want to apply proxy to git 
# git config http.proxy http://<PROXY_IP>:<PORT> 
git config http.proxy http://127.0.0.1:7890

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:situ2001/notebook.git master:gh-pages

# if you want to use http proxy
# git config --unset http.proxy
git config --unset http.proxy

cd -

read -p "Press enter to continue"