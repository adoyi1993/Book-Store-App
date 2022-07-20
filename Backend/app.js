const express = require ("express");
const mongoose = require ("mongoose");
const Port = process.env.PORT || 5007;
const router = require("./routes/book-routes")
const app = express();
const cors = require('cors')
const path = require ('path');

// middleware
app.use(express.json());
app.use(cors());
app.use("/books", router)
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://adoyib:08171448869Ab.@cluster0.nt1f2.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=> console.log("connected to Database"))
.then(()=>{
    if (process.env.NODE_ENV=== 'production' ){
        app.use(express.static('book-store/build'))
        app.get('*', (req, res)=>{

            res.sendFile(path.resolve(__dirname, 'book-store', 'build', 'index.html'));
        });
    }
    app.listen(Port);
}).catch((err)=>console.log(err));







