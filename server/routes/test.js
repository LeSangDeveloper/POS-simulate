const { Router } = require('express')
const router = Router();
const fs = require('fs')
router.use(function (req, res, next) {
    next()
})

router.get('/test/add', (req, res, next) => {
    try {
        var obj = {
            table: []
        };
        obj.table.push({id: 2, square: 2});
        var json = JSON.stringify(obj)
        res.send('Test');
        fs.writeFile('test.json', json, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    } catch (err)
    {
        next(err)
    }
})

router.get('/test/append', (req, res, next) => {
    try {
        fs.readFile('test.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
                res.send("cannot read file (no exits)")
            } else {
                if (data.length <= 0)
                {
                    res.send("cannot read file (empty)")
                }
                else
                {
                    obj = JSON.parse(data); //now it an object
                    obj.table.push({id: 2, square:3}); //add some data
                    json = JSON.stringify(obj); //convert it back to json
                    fs.writeFile('test.json', json, 'utf8', function (err) {
                        if (err) return console.log(err);
                    }); // write it back 
                    res.send('Appended');
                }
        }});
    } catch (err) {
        next(err)
    }
})

router.get('/test/read', (req, res, next) => {
    try {
        fs.readFile('test.json', 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
                res.send("cannot read file (no exits)")
            } else {
                if (data.length <= 0)
                {
                    res.send("cannot read file (empty")
                }
                else
                {
                    obj = JSON.parse(data);
                    res.send(obj)
                }
            }
        })
    }
    catch {

    }
})

module.exports = router;