const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

//database connectivity
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('db connected');
})
.catch((error) => {
    console.log(error);
});

const dataModel = require('./models/dairy');

//adding data into database
app.get('/addtodb', async(req, res) => {
    const validation = new dataModel({
            userName:'anand',
            email:'anand.raj431@gmail.com',
            password:'asdf1234'
             });
             //=======way of callback function=======
            //  dataModel.save(validation, function(err, savedData){
            //     res.send(savedData);
            //  });
             //======way of promises in function======
            //  dataModel.save(validation)
            //  .then((savedData) => {
            //     res.send(savedData);
            //  });
             //======way of async await======
             await validation.save();
            //  res.send('Object saved');
             res.json(validation);
             res.json(validation);
   });

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true })); //to parse incoming form data
app.set('view engine', 'ejs'); //to Omit extension
 
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

const noteRoutes = require('./routes/dairy');
app.use(noteRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port 3001.`);
  });