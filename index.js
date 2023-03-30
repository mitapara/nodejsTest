const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(cors())    //dlrj gownjㅇ해줘야지 cors 오류 놉 // 보안문제 //

app.get('/sound/:name', (req,res)=> {
    const {name} = req.params
    console.log(name)

    if(name=="dog"){
        res.json({'sound': 'walwal'})
    } else if(name == "cat"){
        res.json({'sound': '야옹'})
    } else {
        res.json({'sound': 'wnononononl'})
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})