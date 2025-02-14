const express = require("express");
const wordgenerator = require("wordwhize");

const app = express();
const port = process.env.PORT || 3000;

async function generateWord(length, language) {
  try {
    const word = await wordgenerator.gen(Number(length), language); 
    return word;
  } catch (error) {
    console.error("Erreur:", error.message);
    return "Erreur";
  }
}

app.get("/random-word", async (req, res) => {
  const { length, language } = req.query;
  const word = await generateWord(length, language);
  res.json({ word });
});

app.use(express.static("../frontend"));

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
