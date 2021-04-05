now=`date`

# if you want to use proxy for git 
# git config http.proxy http://<PROXY_IP>:<PORT> 
git config http.proxy http://127.0.0.1:7890

git add .
git commit -m "update(site): $now"
git push

# if you want to use http proxy
# git config --unset http.proxy
git config --unset http.proxy

read -p "Press enter to continue"