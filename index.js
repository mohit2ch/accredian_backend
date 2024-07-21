import express from 'express';
import 'dotenv/config'
import referralRoutes from './routes/referralRoutes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 5000;

app.use('/api/referrals', referralRoutes);

app.get('/', function(req, res){
    res.send("Hello World!")
})

app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
})