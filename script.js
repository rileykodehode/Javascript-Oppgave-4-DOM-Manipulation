// Ein del av funksjonene som gjer nettsida mørk.
const makeDark = (element) => {
  element.style.backgroundColor = "var(--Midnight-Violet";
};

// Dei neste linjene av kode er til å lage
const gameArray = [
  {
    title: "Team Fortress 2",
    year: 2007,
    multiplayer: true,
    description:
      "Team Fortress 2 is a first person class shooter. Released by Valve in October that year.",
  },
  {
    title: "Killing Floor 2",
    year: 2012,
    multiplayer: true,
    description: "A very fun multiplayer wave zombie shooter!",
  },
  {
    title: "The Sims 2",
  },
  {
    title: "Deadlock",
  },
];

// Variable the makes the game card, gathering the div and making it dynamic.
const gameCard = document.querySelector("#game-card");

const gameDescriptionInCard = document.createElement("p");
for (let i = 0; i < gameArray.length; i++) {
  gameDescriptionInCard.textContent = gameArray[i];
}

// Variable to gather the h2 from the HTML
const titleDefaultString = document.querySelector(".title");

// Function for making the title in the card dynamic.
const makeCard = (element) => {
  // First part, making the title of the card
  const title = document.createElement("h2");
  title.classList.add("title");
  element.textContent = gameArray[0].title;

  //  Part of the function to make the image portion of the card.
  const cardImage = document.createElement("img");
  cardImage.classList.add("game-thumbnail");
  // give img a source and alt text
  cardImage.src = `images/${gameArray[0].title}.png`;
  cardImage.append(element);
};

// The function that changes the title template string
// from default to a string gathered from an array
// after clicking the button below the div.
const gameButton = document.querySelector("#game-chooser");
gameButton.addEventListener("click", () => {
  console.log("Button clicked!");
  makeCard(titleDefaultString);
});
