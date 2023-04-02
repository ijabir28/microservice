const express = require("express");
const app = express();

const port = 8081;
app.get("/list", (req,res)=>{
    let response = {
        data: {
            item: [
                {
                    id: 1,
                    name: 'order-1'
                },
                {
                    id: 2,
                    name: 'order-2'
                }
            ]
        }
    };
    res.status(200).json(response);
});
app.get("/", (req,res)=>{
    res.send("Order called");
});

const listener = app.listen(port, ()=>{
    console.log('Listening on ' + `http://localhost:${listener.address().port}`);
})