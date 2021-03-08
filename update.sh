now=`date`

git add .
git commit -m "update(site): $now"
git push

read -p "Press enter to continue"