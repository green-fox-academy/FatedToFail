let div = document.querySelector('div');
let xhr = new XMLHttpRequest();
let btn = document.querySelector('button');

xhr.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=nEMMDp3yygGHxtdcnd5JPkfUrCDzoYVf&q=rainbow&limit=1&offset=${Math.floor(Math.random() * 201)}&rating=G&lang=en`, true);

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const img = document.createElement('img');
    img.src = JSON.parse(xhr.response).data[0].images.original.url;
    div.appendChild(img);
  }
   // console.log(JSON.parse(xhr.response));
};
xhr.send();

btn.onclick = () => {
  xhr.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=nEMMDp3yygGHxtdcnd5JPkfUrCDzoYVf&q=fail&limit=1&offset=${Math.floor(Math.random() * 201)}`, true);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const img = document.createElement('img');
      img.src = JSON.parse(xhr.response).data[0].images.original.url;
      div.appendChild(img);
    }
    // console.log(JSON.parse(xhr.response));
  };
  xhr.send();
}

window.addEventListener('scroll', function(){
  if( window.scrollTop() > document.height() - window.height() ) {
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=nEMMDp3yygGHxtdcnd5JPkfUrCDzoYVf&q=rainbow&limit=1&offset=${Math.floor(Math.random() * 201)}&rating=G&lang=en`, true);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const img = document.createElement('img');
        img.src = JSON.parse(xhr.response).data[0].images.fixed_width.url;
        div.appendChild(img);
      }
      // console.log(JSON.parse(xhr.response));
    };
    xhr.send();
  }
});
