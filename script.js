// fetch('https://icanhazdadjoke.com/slack')
fetch("https://type.fit/api/quotes")
  .then((data) => data.json())
  .then((quoteData) => {
    let n = Math.floor(Math.random() * 100 + 1);
    const quoteText = quoteData[n].text;
    const quoteElement = document.getElementById("quoteElement");
    quoteElement.innerHTML = quoteText;
  });
