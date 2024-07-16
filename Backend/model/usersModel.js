const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const UsersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        trim: true
    },
    lastName: {
        type: String,
        require: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true
    },
    dateOfBirth: {
        type: Date,
        required: true,
        trim: true,
    },
    address1: {
        type: String,
        require: true,
        trim: true
    },
    address2: {
        type: String,
        trim: true
    }
});

UsersSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
  }
  next();
});

module.exports = mongoose.model('Users', UsersSchema);