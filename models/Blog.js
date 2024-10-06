const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: 'String',
        trim: true,
        required: true
    },
    content: {
        type: 'String',
        required: true
    },
    author: {
        type: 'String',
        required: 'true',
        trim: true
    },
    published: {
        type: Boolean,
        default: false
    },
    category: {
        type: 'String',
        trim: true
    },
    name: {
        type: "String",
        maxlength: 20
    }

})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog