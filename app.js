console.log("anyString");

const pronoun = ["the", "our", "your", "my"];
const adj = ["great", "big", "awesome", "ugly"];
const color = ["green", "lightblue", "black", "pink"];
const noun = ["jogger", "racoon", "dog", "horse"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let c = 0; c < color.length; c++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + color[c] + noun[k] + ".com");
      }
    }
  }
}
