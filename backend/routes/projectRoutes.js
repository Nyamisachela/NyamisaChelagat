const express = require('express');
const { getProjects, addProject } = require('../controllers/projectsController');
const router = express.Router();

router.route('/projects').get(getProjects).post(addProject);
module.exports = router;
