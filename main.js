var request = new XMLHttpRequest();
request.open('GET', 'https://api.unsplash.com/photos/random?client_id=c45833dd0f791b9c10d2cefb487000f61b7fed2ec786a2b5f5677a0f7879a9b0&query=mountain', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.body.insertAdjacentHTML('beforeend', `<div class="source">Photo by <a href="${data.links.html}" target="_blank">${data.user.name}</a></div>`)
  }
};

request.send();
