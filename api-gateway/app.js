const gateway = require("fast-gateway");

const port = 9001;
const server = gateway({
    routes: [
        {
            prefix: "/order",
            target: "http://localhost:8081/",
            hooks: {}
        },
        {
            prefix: "/payment",
            target: "http://localhost:8082/",
            hooks: {}
        }
    ]
});

server.get('/gateway', (req,res)=> {
    res.send("Gateway Called");
})

server.start(port).then(server=>{
    console.log('Listening on ' + `http://localhost:${port}`);
})