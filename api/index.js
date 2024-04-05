import express from 'express'
const PORT = 3001
const app = express();
import mongoose from 'mongoose'
import 'dotenv/config'
import userRoutes from '../api/routes/user.route.js'

app.use(express.json());
 
mongoose.connect(`${process.env.DB_LOCATION}`, {
     autoIndex:true
})
.then(() => {
    console.log('MongoDB is connected');
    
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


app.use('/api/user',userRoutes);

 

 