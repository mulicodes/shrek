const quizData = {
  questions: [
    {
      id: 0,
      text: "...ciao Raff... ho qualche domanda da farti...😳😳",
      answers: [
        { text: "ok dimmi baby...", next: 1 }
      ]
    },
    {
      id: 1,
      text: "ti sei lasciato?",
      answers: [
        { text: "sì", next: 2 },
        { text: "no", next: 3 }
      ]
    },
    {
      id: 2,
      text: "immaginavo... e ho capito bene? mi stai mostrando interesse?🫣",
      answers: [
        { text: "sì", next: 4 },
        { text: "no", next: 5 }
      ]
    },
    {
      id: 3,
      text: "🤨allora lasciami stare...",
      answers: []
    },
    {
      id: 4,
      text: "ottimo! hai ancora bei gusti... ma cos'è che ti interessa di me?",
      answers: [
        { text: "soltanto sesso con una bella gnocca...🦍💦", next: 6 },
        { text: "conoscere meglio la gnocca in gamba che sei diventata🐻🌝", next: 7 }
      ]
    },
    {
      id: 5,
      text: "oh ok... peggio x te🦶🏻🦶🏻",
      answers: []
    },
    {
      id: 6,
      text: "purtroppo non è la migliore delle idee! mi sentirei probabilmente di merda dopo... meglio lasciar perdere🥲🫦🤝",
      answers: []
    },
    {
      id: 7,
      text: "oh... wow.... e cosa vorresti fare con me?",
      answers: [
        { text: "continuare a mandarmi reel e a fissarmi quando siamo tra gli altri fino all'eternità", next: 8 },
        { text: "eh uscire con te prima o poi...!", next: 9 }
      ]
    },
    {
      id: 8,
      text: "e che cazzo però!",
      answers: []
    },
    {
      id: 9,
      text: "questa è una buona idea... che facciamo?",
      answers: [
        { text: "andiamo al cinema a vedere il live action di dragon trainer (dicono sia bellissimo)🍿🐉", next: 10 },
        { text: "mangiamo il panino più buono del mondo da blend burger !!!!🍔🐖", next: 10 },
        { text: "beviamo 10 birre per attenuare l'imbarazzo e la paura che non andiamo più d'accordo🍻😳", next: 10 }
      ]
    },
    {
      id: 10,
      text: "perfetto!! fammi sapere... grazie per aver risposto... baci🦍🐻🐉🍻💦🫦💚",
      answers: []
    }
  ]
};

let currentId = 0;
const questionBox = document.getElementById("question-box");

function renderQuestion(id) {
  const question = quizData.questions.find(q => q.id === id);
  if (!question) return;

  questionBox.innerHTML = `<p>${question.text}</p>`;

  question.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.onclick = () => renderQuestion(answer.next);
    questionBox.appendChild(btn);
  });
}

renderQuestion(currentId);