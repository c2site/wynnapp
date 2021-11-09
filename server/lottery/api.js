import Lottery_manage from "./lottery_manage";

WebApp.connectHandlers.use("/api/v1/hash", (req, res) => {
    if(req.query.key === 'HNj34dkjNahdnnBDhhadaj23j1h3884jj1nndJKmdakad') {
        res.writeHead(300, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 100}));
    }
    if(req.query.hash) {
        Lottery_manage.hash(req.query.hash);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({result: 100}));
    }
});