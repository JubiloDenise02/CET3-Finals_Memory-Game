if (localStorage.getItem("player")) {
    let playerInfo = JSON.parse(localStorage.getItem("player"));
    for (const ind in playerInfo) {
      let {
        userName: user,
        faults,
        time: { seconds, minute },
      } = playerInfo[ind];
      let table = document.getElementById("table");
      let tr = document.createElement("tr");
      let nameTd = document.createElement("td");
      nameTd.classList.add("name");
      nameTd.appendChild(document.createTextNode(`${+ind + 1}-${user}`));
      tr.appendChild(nameTd);
      let faultsTd = document.createElement("td");
      faultsTd.appendChild(document.createTextNode(faults));
      tr.appendChild(faultsTd);
      let timeTd = document.createElement("td");
      let theTime =
        seconds < 10
          ? document.createTextNode(`0${minute}:0${seconds}`)
          : document.createTextNode(`0${minute}:${seconds}`);
      timeTd.appendChild(theTime);
      tr.appendChild(timeTd);
      table.appendChild(tr);
    }
  } else {
    console.log("none");
  }
