function updateWordLengthInput() {
  const slider = document.getElementById("word-length-slider");
  const input = document.getElementById("word-length-input");
  input.value = slider.value;
}

function updateWordLengthSlider() {
  const slider = document.getElementById("word-length-slider");
  const input = document.getElementById("word-length-input");
  slider.value = input.value;
}

async function generateWord() {
  const length = document.getElementById('word-length-input').value;
  const language = document.getElementById('language').value;
  const url = `/random-word?length=${length}&language=${language}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("random-word").textContent = data.word;
  } catch (error) {
    console.error('Erreur:', error);
    document.getElementById("random-word").textContent = 'Erreur';
  }
}
