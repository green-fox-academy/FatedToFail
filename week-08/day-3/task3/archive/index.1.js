const body = document.querySelector('body');
const main = document.querySelector('main');
const inputField = document.querySelector('input');
const btn = document.querySelector('input[type="button"]');
const XHR = new XMLHttpRequest;
inputField.value = '';


btn.onclick = () => {
  console.log('k1')
  let oldMain = document.querySelector('main');
  let newMain = oldMain.cloneNode(true);
  oldMain.parentNode.replaceChild(newMain, oldMain);
  removeAllCharacterFromDoc();
  manageConnectionWithApiForCharacterCreation(newMain);
};

inputField.addEventListener('keyup', (e) => {
  console.log('k2')
  if (e.keyCode === 13) {  
    removeAllCharacterFromDoc();
    manageConnectionWithApiForCharacterCreation();
  };
});

function removeAllCharacterFromDoc() {
  console.log('k3')
  return () => {newMain.querySelectorAll('div').forEach(div => newMain.removeChild(div))};
}

function manageConnectionWithApiForCharacterCreation(main) {
  console.log('k4')
  XHR.open('GET', `https://swapi.co/api/people/?search=${inputField.value}`, true);
  XHR.onload = () => {
    let datasRecieved = JSON.parse(XHR.response).results;
    createCharactersWithDom(datasRecieved, main);
  }
  XHR.send();
}

function createCharactersWithDom(charactersData, main) {
  console.log('k5')
  charactersData.forEach(person => {
    if (isHeOrSheTheSearchedOne(person)) {
      const aCharacter = setUpCharacterInDiv(person);
      addCharacterToDoc(aCharacter, main);
    }
  });
  resetPage();
};

function isHeOrSheTheSearchedOne(person) {
  console.log('k6')
  return person.name.toLowerCase().indexOf(theUserInputIs()) !== -1;
}

function theUserInputIs() {
  console.log('k7')
  return inputField.value.toLocaleLowerCase();
}

function setUpCharacterInDiv(person) {
  console.log('k8')
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
  console.log('k9')
  return document.createElement(`${domElement}`);
}

function attributesOfAPersonInHtml(person) {
  console.log('k10')
  return `Height: ${person.height}</br>Mass: ${person.mass}</br>Hair color: ${person.hair_color}</br>Skin color: ${person.skin_color}</br>Eye color: ${person.eye_color}</br>Gender: ${person.gender}</br>Birth year: ${person.birth_year}`
}

function addCharacterToDoc(domElement, main) {
  console.log('k11')
  return () => {
    main.appendChild(domElement)
  };
}

function resetPage() {
  console.log('k12')
  return () => {
    newMain.style = 'top:77%';
    newMain.style.animation = '5s cubic-bezier(0.13, 0.63, 0.22, 1) move';
    inputField.value = '';
    window.onwheel = (event) => {
      event.deltaY > 0
      ? newMain.style.top = `${parseInt(newMain.style.top) - 2}%`
      : newMain.style.top === '77%'
      ? ''
      : newMain.style.top = `${parseInt(newMain.style.top) + 2}%`
    };
  }
}

