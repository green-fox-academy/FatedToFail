const div =  document.querySelector('div');
const button = document.querySelector('button');
const url = 'http://api.icndb.com/jokes/random';


button.onclick = function() {
  fetch(url)
    .then((response) => response.json())
    .then(createAPTag)
    .catch(onError);
};

function createAPTag(response) {
  let p = document.createElement('p');
  p.textContent = response.value.joke;
  div.appendChild(p);
}

function onError(error) {
  console.log(error.message);
}
