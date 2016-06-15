'use strict';

var path = process.cwd();
var FileAnalyzerService = require(path + '/app/services/FileAnalyzerService.js');


module.exports = function (app) {
    var fileAnalyzerService = new FileAnalyzerService();

    app.route('/api/fileanalyse/').post(fileAnalyzerService.analyze);

};