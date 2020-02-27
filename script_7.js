function Bot(){
  let answer = "";
  while (answer !== "exit") {
    answer = prompt("Parlez au bot (pour quitter \"exit\")");
    console.log(`Vous : \"${answer}\"`)
    if (answer.includes("Fortnite") || answer.includes("fortnite")) {
    console.log("Bot: \"on s'fait une partie soum-soum ?\"");
    }
    else if (answer[answer.length - 1] == "?") {
      console.log("Bot: \"Ouais Ouais...\"");
    }
    else if (answer === "exit") {
      console.log("Bot: \"++\"");
    }
    else if (answer === "") {
      console.log("Bot: \"t'es en PLS ?\"");
    }
    else if (answer == answer.toUpperCase()) {
      console.log("Bot: \"Pwa, calme-toi...\"");
    }
    else {
      console.log("Bot: \"balek.\"");
    }
  }
}
Bot();
