$('.projects .card .image').dimmer({
  on: 'hover'
});

$(document).ready(function() {
  // Get lates blog posts.
  fetch('https://lifelongstudent.io/index.xml')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      const channel = data.childNodes[0].childNodes[0];


      for (let entity of channel.childNodes.values()) {
        if (entity.nodeName == 'item') {
          $('.posts').append(`<div class="four wide column">
            <div class="ui card">
              <div class="content">
                <div class="header">${entity.getElementsByTagName("title")[0].textContent}</div>
                <div class="meta">
                  <span>${entity.getElementsByTagName("pubDate")[0].textContent.split(':')[0].slice(0, -2)}</span>
                </div>
                <p>${entity.getElementsByTagName("description")[0].textContent.replace('src="/', 'src="https://lifelongstudent.io/')}</p>
              </div>
            </div>
          </div>`);
        }
      }
    });
});
