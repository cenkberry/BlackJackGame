const cCards = document.querySelector(".cCards");
const cTotal = document.querySelector(".cTotal");
const cScore = document.querySelector(".cScore");
const uCards = document.querySelector(".uCards");
const uTotal = document.querySelector(".uTotal");
const uScore = document.querySelector(".uScore");
const nextSet = document.querySelector("#nextSet");
const takeCard = document.querySelector(".takeCard");
const stopCard = document.querySelector(".stopCard");
let scoreUser = 0;
let scoreComp = 0;

nextSet.addEventListener("click", () => {
  let unumb = 2;
  let cnumb = 2;
  function compWin() {
    cTotal.style.backgroundColor = "#86B049";
    cTotal.style.color = "#ffffff";
    uTotal.style.backgroundColor = "#8b0000";
    uTotal.style.color = "#ffffff";
  }

  function userWin() {
    uTotal.style.backgroundColor = "#86B049";
    uTotal.style.color = "#ffffff";
    cTotal.style.backgroundColor = "#8b0000";
    cTotal.style.color = "#ffffff";
  }

  function bothlost() {
    cTotal.style.backgroundColor = "#8b0000";
    cTotal.style.color = "#ffffff";
    uTotal.style.backgroundColor = "#8b0000";
    uTotal.style.color = "#ffffff";
  }

  function openbuttons() {
    takeCard.style.display = "block";
    stopCard.style.display = "block";
  }

  function closebuttons() {
    takeCard.style.display = "none";
    stopCard.style.display = "none";
  }

  function closeanim() {
    uTotal.style.animationName = "none";
    cTotal.style.animationName = "none";
  }

  function openanim() {
    uTotal.style.animationName = "zoomer";
    cTotal.style.animationName = "zoomer";
  }

  function compwon() {
    cScore.style.animationName = "win";
  }

  function complost() {
    cScore.style.animationName = "lost";
  }

  function userwon() {
    uScore.style.animationName = "win";
  }

  function userlost() {
    uScore.style.animationName = "lost";
  }

  function scoreAnimeKiller() {
    cScore.style.animationName = "none";
    uScore.style.animationName = "none";
  }

  function sumAfterStopCard() {
    if (cSum > uSum && cSum <= 21) {
      compWin();
      closebuttons();
      closeanim();
      scoreComp++;
      cScore.innerHTML = scoreComp;
      compwon();
      userlost();
    }
    if (uSum > cSum && uSum <= 21) {
      userWin();
      closebuttons();
      closeanim();
      scoreUser++;
      uScore.innerHTML = scoreUser;
      userwon();
      complost();
    }
  }
  runner();

  function runner() {
    scoreAnimeKiller();
    openbuttons();
    cCards.innerHTML = "";
    uCards.innerHTML = "";
    uTotal.innerHTML = "";
    let compcard1 = Math.floor(Math.random() * 13 + 1);
    let compcard2 = Math.floor(Math.random() * 13 + 1);
    let usercard1 = Math.floor(Math.random() * 13 + 1);
    let usercard2 = Math.floor(Math.random() * 13 + 1);

    cCards.innerHTML += `<img class="ccard1" src="./images/${compcard1}.png" alt="">`;
    cCards.innerHTML += `<img class="ccard2" src="./images/${compcard2}.png" alt="">`;
    uCards.innerHTML += `<img class="ucard1" src="./images/${usercard1}.png" alt="">`;
    uCards.innerHTML += `<img class="ucard2" src="./images/${usercard2}.png" alt="">`;

    if (compcard1 > 10) {
      compcard1 = 10;
    }
    if (compcard2 > 10) {
      compcard2 = 10;
    }
    if (usercard1 > 10) {
      usercard1 = 10;
    }
    if (usercard2 > 10) {
      usercard2 = 10;
    }
    if (compcard1 === 1) {
      compcard1 = 11;
    }
    if (usercard1 === 1) {
      usercard1 = 11;
    }
    cSum = compcard1 + compcard2;
    uSum = usercard1 + usercard2;
    cTotal.innerHTML = cSum;
    uTotal.innerHTML = uSum;
    summer();
  }

  function summer() {
    openanim();
    if (cSum > 21 && uSum > 21) {
      runner();
      bothlost();
    } else if (cSum > 21 && uSum < 21) {
      scoreUser++;
      uScore.innerHTML = scoreUser;
      userWin();
      closeanim();
      closebuttons();
      userwon();
      complost();
    } else if (uSum > 21 && cSum < 21) {
      scoreComp++;
      cScore.innerHTML = scoreComp;
      compWin();
      closeanim();
      closebuttons();
      compwon();
      userlost();
    } else if (cSum === 21 && uSum === 21) {
      runner();
      bothlost();
      closeanim();
      closebuttons();
    } else if (cSum === 21) {
      scoreComp++;
      cScore.innerHTML = scoreComp;
      compWin();
      closeanim();
      closebuttons();
      compwon();
      userlost();
    } else if (uSum === 21) {
      scoreUser++;
      uScore.innerHTML = scoreUser;
      userWin();
      closeanim();
      closebuttons();
      userwon();
      complost();
    } else {
      bothlost();
      openanim();
      openbuttons();
    }
  }
  takeCard.onclick = function userTakeCard() {
    let userextra = Math.floor(Math.random() * 13 + 1);
    unumb++;
    let udivname = "ucard" + unumb;
    uCards.innerHTML += `<img class="${udivname}" src="./images/${userextra}.png" alt="">`;
    if (userextra > 10) {
      userextra = 10;
    }
    uSum += userextra;
    uTotal.innerHTML = uSum;
    summer();
  };

  stopCard.onclick = function compTakeCard() {
    if (cSum <= 13) {
      let compextra = Math.floor(Math.random() * 13 + 1);
      cnumb++;
      let cdivname = "ccard" + cnumb;
      cCards.innerHTML += `<img class="${cdivname}" src="./images/${compextra}.png" alt="">`;
      if (compextra > 10) {
        compextra = 10;
      }
      cSum += compextra;
      cTotal.innerHTML = cSum;
      summer();
      sumAfterStopCard();
    } else {
      cTotal.innerHTML = cSum;
      summer();
      sumAfterStopCard();
    }
  };
});