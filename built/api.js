/**
 * Created by Kane on 15/8/19.
 */
'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

module.exports = router;

var PREFIX = 'gulu.tester.';
var SUFFIXS = ['report', 'photo'];
var FILE_EXT = '.json';
var CONNECTOR = '_';
var TRANSFORMED_REPORT_DIR = './output';

router.post('/transfer', function (req, res) {
  var order_id = req.body.order_id;
  var car_id = req.body.car_id;

  var data = {};
  SUFFIXS.forEach(function (suffix) {
    var filename = PREFIX + [order_id, car_id, suffix].join(CONNECTOR);
    var filepath = path.resolve(process.cwd(), TRANSFORMED_REPORT_DIR, filename + FILE_EXT);
    var transformed = fs.readFileSync(filepath);

    data[suffix] = transformed.toString();
  });

  res.status(200).json({
    code: 200,
    data: data
  });
});