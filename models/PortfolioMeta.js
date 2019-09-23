const mongoose = require('mongoose');

const PortfolioMetaSchema = new mongoose.Schema({
    metaKey: {
        type: String,
    },
    metaValue: {
        type: JSON,
    },
    metaType: {
        type: String,
    },
});
const PortfolioMeta = mongoose.model('PortfolioMeta', PortfolioMetaSchema);
module.exports = PortfolioMeta;
