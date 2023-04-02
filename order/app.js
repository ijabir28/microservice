const express = require("express");
const app = express();
const axios = require('axios');

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

app.get('/paymentViaOrder', function (req, res) {

// Make a request for a user with a given ID
    axios.get('http://localhost:9001/payment/')
        .then(function (response) {
            // handle success
            res.status(200).json(response.data);
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
        });

})

const listener = app.listen(port, ()=>{
    console.log('Listening on ' + `http://localhost:${listener.address().port}`);
})