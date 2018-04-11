const main = document.querySelector('main');
const XHR = new XMLHttpRequest;




XHR.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ac45c2aa49324cf7a9e02fc42adfd15d&q=apollo11&fq=moon', true);
XHR.onload = () => {
  JSON.parse(XHR.response).response.docs.forEach(articleMaker => {
    const content = document.createElement('a');
    content.href = articleMaker.web_url;
    main.appendChild(content);
    const h1 = document.createElement('h1');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    
    h1.textContent = articleMaker.headline.main;
    p1.textContent = articleMaker.snippet;
    p2.textContent = articleMaker.pub_date.slice(0, 10);

    content.appendChild(h1);
    content.appendChild(p1);
    content.appendChild(p2);
    
  });
}
XHR.send();
