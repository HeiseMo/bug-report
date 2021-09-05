const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const Schema   = mongoose.Schema;

const MessageSchema = new Schema({
  message: String,
  messageCreator: ObjectId,
  reportId: String
}, 
{
  timestamps: true
});

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;