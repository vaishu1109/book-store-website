import express from 'express';
import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT=process.env.PORT || 4000;
const URL=process.env.MongoDBURL;
try{

}catch(error){
    
}
app.get('/', (req, res) => {
  res.send('vaishnavi')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
