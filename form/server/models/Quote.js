// models/Quote.js
const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  contractorName: String,
  company: String,
  roofSize: Number,
  roofType: String,
  projectCity: String,
  projectState: String,
  projectDate: Date,
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;


