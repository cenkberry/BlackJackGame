const cCards = document.querySelector('.cCards');
const cTotal = document.querySelector('.cTotal');
const cScore = document.querySelector('.cScore');
const uCards = document.querySelector('.uCards');
const uTotal = document.querySelector('.uTotal');
const uScore = document.querySelector('.uScore');
const nextSet = document.querySelector('#nextSet');
const takeCard = document.querySelector('#takeCard');
const stopCard = document.querySelector('#stopCard');

scoreUser = 0;
scoreComp = 0;

nextSet.addEventListener("click", () => {
     
    runner();
    function runner() 
    {       
        takeCard.style.display = "block";
        stopCard.style.display = "block";
        cCards.innerHTML = "";
        uCards.innerHTML = "";
        uTotal.innerHTML = "";
        let compcard1 = Math.floor((Math.random()) * 13 + 1);
        let compcard2 = Math.floor((Math.random()) * 13 + 1);
        let usercard1 = Math.floor((Math.random()) * 13 + 1);
        let usercard2 = Math.floor((Math.random()) * 13 + 1);
        cSum = compcard1 + compcard2;
        uSum = usercard1 + usercard2;
        cTotal.innerHTML = cSum;
        uTotal.innerHTML = uSum;
        summer();
    }
    

    function summer(){
        if (cSum > 21 && uSum > 21) {
            runner();
        } 
        else if (cSum > 21 && uSum < 21) {
            scoreUser++;
            uScore.innerHTML = scoreUser;
            takeCard.style.display = "none";
            stopCard.style.display = "none";
        } 
        else if (uSum > 21 && cSum < 21) {
            scoreComp++;
            cScore.innerHTML = scoreComp;
            takeCard.style.display = "none";
            stopCard.style.display = "none";
        }
        else if(cSum === 21 && uSum === 21){
            runner();
        }
        else if(cSum === 21){
            scoreComp++;
            cScore.innerHTML = scoreComp;
            takeCard.style.display = "none";
            stopCard.style.display = "none";
        }
        else if(uSum === 21){
            scoreUser++;
            uScore.innerHTML = scoreUser;
            takeCard.style.display = "none";
            stopCard.style.display = "none";
        }
        else if(uSum >= 21)
        {
            takeCard.style.display = "none";
            stopCard.style.display = "none";
        }
        
    }

    takeCard.onclick = function taker(){
        let userextra = Math.floor((Math.random()) * 13 + 1);
        uSum += userextra;
        uTotal.innerHTML = uSum;
        summer();
    };
    


});