let div = document.querySelector('div');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=nEMMDp3yygGHxtdcnd5JPkfUrCDzoYVf&q=rainbow&limit=1&offset=3&rating=G&lang=en', true);

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const img = document.createElement('img');
    img.setAttribute('src', JSON.parse(xhr.response).data[0].images.original.url)
    div.appendChild(img);
  }
   // console.log(JSON.parse(xhr.response));
};
xhr.send();
