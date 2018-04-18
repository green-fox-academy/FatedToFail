const tbody = document.querySelector('tbody');

function getPlanets() {
  const XHR = new XMLHttpRequest;
  XHR.open('GET', '/planets');
  XHR.onload = (event) => {
    let planets = JSON.parse(event.target.response);
    createTable(planets);
    getShip();
  }
  XHR.send();
}

function createTable(planets) {
  planets.forEach(planet => {
    
    let tr = nodeCreator('tr');
    
    let tdPlanet = nodeCreator('td');
    tdPlanet.textContent = planet.name;
    tr.appendChild(tdPlanet);
    
    let tdPop = nodeCreator('td');
    tdPop.textContent = planet.population;
    tr.appendChild(tdPop);
    
    let tdLoc = nodeCreator('td');
    let moveHere = nodeCreator('button');
    moveHere.textContent = 'Move Here';
    eventListenerMaker(moveHere);
    tdLoc.appendChild(moveHere);
    tr.appendChild(tdLoc);
    
    let tdPplOnShip = nodeCreator('td');
    tdPplOnShip.textContent = '-';
    tr.appendChild(tdPplOnShip);
    
    tbody.appendChild(tr);
  });
}

function nodeCreator(nodeName) {
  return document.createElement(nodeName);
}

function eventListenerMaker (button) {
  button.onclick = (event) => {
    console.log(event);
    let postTarget = 'I Don\'t Know Yet';

    if (event.target.textContent === "Move Here") {
      postTarget = 'movehere';
    } else if (event.target.textContent === '<- To Planet') {
      postTarget = 'toplanet';
    } else {
      postTarget = 'toship';
    }

    const XHR = new XMLHttpRequest;
    XHR.open('POST', `/${postTarget}/${event.target.parentNode.parentNode.rowIndex}`);
    XHR.onload = () => {
      const tbodyRows = document.querySelectorAll('tbody tr');
      tbodyRows.forEach(row => {
        tbody.removeChild(row);
      });
      getPlanets();
    }
    XHR.send();
  }
}

function getShip() {
  const XHR = new XMLHttpRequest;
  XHR.open('GET', '/ship');
  XHR.onload = (event) => {
    let ship = JSON.parse(event.target.response);
    placeShip(ship[0]);
  }
  XHR.send();
}

function placeShip(ship) {
  let myRows = document.querySelectorAll('tbody tr');
  
  myRows.forEach((row) => {
    if (row.childNodes[0].textContent === ship.planet) {
      let button = row.childNodes[2];
      
      button.removeChild(button.childNodes[0]);
      let toPlanet = nodeCreator('button');
      toPlanet.textContent = '<- To Planet';
      eventListenerMaker(toPlanet);
      button.appendChild(toPlanet);
      
      let toShip = nodeCreator('button');
      toShip.textContent = 'To Ship ->';
      eventListenerMaker(toShip);
      button.appendChild(toShip);

      row.childNodes[3].textContent = ship.utilization; //haján
    }
  });
}

window.onload = () => {
  getPlanets();
}
