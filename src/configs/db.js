const mongoose = require("mongoose");

module.exports = () => {
	return mongoose.connect(
		"mongodb+srv://root:root_123@cluster0.hrseu.mongodb.net/ssense?retryWrites=true&w=majority"
	);
};
