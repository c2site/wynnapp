import Lottery_manage from "./lottery_manage";

WebApp.connectHandlers.use("/api/v1/hash", (req, res) => {
    // if(req.query.hash && checkKey(req.query.key)) {
    //     const game = new Games_manager()
    //     console.log('----------------------------');
    //     console.log(req.query.hash);
    //     game.get_hash(req.query.hash)
    // }
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.end('ok');

    if(req.query.hash) {
        Lottery_manage.hash(req.query.hash);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({result: 100}));
    }
});