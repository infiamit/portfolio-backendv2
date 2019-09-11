const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

module.exports = {

    bcrypt: (value) => bcrypt.hashSync(value, salt),
    compareHash: (hash, value) => bcrypt.compareSync(value, hash),
};
