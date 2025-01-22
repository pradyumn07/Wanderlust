const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hi,I am root!");
});

//Index-users
app.get("/users",(req,res)=>{
    res.send("GET for show users");
});

//Show-users
app.get("/users/:id",(req,res)=>{
    res.send("GET for user id");
});

//Post-users
app.post("/users",(req,res)=>{
    res.send("POST for users");
});


//Delete-users
app.delete("/users/:id",(req,res)=>{
    res.send("DELETE for users id");
});

//Posts
//Index
app.get("/posts",(req,res)=>{
    res.send("GET for show post");
});

//Show
app.get("/posts/:id",(req,res)=>{
    res.send("GET for post id");
});

//Post
app.post("/posts",(req,res)=>{
    res.send("POST for post");
});


//Delete
app.delete("/posts/:id",(req,res)=>{
    res.send("DELETE for post id");
});


app.listen(3000,()=>{
    console.log("server is listening to port 3000");
});