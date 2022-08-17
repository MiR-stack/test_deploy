const Users = require('../db/model/user')

const router = require('express').Router()


// registration

router.post('/registration', async (req,res)=>{
    const {name,email,password} = req.body


    const user = new Users({name,email,password})

   const result = await user.save()

   res.redirect('/')


})



module.exports = router