if [ "$1" = "frontend" ];then
    cd ./frontend 
    npm start
    cd ..
elif [ "$1" = "backend" ];then
    cd ./backend 
    nodemon index.js 
    cd ..
elif [ "$1" = "db" ];then
    cd ./backend 
    npx convex dev
    cd ..
fi
