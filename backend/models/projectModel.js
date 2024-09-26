const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	link: { type: String, required: true },
	thumbnail: { type: String },
});

module.exports = mongoose.model('Project', projectSchema);
