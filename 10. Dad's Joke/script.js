const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  // Using .then
  //   fetch("https://icanhazdadjoke.com", config)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       jokeElement.innerHTML = data.joke;
  //     });

  // Usin async await
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeElement.innerHTML = data.joke;

  //Also u can use axios
}

jokeBtn.addEventListener("click", () => {
  generateJoke();
});
