const express = require('express');
const app = express();
const cors = require('cors')
var bodyParser = require('body-parser');
const { json } = require('body-parser');
const port = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Welcome to backend")
})

const users = [
    {id:0, name: "Rashidul Karim", email: "rashidul@gmail.com", phone: "0191555256"},
    {id:1, name: "Reazul Karim", email: "Reazul@gmail.com", phone: "0191655256"},
    {id:2, name: "Sazedul Karim", email: "Sazedul@gmail.com", phone: "01917555256"},
    {id:3, name: "Abedul Karim", email: "Abedul@gmail.com", phone: "0191855256"},
    {id:4, name: "Tanvir Karim", email: "Tanvir@gmail.com", phone: "0191955256"},
    {id:5, name: "Obaidul Karim", email: "obaidul@gmail.com", phone: "0192155256"},
]


app.get('/users', (req, res) => {
    const query = req.query.search
    if(query){
        const matching = users.filter(user => user.name.toLocaleLowerCase().includes(query))
        res.send(matching)
    }else{
        res.send(users)
    }
    
    // res.send(users)
})

app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id= users.length
    users.push(newUser)
    res.send(JSON.stringify(newUser))    
})

app.get('/users/:id', (req, res) => {
    const id = (req.params.id)
    res.send(users[id])
})



app.listen(port)