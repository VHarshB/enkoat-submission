const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Quote = require('./models/Quote'); // ✅ Already defined in its own file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB ONCE
mongoose.connect('mongodb://127.0.0.1:27017/enkoatDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// GET route to fetch all quotes
app.get('/quotes', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ projectDate: -1 }); // sorted by newest date first
    res.json(quotes);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});


// POST route to save a quote
app.post('/submit-quote', async (req, res) => {
  console.log('Quote submission received');
  console.log(req.body);

  const { contractorName, company, roofSize, roofType, projectCity, projectState, projectDate } = req.body;

  try {
    const newQuote = new Quote({
      contractorName,
      company,
      roofSize,
      roofType,
      projectCity,
      projectState,
      projectDate,
    });

    await newQuote.save();
    res.status(201).json(newQuote);
  } catch (error) {
    console.error('Error saving quote:', error);
    res.status(500).json({ error: 'Failed to save quote' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
