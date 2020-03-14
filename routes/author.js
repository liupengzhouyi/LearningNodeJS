// author.js - 作者路由模块

const express = require('express');
const router = express.Router();

// 主页路由
router.get('/', (req, res) => {
    res.send('网站作者：刘鹏');
});

// “关于页面”路由
router.get('/about', (req, res) => {
    res.send('关于此网站作者');
});

// “关于页面”路由
router.get('/about/github', (req, res) => {
    res.send('作者GitHub: https://github.com/liupengzhoyi');
});

module.exports = router;