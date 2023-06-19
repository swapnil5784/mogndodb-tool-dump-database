var express = require('express');
var router = express.Router();
const exec = require('child_process').exec
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {

  const command = exec('mongodump --uri=mongodb://admin:admin@localhost:27017/mycircle?authSource=admin --collection posts --gzip --out=/home/swapnils/Desktop/dumps ')

  // const command = exec('mongorestore --uri=mongodb://admin:admin@localhost:27017/testjune /home/swapnils/Desktop/dumps/online-website')

  command.stdout.on('data', function (data) {
    console.log('command data = = > >', data)
  })
  command.stderr.on('data', function (data) {
    console.log('command on error data = = > >', data)
  })
  res.redirect('/');
});

module.exports = router;
