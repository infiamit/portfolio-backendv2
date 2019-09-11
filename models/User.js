const mongoose = require('mongoose');

const toLower = (v) => v.toLowerCase();

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        set: toLower,
    },
    email: {
        type: String,
        unique: true,
        set: toLower,
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
