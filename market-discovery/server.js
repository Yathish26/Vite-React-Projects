import express from 'express'
import cors from 'cors'
const app = express();
const PORT = 5000;
app.use(cors())

const Vegetables = [
    {Name:'Tomato',Price:30},
    {Name:'Onion',Price:28},
]

app.get('/',(req,res)=>{
    res.send(Vegetables)
})

app.listen(PORT,()=>{
    console.log(`Server Running on the PORT ${PORT}`);
    
})