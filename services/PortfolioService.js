const { models } = require('../models');

module.exports = {
    findAllProjects: () => models.Projects.find({}, (succ, user) => user),
    portfolioMeta: () => models.PortfolioMeta.find({}, (succ, meta) => meta),
    createContactForm: (root, args) => {
        const contactForm = new models.ContactForm({
            name: args.contactFormInput.name,
            email: args.contactFormInput.email,
            phone: args.contactFormInput.phone,
            website: args.contactFormInput.website,
            message: args.contactFormInput.message,
            createdAt: new Date(),
        });
        return contactForm.save().then(() => true);
    },
    createProject: (root, args) => {
        const Projects = new models.Projects({
            projectTitle: args.projectInput.projectTitle,
            projectDescription: args.projectInput.projectDescription,
            projectUrl: args.projectInput.projectUrl,
            projectImages: args.projectInput.projectImages,
            projectIcon: args.projectInput.projectIcon,
        });
        return Projects.save().then(() => true);
    },
    updateProject: (root, args) => {
        const Projects = new models.Projects({
            _id: args.projectInput._id,
            projectTitle: args.projectInput.projectTitle,
            projectDescription: args.projectInput.projectDescription,
            projectUrl: args.projectInput.projectUrl,
            projectImages: args.projectInput.projectImages,
            projectIcon: args.projectInput.projectIcon,
        });

        return models.Projects.findByIdAndUpdate({ _id: args.projectInput._id }, Projects, (err, succ) => succ);
    },
    updatePortfolioMeta: (root, args) => models.PortfolioMeta.deleteMany().then(() => models.PortfolioMeta.create(args.portfolioMetaInput).then(() => true)).catch(() => false),
    contactFormService: () => models.ContactForm.find().then((contactForm) => contactForm),

};
