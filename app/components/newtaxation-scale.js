import Component from "@ember/component";

var min = 0;
var max = 7;
var random_score = Math.random() * Math.floor(max);
var score = Math.round(random_score * 10) / 10;

console.log(score);

export default Component.extend({
  model() {
    return score;
  }
});
