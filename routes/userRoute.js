const router = require('express').Router()
const userController = require('../controllers/userController')

/* router.post('/',(req, res)=>{
    res.send(`APi is working now!`)
}) */

router.post('/', userController.signUp)

router.post('/login', userController.logIn)

router.patch('/:userId', userController.updateUser)

router.delete('/:userId', userController.deleteUser)

router.get('/data',userController.data)

module.exports = router;