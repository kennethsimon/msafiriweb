const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const aboutusController = require('../controllers/aboutusController');
const contactusController = require('../controllers/contactusController');
const destinationsController = require('../controllers/destinationsController');
const galleryController = require('../controllers/galleryController');
const safariController = require('../controllers/safariController');
const safaridetailsController = require('../controllers/safaridetailsController')
const safaridetails1Controller = require('../controllers/safaridetails1Controller');

router.get('/', homeController.home);
router.get('/aboutus', aboutusController.aboutus);
router.get('/contactus', contactusController.contactus);
router.get('/destinations', destinationsController.destinations);
router.get('/gallery', galleryController.gallery);
router.get('/safari', safariController.safari);
router.get('/safaridetails', safaridetailsController.safaridetails);
router.get('/safaridetails1', safaridetails1Controller.safaridetails1);

module.exports = router;