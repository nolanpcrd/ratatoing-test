localStorage.setItem('Marcel', 0);
localStorage.setItem('Greg', 0);
localStorage.setItem('Carol', 0);
localStorage.setItem('numQuestion', 0);
changeQuestion();

function changeQuestion() {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            if (Number(localStorage.getItem('numQuestion')) === data.questions.length) {
                window.location.href = 'resultat.html';
            }
            else {
                let titreQuestion = document.querySelector('h2');
                let reponse1 = document.getElementById('reponse1');
                let reponse2 = document.getElementById('reponse2');
                let reponse3 = document.getElementById('reponse3');
                titreQuestion.innerText = `${data.questions[localStorage.getItem('numQuestion')].question}`;
                reponse1.innerText = `${data.questions[localStorage.getItem('numQuestion')].options[0].option}`;
                reponse2.innerText = `${data.questions[localStorage.getItem('numQuestion')].options[1].option}`;
                reponse3.innerText = `${data.questions[localStorage.getItem('numQuestion')].options[2].option}`;
            }});
}

function addChoice(name) {
    let personnage = localStorage.getItem(name);
    localStorage.setItem(name, ++personnage);
    let numQuestion = localStorage.getItem('numQuestion');
    localStorage.setItem('numQuestion', ++numQuestion);
    changeQuestion();
}