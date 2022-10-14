const quoteGenerator = async () => {
  const quote = document.querySelector('#quote');
  const author = document.querySelector('#author');
  await fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((json) => {
      if (json) {
        quote.textContent = json.content;
        author.textContent = json.author;
      } else {
        quote.textContent = 'We couldn\'t receive the quote...';
        author.textContent = 'Sorry! :(';
        console.log(json);
      }
    });
};

export default quoteGenerator;