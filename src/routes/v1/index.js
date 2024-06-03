const express = require('express');

const { InfoController } = require('../../controller');
const { AuthRequestMiddlewares } = require('../../middleware');
const userRouter = require('./UserRoutes');
const router = express.Router();

router.get('/info',AuthRequestMiddlewares.checkAuth, InfoController.info);

router.use('/user', userRouter)

module.exports = router;