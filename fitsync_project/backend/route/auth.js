const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth');
const authGuard = require('../middleware/authGuard');

router.post('/register', register);
router.post('/login', login);

router.get('/profile', authGuard, (req, res) => {
  res.json({
    message: 'Access granted to private route!',
    user: req.user
  });
});

module.exports = router;  
