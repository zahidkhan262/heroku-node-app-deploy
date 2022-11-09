const app = require('express')();
require('dotenv').config();

app.use('', (req, res) => {
    res.send('hello world')
})

app.listen(process.env.PGPORT || 5000, () => {
    console.log(`server running at local host ${process.env.PGPORT}`)
})