let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// Sub Model

let subSchema = require('../models/Sub');

// CREATE Sub
router.route('/subslist').post((req, res, next) => {
    subSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        }
        else {
            console.log(data)
            res.json(data)
        }
    })
});

// READ Subs
router.route('/subslist').get((req, res) => {
    subSchema.find((error, data) => {
        if (error) {
            return next(error)
        }
        else {
            res.json(data)
        }
    })
})

// Get Single Sub
router.route('/subslist/:id').get((req, res) => {
    subSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  

  // Update Sub
router.route('/subslist/:id').put((req, res, next) => {
    subSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Sub updated successfully !')
      }
    })
  })


  // Delete Student
router.route('/subslist/:id').delete((req, res, next) => {
    subSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  
  module.exports = router;