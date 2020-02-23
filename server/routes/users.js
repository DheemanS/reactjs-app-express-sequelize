var express = require('express');
var router = express.Router();
const db = require("../models");
const User = db.user;

/* GET users listing. */
router.get('/:page', function(req, res, next) {
  const limit = 5;
  const offset = (req.params.page -1 ) * limit;
  User.findAndCountAll({
    limit: limit,
    offset: offset
  }).then((users) => {
      users.page = req.params.page;
      users.limit = limit;
      res.json(users)
    })
});

//create user
router.post('/', function(req, res){
  User.create(req.body)
  .then(user => res.json(user))
})

//get friends by id
router.get('/:id/friends', function(req, res) {
  User.findByPk(req.params.id,{
    include: [
      {
        model: User,
          as: "Friends",
          required: false,
      }
  ]
  }).then(users =>
    res.json(users.Friends))
});

//get mutual friends
router.get('/:id/mutual-firends', async function(req, res){
  let qry = await db.sequelize.query('SELECT DISTINCT u.id, u.firstName, u.lastName FROM friends a INNER JOIN friends b ON a.friendId = b.userId INNER JOIN users u ON u.id = b.friendId WHERE a.userId = (:id) AND b.friendId <> a.userId', {
    replacements: {id: req.params.id},
    type: db.sequelize.QueryTypes.SELECT
  });
  res.json(qry)
})

module.exports = router;
