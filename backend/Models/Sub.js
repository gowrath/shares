const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let subSchema = new Schema({
            subname: {
                type: String
            },
            price: {
                type: Number
            }
        }, 
    {collection: 'subs'}
)


module.exports = mongoose.model('Sub', subSchema)