import Route from "@ember/routing/route";

var data = [
  {
    title: "Algemeen",
    questions: [
      {
        label: "Geslacht van het kind",
        options: ["man", "vrouw"],
        weight: "-0,12611"
      },
      {
        label: "Leeftijd van het kind",
        options: [
          "0 tot 4 jaar",
          "4 tot 8 jaar",
          "8 tot 12 jaar",
          "12 tot 16 jaar",
          "16 tot 18 jaar"
        ],
        weight: "2"
      },
      {
        label: "Leeftijd van de vader bij geboorte",
        options: [
          "0 tot 20 jaar",
          "20 tot 25 jaar",
          "25 tot 30 jaar",
          "35 tot 40 jaar",
          "ouder dan 40 jaar"
        ],
        weight: "2"
      },
      {
        label: "Leeftijd van de vader bij geboorte",
        options: [
          "0 tot 20 jaar",
          "20 tot 25 jaar",
          "25 tot 30 jaar",
          "35 tot 40 jaar",
          "ouder dan 40 jaar"
        ],
        weight: "2"
      },
      {
        label: "Leeftijd verschil tussen de ouders",
        options: ["minder dan 5 jaar", "meer dan 5 jaar"],
        weight: "2"
      }
    ]
  },
  {
    title: "Werk en opleiding",
    questions: [
      {
        label: "Soort onderwijs van het kind",
        options: ["onbekend", "regulier onderwijs", "niet-regulier onderwijs"],
        weight: "-0,12611"
      },
      {
        label: "Actueel onderwijs niveau",
        options: [
          "Basisonderwijs",
          "Onderwijs onbekend",
          "Vmbo b/k, mbo 1 en mbo 2",
          "Vmbo g/t, mbo 3 en mbo 4",
          "Vwo en Wo bachelor"
        ],
        weight: "2"
      },
      {
        label: "Voortijdig schoolverlaten",
        options: [
          "onbekend",
          "Niet van toepassing",
          "8 tot 12 jaar",
          "Geen vsv: uit onderwijs met startkwalificatie",
          "Voortijdig schoolverlater"
        ],
        weight: "2"
      },
      {
        label: "Hoogst behaalde onderwijsniveau vader",
        options: [
          "Geen onderwijsdata bekend",
          "Vmbo-b/k, mbo 1 en mbo 2",
          "25 tot 30 jaar",
          "Vmbo-g/t, mbo 3 en mbo 4",
          "Vwo en Wo-bachelor en Wo-master"
        ],
        weight: "2"
      },
      {
        label: "Hoogst behaalde onderwijsniveau moeder",
        options: [
          "Geen onderwijsdata bekend",
          "Vmbo-b/k, mbo 1 en mbo 2",
          "25 tot 30 jaar",
          "Vmbo-g/t, mbo 3 en mbo 4",
          "Vwo en Wo-bachelor en Wo-master"
        ],
        weight: "2"
      }
    ]
  }
];

for (var category of data) {
  console.log(category.title);
  for (var question of category.questions) {
    console.log("question", question);
    console.log("label: ", question.label);
    for (var option of question.options) {
      console.log("option", option);
    }
  }
}

export default Route.extend({
  model() {
    return data;
  }
});
