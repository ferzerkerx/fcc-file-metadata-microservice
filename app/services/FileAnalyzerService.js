'use strict';


var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

function FileAnalyzerService() {

    this.analyze = function (req, res) {

    };
}

module.exports = FileAnalyzerService;