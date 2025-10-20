// function calculateInflation(){
//     console.log("Click");
// }

let calculateInflation = () =>{
    let stopa = document.querySelector('#stopa');
    let vrednost = document.querySelector('#vrednost');
    let godine = document.querySelector('#godine');

    let inflation = vrednost.value - (vrednost.value * (stopa.value / 100));;

    for(let i = 0;i < godine.value;i++){
        inflation = inflation - (inflation * (stopa.value / 100));
    }

    let calculation = document.querySelector('.calculation');
    const inflationText = document.createElement('h3');
    inflationText.textContent = `Inflacija od ${stopa.value} % na ${vrednost.value}€ za ${godine.value} godina iznosi:${inflation}€`;
    inflationText.classList.add('inflation-text');
    calculation.appendChild(inflationText);





}