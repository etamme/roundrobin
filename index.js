const express = require('express')
const app = express()
const fs = require('fs')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

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
    console.log(`received call for add`)
    res.send('add')
})

app.get('/removehost', (req, res) => {
    console.log(`received call for remove`)
    res.send('remove')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
  console.log(`max hosts: ${hosts.length}`)

})