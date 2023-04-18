// ADVICE - ID
const adviceId = document.getElementById("advice-id");
// console.log(adviseId);

// ADVICE - DESCRIPTION
const adviceDescription = document.getElementById("advice-description");
// console.log(adviseDescription);

// BUTTON
const buttonDice = document.getElementById("button");
// console.log(buttonDice);

/*
// Minha primeira resolução
// FUNCTIONS
async function showAdvice(){
    const url = "https://api.adviceslip.com/advice";
    // console.log(url);
    const answer = await fetch(url);
    // console.log(answer);
    return await answer.json();
};
showAdvice();

async function getAdvice(slip_id){
    const url = `https://api.adviceslip.com/advice/${slip_id}`;
    const answer = await fetch(url);
    // console.log(answer);
    return await answer.json();
};

async function getAleatoryAdvice(){
    const advice = await showAdvice();
    // console.log(advice);

    const descriptionAdvice = await getAdvice(advice.slip.id);
    console.log(descriptionAdvice);

    const idAdvice = descriptionAdvice.slip.id
    console.log(idAdvice);
    adviceId.innerHTML = idAdvice;


    const textAdvice = descriptionAdvice.slip.advice;
    console.log(textAdvice)
    adviceDescription.innerHTML = textAdvice;
};
getAleatoryAdvice();

// ADDEVENTLISTENNER
buttonDice.addEventListener("click", () => {
    getAleatoryAdvice();
});
*/

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceNumber = adviceContent.slip.id;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceId.innerHTML = adviceNumber;
    adviceDescription.innerHTML = adviceText;
}

buttonDice.addEventListener("click", getAdvice);

getAdvice();