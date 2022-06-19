const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const authentication = require('./middleware/authMiddleware')

//Setup express
const app = express();
const port = process.env.PORT || 3001

const uri = process.env.ATLAS_URI
console.log(uri)

//Setup mongo connection
mongoose.connect(uri, { 
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB succesfully connected");
})

connection.on('error', console.error.bind(console, 'MongoDB connection error: '))

app.use(cors());
app.use(express.json());
app.use(authentication)

//Sample route for testing middleware
app.get('/', (req, res) =>{
    console.log("Success get")
    console.log(req.email)
})

const keuanganRouter = require('./routes/keuanganRoute')
const kredensialRouter = require('./routes/kredensialRoute')
const tabunganRouter = require('./routes/tabunganRoute')
const anggaranRouter = require('./routes/anggaranRoute')

app.use('/keuangan', keuanganRouter)
app.use('/kredensial', kredensialRouter)
app.use('/tabungan', tabunganRouter)
app.use('/anggaran', anggaranRouter)



app.listen(port, () => {
    console.log(`Server is running on port: ${port} `);
});