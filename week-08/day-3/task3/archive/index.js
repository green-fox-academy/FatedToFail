const body = document.querySelector('body');
const main = document.querySelector('main');
const XHR = new XMLHttpRequest;
const inputField = document.querySelector('input');
const submitButton = document.querySelector('input[type="button"]');
inputField.value = '';

submitButton.onclick = () => {
  
  main.querySelectorAll('div').forEach(div => main.removeChild(div));
  
  XHR.open('GET', `https://swapi.co/api/people/?search=${inputField.value}`, true);

  XHR.onload = () => {
    JSON.parse(XHR.response).results.forEach(person => {
      if (person.name.toLowerCase().indexOf(inputField.value.toLocaleLowerCase()) !== -1) {

        function getAttributes() {
          return `Height: ${person.height}</br>Mass: ${person.mass}</br>Hair color: ${person.hair_color}</br>Skin color: ${person.skin_color}</br>Eye color: ${person.eye_color}</br>Gender: ${person.gender}</br>Birth year: ${person.birth_year}`
        }

        const content = document.createElement('div');
        const nameLink = document.createElement('h3');
        const attributes = document.createElement('p');
        
        nameLink.textContent = person.name;
        attributes.innerHTML = getAttributes();
        
        content.appendChild(nameLink);
        content.appendChild(attributes);
        
        main.appendChild(content);
        main.style.top = '77%';
        //main.classList.add('starwarslike');
        inputField.value = '';
      }
    });
  };

  XHR.send();
};

inputField.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) { 
    
    main.querySelectorAll('div').forEach(div => main.removeChild(div));
    
    XHR.open('GET', `https://swapi.co/api/people/?search=${inputField.value}`, true);

    XHR.onload = () => {
      JSON.parse(XHR.response).results.forEach(person => {
        if (person.name.toLowerCase().indexOf(inputField.value.toLocaleLowerCase()) !== -1) {

          function getAttributes() {
            return `Height: ${person.height}</br>Mass: ${person.mass}</br>Hair color: ${person.hair_color}</br>Skin color: ${person.skin_color}</br>Eye color: ${person.eye_color}</br>Gender: ${person.gender}</br>Birth year: ${person.birth_year}`
          }

          const content = document.createElement('div');
          const nameLink = document.createElement('h3');
          const attributes = document.createElement('p');
          
          nameLink.textContent = person.name;
          attributes.innerHTML = getAttributes();
          
          content.appendChild(nameLink);
          content.appendChild(attributes);
          
          main.appendChild(content);
          main.style.top = '77%';
          //main.classList.add('starwarslike');
        }
      });
    }
    XHR.send();
    inputField.value = '';
  };
});

window.onwheel = (event) => {
  console.log(event);
  event.deltaY > 0
  ? main.style.top = `${parseInt(main.style.top) - 2}%`
  : main.style.top === '77%'
    ? ''
    : main.style.top = `${parseInt(main.style.top) + 2}%`
};
