const  express = require('express')
const app = express()

const port = 3000

app.get('' , (req, res) => {
    res.send('hello world');
})

app.get('/help', (req,res)=>{
    res.send("how can i help you?")
})

app.get('/about', (req,res)=>{
    res.send("about");
})


app.get('/weather', (req,res) =>{
    res.send("weather");
})
app.listen(port, () =>{
    console.log(`listening on port ${port}`);
})