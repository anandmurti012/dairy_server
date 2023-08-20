 const mongoose = require('mongoose');

 const dataSchema = new mongoose.Schema({
userName:String,
email:String,
password:String
 });

 const dataModel = mongoose.model('dairyNotes', dataSchema);
 module.exports = dataModel;