'use strict';

function FileAnalyzerService() {

    this.analyze = function (req, res) {
        var result = {};
        var targetFile = req.file;
        if (targetFile) {
            result.fileSize = targetFile.size;
        }
        return res.json(result);
    };
}

module.exports = FileAnalyzerService;