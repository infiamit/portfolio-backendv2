const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
    },
    type: {
        type: String,
    },
    password: {
        type: String,
    },
    isActive: {
        type: String,
    },
});
const User = mongoose.model('User', UserSchema);
module.exports = User;
