const express= require('express');
const {serverConfig,dbConnect}=require('./config');
const apiRoutes= require('./routes');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(serverConfig.PORT,()=>{
    dbConnect();
    console.log(`Successfully started the server on PORT: ${serverConfig.PORT}`);
});