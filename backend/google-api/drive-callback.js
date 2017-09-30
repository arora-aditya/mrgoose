var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/google-auth-callback', function(req, res, next) {
  res.render(req);
});

module.exports = router;
