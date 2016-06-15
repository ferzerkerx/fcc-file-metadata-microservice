'use strict';

var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var path = process.cwd();
var FileAnalyzerService = require(path + '/app/services/FileAnalyzerService.js');

module.exports = function (app) {
    var fileAnalyzerService = new FileAnalyzerService();

    app.post('/api/fileanalyse/', upload.single('targetFile'), fileAnalyzerService.analyze);

};