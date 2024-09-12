import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

// MongoDB URI: Ensure the password and other details are correct
const MONGODB_URI = 'mongodb+srv://iamyathz:spHfmGj3pjshXgwl@cluster0.lorwk.mongodb.net/mydatabase?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true, // Corrected spelling
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error('Error Connecting to MongoDB', error));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

// GET request to fetch users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users' });
    }
});

// POST request to add a new user
app.post('/api/users', async (req, res) => {
    const newUser = new User(req.body);

    try {
        await newUser.save();
        const users = await User.find();
        res.status(201).json(users);
    } catch (err) {
        res.status(400).json({ message: 'Error Saving User' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// let users = [
//     { name: 'Yathish', age: 24 },
//     { name: 'Akshay', age: 25 },
//     { name: 'Sougandh', age: 30 },
// ]

// app.get('/api/data', (req, res) => {
//     res.json(users)
// })

// app.post('/api/data',(req,res)=>{
//     const newUser = req.body

//     if (newUser.name && newUser.age){
//         users.push(newUser)
//         res.status(201).json(users)
//     } else {
//         res.status(400).json({message:"Invalid Data Name and Age is Required"})
//     }
// })

// app.listen(PORT, () => {
//     console.log(`Server Running on the localhost:${PORT}`);

// })