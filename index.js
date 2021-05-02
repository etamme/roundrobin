const express = require('express')
const app = express()
const fs = require('fs')

const port = 3000;
const filepath = "./hosts.cfg";

let hosts = [];
let current_host = 0;

try {
    let data = fs.readFileSync(`${filepath}`,"utf-8");
    hosts = data.split("\n")
    /* we get one empty element at the end, so pop it */
    hosts.pop()
} catch (err) {
  console.error(err)
}

app.get('/nexthost', (req, res) => {
    console.log(`received call for next\nmax_hosts:${hosts.length}\ncurrent_host:${current_host}`)
    if(current_host>=hosts.length){
        current_host=0
    }
    host = hosts[current_host]
    current_host++
    console.log(`new current_host:${current_host}`)

    res.send(`${host}`)
  })

app.get('/addhost', (req, res) => {
    new_host = req.query.host
    console.log(`received call for add: ${new_host}`)
    hosts.push(new_host)
    res.send('OK')
})

app.get('/removehost', (req, res) => {
    console.log(`received call for remove\nmax_hosts:${hosts.length}\ncurrent_host:${current_host}`)
    if(hosts.length>1){
        hosts.pop();
        res.send('OK')
    } else {
        res.status(500).send('Minimum of one host required')

    }
    console.log(`max_hosts:${hosts.length}\ncurrent_host:${current_host}`)
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
  console.log(`max hosts: ${hosts.length}`)

})