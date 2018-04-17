const body = document.querySelector('body');
const main = document.querySelector('main');
const inputField = document.querySelector('input');
const btn = document.querySelector('input[type="button"]');
const XHR = new XMLHttpRequest;
let nextPage = null;
inputField.value = '';


btn.onclick = () => {
  removeAllCharacterFromDoc();
  manageConnectionWithApiForCharacterCreation();
};

inputField.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {  
    removeAllCharacterFromDoc();
    manageConnectionWithApiForCharacterCreation();
  };
});

function removeAllCharacterFromDoc() {
  main.querySelectorAll('div').forEach(div => main.removeChild(div));
}

function manageConnectionWithApiForCharacterCreation() {
  XHR.open('GET', `https://swapi.co/api/people/?search=${inputField.value}`, true);
  XHR.onload = (event) => {
    console.log(event);
    nextPage = JSON.parse(event.currentTarget.response).next;
    let datasRecieved = JSON.parse(XHR.response).results;
    createCharactersWithDom(datasRecieved);
    resetPage();
  }
  XHR.send();
}

function createCharactersWithDom(charactersData) {
  charactersData.forEach(person => {
    if (isHeOrSheTheSearchedOne(person)) {
      const aCharacter = setUpCharacterInDiv(person);
      addCharacterToDoc(aCharacter);
    }
  });
};

function isHeOrSheTheSearchedOne(person) {
  return person.name.toLowerCase().indexOf(theUserInputIs()) !== -1;
}

function theUserInputIs() {
  return inputField.value.toLocaleLowerCase();
}

function setUpCharacterInDiv(person) {
  const blockOfDomWithCharacterData = createDomElement('div');
  const characterName = createDomElement('h3');
  const characterAttributes = createDomElement('p');
  
  characterName.textContent = person.name;
  characterAttributes.innerHTML = attributesOfAPersonInHtml(person);
  
  blockOfDomWithCharacterData.appendChild(characterName);
  blockOfDomWithCharacterData.appendChild(characterAttributes);
  
  return blockOfDomWithCharacterData;
}

function createDomElement(domElement) {
  return document.createElement(`${domElement}`);
}

function attributesOfAPersonInHtml(person) {
  return `Height: ${person.height}</br>Mass: ${person.mass}</br>Hair color: ${person.hair_color}</br>Skin color: ${person.skin_color}</br>Eye color: ${person.eye_color}</br>Gender: ${person.gender}</br>Birth year: ${person.birth_year}`
}

function addCharacterToDoc(domElement) {
  main.appendChild(domElement);
}

function resetPage() {
  main.style.display = 'none';
  main.style.top = '77%';
  main.style.animation = 'none';
  setTimeout(() => {
    main.style.animation = '2s ease move';
    main.style.display = 'initial';
  }, 10);
  inputField.value = '';
}

window.onwheel = (event) => {
  if (event.deltaY > 0) {
    main.style.top = `${parseInt(main.style.top) - 2}%`
  } else if (main.style.top !== '77%') {
    main.style.top = `${parseInt(main.style.top) + 2}%`
  }
  if (['-109%', '-295%', '-481%', '-667%', '-853%', '-1039%', '-1225%', '-1411%'].indexOf(main.style.top) !== -1) {
    if (nextPage !== null) {
      XHR.open('GET', nextPage, true);
      XHR.onload = (event) => {
        console.log(event)
        nextPage = JSON.parse(event.currentTarget.response).next;
        let datasRecieved = JSON.parse(XHR.response).results;
        createCharactersWithDom(datasRecieved);
      }
      XHR.send();
    }
  }
};
