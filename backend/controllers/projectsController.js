const Project = require('../models/projectModel');

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
};

// Add new project
const addProject = async (req, res) => {
  const { title, description, link, thumbnail } = req.body;

  const newProject = new Project({
    title,
    description,
    link,
    thumbnail,
	});

	try {
    await newProject.save();
    res.json(newProject);
  } catch (error) {
    res.status(400).json({ message: 'Error adding project' });
  }
};

module.exports = { getProjects, addProject };
