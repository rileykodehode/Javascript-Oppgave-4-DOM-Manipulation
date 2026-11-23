// En funksjon som gjer nettsida mørk.
const makeDark = (element) => {
  element.style.backgroundColor = "var(--Midnight-Violet";
};

// Variable to gather the h2 from the HTML
const titleDefaultString = document.querySelector(".title");
// Variable the makes the game card, gathering the div and making it dynamic.
const gameCard = document.querySelector("#game-card");

// Array til alle spelane!
const gameArray = [
  {
    title: "Team Fortress 2",
    year: 2007,
    multiplayer: "Yes",
    genre: "Genre: Class based FPS",
    img: "Images/tf2teamshotlogo.png",
    alt: "A cover image of Team Fortress 2, with it's full title and style. Every mercenary displayed with Heavy on the foreground.",
    description:
      "Team Fortress 2 is a first person class shooter. Released by Valve in October that year. Pick out of a class 9 different mercinaries, all with incredibly unique gameplay! In this multiplayer class shooter, you work with your team to beat the objective together against the opposite team of the same classes. The game is chaotic, satisfying and enjoyable to anyone in any skill level. This game is a classic for a VERY good reason!",
  },
  {
    title: "Killing Floor 2",
    year: 2016,
    multiplayer: "Yes",
    genre: "Zombie Wave Survival Campaign Shooter",
    img: "Images/killingfloor2.png",
    alt: "A survivor in a gas mask, equipped with a gun surrounded by zombies.",
    description: "A very fun multiplayer wave zombie shooter!",
  },
  {
    title: "The Sims 2",
    year: 2004,
    multiplayer: "No",
    genre: "Life-Simulator",
    img: "Images/sims2.png",
    alt: "Multiple Sims posed in various poses and action on a blue background.",
    description:
      "A life simulator, this is an much older iteration of the franchise. However, it's by far my favourite! The game is most immersive out of the all the releases as the game was developed with an incredible passion. It manages to warm your heart, make you laugh out loud or shiver your timbers! Which are incredible ranges of experiences and what The Sims 2 does amazing.",
  },
  {
    title: "Deadlock",
    year: "N/A",
    multiplayer: "Yes",
    genre: "Third-Person MOBA",
    img: "Images/Deadlock.png",
    alt: "Logo next to title infront of a city background.",
    description:
      "A bit of a wildcard. This game hasn't been released but is in invite beta. Which means if you know someone who already plays this game, you can ask them give you an invite into the game! It's an exciting new IP that Valve is developing and so far the reviews of the game have been positive. My knowledge of this game is basically nothing. However, it seems like a great shout.",
  },
];

// Template til ei spel som kan leggast inni arrayen
/* title: " ",
 year: " ",
 multiplayer: " ",
 genre: " ",
 img: " ",
 alt: " ",
 description: " ",
 */

// Debugging
console.log(gameArray[0].img);
console.log(gameArray[0].description);

// Funksjon W.I.P. til å lage beskrivelsen i kortet
const gameDescriptionInCard = document.createElement("p");

// Loop start
for (let i = 0; i < gameArray.length; i++) {
  gameDescriptionInCard.textContent = gameArray[i];
}
// Loop end

// Function for making the title in the card dynamic.
const makeCard = (element) => {
  // Randomly select a game out of the array
  const randomIndex = Math.floor(Math.random() * gameArray.length);
  const randomGame = gameArray[randomIndex];

  // First part, changing the default title text of the card
  element.textContent = randomGame.title;

  // Add the other details and info.
  const cardYearRelease = document.createElement("p");
  cardYearRelease.classList.add("game-p");
  cardYearRelease.textContent = `Released: ${randomGame.year}`;

  const cardMultiplayerBoolean = document.createElement("p");
  cardMultiplayerBoolean.classList.add("game-p");
  cardMultiplayerBoolean.textContent = `Multiplayer: ${randomGame.multiplayer}`;

  const cardGenreInfo = document.createElement("p");
  cardGenreInfo.classList.add("game-p");
  cardGenreInfo.textContent = `Genre: ${randomGame.genre}`;

  //  Part of the function to make the image portion of the card.
  const cardImage = document.createElement("img");
  cardImage.classList.add("game-thumbnail");
  // give img a source and alt text
  cardImage.src = randomGame.img;
  cardImage.alt = randomGame.alt;

  // Add description to the card!
  const cardDescription = document.createElement("p");
  cardDescription.classList.add("game-description");
  cardDescription.textContent = randomGame.description;

  // Append
  element.append(
    cardYearRelease,
    cardGenreInfo,
    cardMultiplayerBoolean,
    cardImage,
    cardDescription,
  );
};

// The function that changes the title template string
// from default to a string gathered from an array
// after clicking the button below the div.
const gameButton = document.querySelector("#game-chooser");
gameButton.addEventListener("click", () => {
  console.log("Button clicked!");
  makeCard(titleDefaultString);
});

console.log(titleDefaultString);
