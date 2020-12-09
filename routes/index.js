const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()


router.get('/', (req, res) => res.send('This is root'))
router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/users/:id', controllers.getUserById)
// router.put('/change-password/:id', controllers.changePassword)


module.exports = router;