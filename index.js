const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
let maxhosts = 0
let filepath = "./hosts.cfg"

try {
  const data = fs.readFileSync(`${filepath}`, 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}

/* wc -l is likely faster than any native javascript */
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function line_count({ fp }) {
  const { stdout } = await exec(`cat ${fp} | wc -l`);
  return parseInt(stdout);
};

let max_lines = line_count(filepath)


app.get('/nexthost', (req, res) => {
    console.log(`received call for next`)
    res.send('next')
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
})