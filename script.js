const randomNumber = (num) => {
  return Math.floor(Math.random() * num); //It generates random number from 0 to num-1
};
const favAvenger = {
  avenger: [
    "Iron Man 😎",
    "Bat Man🧛‍♂️",
    "Super Man 👲",
    "Spider Man🏃‍♂️",
    "Thor ⛏😃",
    "Black Panther 👨‍🎓",
    "Captain America 👨‍🎨",
  ],
  messageFromYourAvenger: [
    "Never give Up",
    "Life is all about Learning",
    "Believe in you",
    "you are the best",
    "respect the process",
    "you got some gutts",
  ],
  randomEmoji: ["😎", "(⌐■_■)", "¹⁴³🤩", "😉", "😛", "", "o((⊙﹏⊙))o.", "😁"],
};
let messageForYou = [];
for (let prop in favAvenger) {
  let choice = randomNumber(favAvenger[prop].length);
  switch (prop) {
    case "avenger":
      messageForYou.push(
        `Hello dear..I am your lucky avenger  "${favAvenger[prop][choice]}".`
      );
      break;
    case "messageFromYourAvenger":
      messageForYou.push(`message for you: "${favAvenger[prop][choice]}".`);
      break;
    case "randomEmoji":
      messageForYou.push(`have a great day : "${favAvenger[prop][choice]}".`);
      break;
    default:
      messageForYou.push("sorry mate next time.");
  }
}
const wrapUpMessage = (array) => {
  return array.join("\n");
};
console.log(wrapUpMessage(messageForYou));
