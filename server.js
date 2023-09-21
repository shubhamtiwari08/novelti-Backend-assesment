const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const dotenv = require("dotenv")

dotenv.config()



const { initializeDatabase } = require("./db/db.connection");
const {User} = require('./models/users.model')
const userRoutes= require('./routes/userRoutes')

initializeDatabase()

app.use(express.json())

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

app.use('/api', userRoutes)



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});