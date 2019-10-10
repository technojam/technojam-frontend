const express = require('express');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const app = express();

//database test 
const database = {
    users: [{
        id: '123',
        name: 'Test',
        email: 'test@gmail.com',
        password: 'screct',
        joined : new Date
    },
    {
        id: '124',
        name: 'Test2',
        email: 'test2@gmail.com',
        password: 'screct2',
        joined : new Date
    },
    {
        id: '125',
        name: 'Test3',
        email: 'test3@gmail.com',
        password: 'screct3',
        joined : new Date
    }
 ]
}

app.get('/', (req, res) => {
    res.send(database.users);
})

////sign in 
app.get('/signin', (req, res) => {
    if (req.body.email === database.users[0].email && 
        req.body.password === database.users[0].password) {
        res.json('login successful!!');
    }else{
        res.status(404).json('error login');
    }
})

///sign up user
app.get('/signup', (req, res) => {
   const { email, name, password} = req.body;
   database.users.push({
       id: '126',
       name: name,
       email: email,
       password: password,
       joined: new Date
   })
   res.json(database.users[database.users.length - 1]);
})

app.listen(3000, ()=> {
    console.log('App is running on port 3000');
})