import express from 'express'
import homeController from '../controller/homeController.js';

const router = express.Router()

router.get('/', homeController.getHomepage)

router.get('/hoidanit', homeController.getHoiDanIT)

export default router