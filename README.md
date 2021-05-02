# roundrobin

A simple round robin api implmentation


## install / usage with node and npm

git clone https://github.com/etamme/roundrobin.git


cd roundrobin


npm install


node index.js


curl http://localhost:3000/nexthost

## install / usage with docker
git clone https://github.com/etamme/roundrobin.git


cd roundrobin

docker build -t roundrobin .

docker run -p 80:3000 roundrobin

curl http://localhost:3000/nexthost

## endpoints

/nexthost

returns the next host in the list

/addhost

adds a host to the list in memory

/removehost

removes a host from the list in memory
