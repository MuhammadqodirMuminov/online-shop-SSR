const fs = require('fs');

const deleteFile = path => {
	fs.unlink(path, function (err) {
		if (err) throw Error(err);
	});
};

exports.deleteFile = deleteFile;
