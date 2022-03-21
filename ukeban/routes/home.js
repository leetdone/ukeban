const express = require('express')
const router = express.Router()

const routerHandler = require('../routerHandler/home')

/* GET users listing. */
router.get('/', routerHandler.home)
//redirect to wechat website, but need an address, in ukeban.com no address is required 
router.get('/wechat', (req, res, next) =>{
    res.redirect('https://mp.weixin.qq.com/s/LKPaW-WavdcwhTTTChl3sA')
});
/* 
use router.get to create router to 
https://www.ukeban.com/#/product
https://www.ukeban.com/#/personal
https://www.ukeban.com/#/newsc
https://www.ukeban.com/#/merchant
https://www.ukeban.com/#/helpcenter
*/

//what to execute in middleware, need to call db?
//build API to interact with frontend?
//same https, different pages
//产品介绍，关于我们 404 at the bottom
module.exports = router
