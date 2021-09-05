const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const Schema   = mongoose.Schema;

const reportSchema = new Schema({
  title: String,
  description: String,
  status: String,
  priority: String,
  reportCreator: ObjectId,
  owner: String,
}, 
{
  timestamps: true
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;