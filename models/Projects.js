const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
    projectTitle: {
        type: String,
    },
    projectDescription: {
        type: String,
    },
    projectUrl: {
        type: String,
    },
    projectImages: {
        type: String,
    },
    projectIcon: {
        type: String,
    },
});
const Projects = mongoose.model('Projects', ProjectsSchema);

module.exports = Projects;
