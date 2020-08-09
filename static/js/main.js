$('.projects .card .image').dimmer({
  on: 'hover'
});

$(document).ready(function() {
  // Get lates blog posts.
  fetch('https://lifelongstudent.io/index.xml')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
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

  // Get repos data from GitHub.
  getReposData()
    .then(repos => {
      repos.sort((a, b) => (a.value.stars < b.value.stars) ? 1 : -1);

      for (repo of repos) {
        console.log("add something", repo);
        $('.repos').append(`<div class="four wide column">
          <div class="ui card four wide column">
            <div class="content">
              <div class="header">${repo.name}</div>
            </div>

            <div class="blurring dimmable image">
              <div class="ui dimmer">
                <div class="content">
                  <div class="center">
                    <a href="${repo.value.url}" target="_blank">
                      <div class="ui inverted button">GitHub Repo Page</div>
                    </a>
                  </div>
                </div>
              </div>
              <img src="projects/stories-of-a-lifelong-student.jpg">
            </div>

            <div class="description">
              <p>${repo.value.description}</p>
            </div>
            <div class="extra content">
              <span class="left floated like">
                <i class="star icon"></i>
                ${repo.value.stars}
              </span>
              <span class="right floated star">
                <i class="code branch icon"></i>
                ${repo.value.forks}
              </span>
            </div>
          </div>
        </div>`);
      };
    });

});


/**
 *
 */
async function getReposData() {
  const repos = [
    { code: 'generator-jekyll-starter-kit', name: 'Jekyll Starter Kit Generator' },
    { code: 'stories-of-a-lifelong-student', name: 'Stories Of A Lifelong Student' },
    { code: 'challenges', name: 'Random Challenges Solutions' },
    { code: 'angular-sanic-seed-project', name: 'Angular Sanic Seed Project' },
    { code: 'google-keep-api', name: 'Google Keep API' },
    { code: 'google-play-services-oauth', name: 'Google Play Services Oauth' },
    { code: 'elmctron', name: 'Elmctron' },
    { code: 'googletasks-app', name: 'Google Tasks App' },
    { code: 'awesome-cyber-awesome', name: 'Awesome Cyber Awesome Lists' },
    { code: 'awesome-drupal', name: 'Awesome Drupal List' },
  ];

  for (repo of repos) {
    await fetch(`https://api.github.com/repos/nirgn975/${repo.code}`)
      .then(response => response.json())
      .then(data => {
        repo.value = {
          name: data.name,
          description: data.description,
          url: data.html_url,
          stars: data.stargazers_count,
          forks: data.forks,
        };
      });
  };

  return repos;
}
