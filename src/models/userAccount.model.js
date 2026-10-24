import {Schema, model} from 'mongoose';
import {USER, MODERATOR, ADMIN} from '../configuration/constants.js';

const userAccountSchema = new Schema({
    _id: {
        type: String,
        required: true,
        alias: 'login'
    },
    // TODO Create userAccountSchema for Mongoose
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        enum: [USER, MODERATOR, ADMIN],
        default: [USER]
    }
});

export default model('UserAccount', userAccountSchema, 'users');