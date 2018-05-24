var request = new XMLHttpRequest();
request.open('GET', 'https://api.unsplash.com/photos/random?client_id=c45833dd0f791b9c10d2cefb487000f61b7fed2ec786a2b5f5677a0f7879a9b0&query=mountain', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
  } else {
    var data = {
      urls: {
        full: 'https://images.unsplash.com/photo-1501979735065-dfe1580b4a49?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f5d06a687d9ac4cf9e384f02e03e3bc&auto=format&fit=crop&w=1650&q=80',
      },
      links: {
        html: 'https://unsplash.com/photos/nK01_Z9dKqI'
      },
      user: {
        name: 'Michael Brandt'
      }
    }
  }

  var image = new Image();
  image.onload = function () {
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.body.querySelector('main')
    .insertAdjacentHTML('beforeend', `<div class="source">Photo by <a href="${data.user.links.html}?utm_source=Mycolorway&utm_medium=referral" target="_blank">${data.user.name}</a> on <a href="https://unsplash.com?utm_source=Mycolorway&utm_medium=referral" target="_blank">Unsplash</a></div>`)
  }

  image.src = data.urls.full;
};

request.send();
