# roundrobin

A simple round robin api implmentation


#install / usage

git clone https://github.com/etamme/roundrobin.git


cd roundrobin


npm install


node index.js


curl http://localhost:3000/nexthost

#endpoints

/nexthost

returns the next host in the list

/addhost

adds a host to the list in memory

/removehost

removes a host from the list in memory
