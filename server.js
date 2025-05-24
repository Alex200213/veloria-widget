
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/ask', async (req, res) => {
  const question = req.body.message;
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: question }],
    });
    res.json({ reply: response.data.choices[0].message.content });
  } catch (err) {
    res.status(500).send({ error: 'OpenAI hiba', details: err.message });
  }
});

app.listen(3000, () => console.log('✅ VeloriaAI backend listening on port 3000'));
