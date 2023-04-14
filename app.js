const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const uri = "mongodb+srv://web_test:test@cluster0.vjaiauy.mongodb.net/?retryWrites=true&w=majority";

app.use(express.static('public'));

// Define the route handler for the search request
app.get('/search', async (req, res) => {
  const query = req.query.q; // Get search query from URL parameter

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    const collection = client.db("sample_airbnb").collection("listingsAndReviews");
    const results = await collection.find({ $text: { $search: query } }).toArray();
    res.send(results); // Send search results back to client
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  } finally {
    await client.close();
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
