let minute = document.getElementById("minute");
let second = document.getElementById("second");
let secondpass = 0,
  minutepass = 0,
  timecounter;
let userNameToStore;

/* GAME TIMER */
[minute.innerHTML, second.innerHTML] = [5, 00];
let intervalOne, intervalTwo;

document.querySelector(".upper-layer span").onclick = (e) => {
  let userName = prompt("Enter your name");
  if (userName === "" || userName === null) {
    document.querySelector(".game-info .name span").innerHTML = "Unknown";
    userName = "Unknown";
  } else {
    document.querySelector(".game-info .name span").innerHTML = userName;
  }
  userNameToStore = userName;

  e.target.parentElement.remove();
  timecounter = setInterval(() => {
    secondpass++;
    if (secondpass == 60) {
      minutepass++;
      secondpass = 0;
    }
  }, 1000);
  startTimer();
  showCards();
};

let duration = 1000;
let wrongTries = 0;
let boxsContainer = document.querySelector(".cards");
let boxs = Array.from(boxsContainer.children);
let orderRange = [...Array(boxs.length).keys()];

range = swap(orderRange);
boxs.forEach((box, ind) => {
  box.style.order = range[ind];
  box.addEventListener("click", () => {
    flipBox(box);
  });
});

let gamEnd = setInterval(() => {
  if (minute.innerHTML == 0 && second.innerHTML == 0) {
    endGame(false);
    clearInterval(gamEnd);
    document.querySelector(".timer").classList.remove("danger");
  }
}, 500);

/* Flip Cards */
function flipBox(box) {
  box.classList.add("is-flipped");

  let flippedCard = boxs.filter((box) => box.classList.contains("is-flipped"));
  if (flippedCard.length == 2) {
    stopClicking();
    matchCards(flippedCard[0], flippedCard[1]);
  }
  let matchedCards = boxs.filter((box) => {
    return box.classList.contains("is-matched");
  });

  /* Length of Cards */
  if (matchedCards.length == 32) {
    endGame(true);
  }
}

/* After the Game */
function endGame(win) {
  let div = document.createElement("div");
  let innerdiv = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  /* Player Wrong Tries */
  if (win) {
    h2.appendChild(document.createTextNode("YOU WIN"));
    stopTimer();
    let faults;
    if (wrongTries < 10) {
      p.appendChild(document.createTextNode(`YOU ARE BRILLIANT! YOU GOT `));
      faults = `<span>${wrongTries}</span> FAULTS`;
    } else if (wrongTries < 15) {
      p.appendChild(document.createTextNode(`YOU ARE GOOD! YOU GOT `));
      faults = `<span>${wrongTries}</span> FAULTS`;
    } else if (wrongTries < 20) {
      p.appendChild(document.createTextNode(`NOT BAD! YOU GOT `));
      faults = `<span>${wrongTries}</span> FAULTS`;
    } else if (wrongTries < 25  ) {
      p.appendChild(document.createTextNode(`TRY HARDER. YOU GOT `));
      faults = `<span>${wrongTries}</span> FAULTS`;
    } else {
      p.appendChild(document.createTextNode(`TRY HARDER. YOU GOT `));
      faults = `<span>${wrongTries}</span> FAULTS`;
    }
    p.innerHTML += faults;
    collectAndStore();
  } 
  /* Player Lose the Game */
  else {
    h2.appendChild(document.createTextNode("YOU LOSE!"));
    p.appendChild(document.createTextNode(`BETTER LUCK NEXT TIME.`));
    stopTimer();
  }

  /* Link to the Level Page */
  let a = document.createElement("a");
  a.href = "level.html";
  a.append("REPLAY");
  innerdiv.appendChild(h2);
  innerdiv.appendChild(p);
  innerdiv.appendChild(leader_board());
  innerdiv.appendChild(a);
  div.appendChild(innerdiv);
  div.classList.add("game-end");
  document.body.prepend(div);
}

function stopClicking() {
  boxsContainer.classList.add("unclickable");
  setTimeout(() => {
    boxsContainer.classList.remove("unclickable");
  }, duration);
}

/* Matching Two Cards */
function matchCards(one, two) {
  let userWrongTries = document.querySelector(".score span");
  if (one.dataset.icon === two.dataset.icon) {
    one.classList.remove("is-flipped");
    two.classList.remove("is-flipped");

    one.classList.add("is-matched");
    two.classList.add("is-matched");
  } else {
    userWrongTries.innerHTML = ++wrongTries;
    setTimeout(() => {
      one.classList.remove("is-flipped");
      two.classList.remove("is-flipped");
    }, duration);
  }
}

function swap(array) {
  let random,
    current = array.length,
    temp;
  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    temp = array[current];
    array[current] = array[random];
    array[random] = temp;
  }
  return array;
}

function startTimer() {
  intervalOne = setInterval(() => {
    if (second.innerHTML == 0) {
      second.innerHTML = 60;
      minute.innerHTML = `0${--minute.innerHTML}`;
    }
    second.innerHTML--;
    if (second.innerHTML < 10) {
      second.innerHTML = `0${second.innerHTML}`;
    }
    if (minute.innerHTML == 0) {
      document.querySelector(".timer").classList.add("danger");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalOne);
  clearInterval(intervalTwo);
  clearInterval(timecounter);
}

/* Cards Rotate */
function showCards() {
  boxs.forEach((box) => {
    box.style.transform = "rotateX(0deg)";
    setTimeout(() => {
      box.style.transform = "";
    }, 2000);
  });
  stopClicking();
}

/* Link to Leaderboard */
function leader_board() {
  let a = document.createElement("a");
  a.href = "leaderBoard1.html";
  a.append("LEADERBOARD");
  return a;
}

function collectAndStore() {
  let playerInLeader = [];
  if (localStorage.getItem("player")) {
    playerInLeader = JSON.parse(localStorage.getItem("player"));
    playerInLeader.push({
      userName: userNameToStore,
      faults: wrongTries,
      time: {
        seconds: secondpass,
        minute: minutepass,
      },
    });
    console.log(playerInLeader);
  } else {
    playerInLeader = [
      {
        userName: userNameToStore,
        faults: wrongTries,
        time: {
          seconds: secondpass,
          minute: minutepass,
        },
      },
    ];
  }

  /* Sorting Players From Best to the Worst */
  playerInLeader.sort((a, b) => {
    if (a.faults !== b.faults) return a.faults - b.faults;
  });

  playerInLeader.sort((a, b) => {
    if (a.faults === b.faults) {
      if (a.time.minute !== b.time.minute)
        return +b.time.minute - +a.time.minute;
      else if (a.time.seconds !== b.time.seconds)
        return +b.time.seconds - +a.time.seconds;
    }
  });

  console.log(playerInLeader);
  let jsonOpject = JSON.stringify(playerInLeader);
  console.log(jsonOpject);

  localStorage.setItem("player", jsonOpject);
}
