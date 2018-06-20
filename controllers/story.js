const express = require('express');
const router = express.Router();

router.get('/story',(req,res)=>{
	res.send("Story Nahi hai");
});

module.exports = router;
