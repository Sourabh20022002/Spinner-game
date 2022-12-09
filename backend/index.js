const express = require('express');
const cors = require('cors');
require('./db/config')
const User = require('./db/User')
const app = express();

app.use(express.json())
app.use(cors());
app.use(express.text())

app.post("/register", async (req, res) => {
     let user = new User(req.body);  
     let result = await user.save();
     result = result.toObject();
     delete result.password;  // for delete paswords
     res.send(result)
})





app.listen(5000);