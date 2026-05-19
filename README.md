echo "# frontend" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/idbswnd1000/frontend.git
git push -u origin main

git add .
git commit -m ""
git push -u

node_moduels 다시 설치 : npm install
server 띄우기 : npm run dev
router : npm install react-router-dom
CSS(style) : npm install styled-components