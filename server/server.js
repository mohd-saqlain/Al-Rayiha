const express = require("express")
const app = express();
const port = 6000

app.use(express.json());
app.use('/user',require('./routes/user'));

app.listen(port,()=>{
    console.log(`Server is running on the ${port}`)
})