/**
 *
 */
async function getReposData() {
  const repos = [
    { code: 'generator-jekyll-starter-kit', name: 'Jekyll Starter Kit Generator' },
    { code: 'stories-of-a-lifelong-student', name: 'Stories Of A Lifelong Student' },
    { code: 'challenges', name: 'Random Challenges Solutions' },
    { code: 'angular-sanic-seed-project', name: 'Angular Sanic Seed Project' },
    // { code: 'google-keep-api', name: 'Google Keep API' },
    // { code: 'google-play-services-oauth', name: 'Google Play Services Oauth' },
    // { code: 'googletasks-app', name: 'Google Tasks App' },
    // { code: 'awesome-cyber-awesome', name: 'Awesome Cyber Awesome Lists' },
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

/**
 * Add `dark` theme attribute to body.
 */
function switchTheme(element) {
  if ($('html').attr('data-theme')) {
    $('html').removeAttr('data-theme');
    localStorage.removeItem('theme');
  } else {
    $('html').attr('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

$(document).ready(function() {
  const theme = localStorage.getItem('theme');
  if (theme == 'dark') {
    $('html').attr('data-theme', 'dark');
  }

  // Get lates blog posts.
  fetch('https://lifelongstudent.io/index.xml')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
    .then(data => {
      const channel = data.childNodes[0].childNodes[0];

      let posts = 0;
      for (let entity of channel.childNodes.values()) {
        if (posts > 3) {
          break;
        }

        if (entity.nodeName == 'item') {
          posts += 1;

          // Separate the text of the post from it's banner image.
          const postText = entity.getElementsByTagName("description")[0].textContent.replace('src="/', 'src="https://lifelongstudent.io/');
          const regex = /<div class="featured-image">\n.+\n.+<\/div>/g;
          const postImage = postText.match(regex);
          const postDescription = postText.replace(regex, '');
          let editedPostText = postDescription.split(' ', 60).join(' ');
          if (postDescription.split(' ').length > 60) {
            editedPostText += ' ...';
          }

          $('.posts').append(`
            <div>
              <div class="uk-card uk-card-default">
                <div class="uk-card-header">
                  <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                      <h3 class="uk-card-title uk-margin-remove-bottom"><b>${entity.getElementsByTagName("title")[0].textContent}</b></h3>
                      <p class="uk-text-meta uk-margin-remove-top">
                        <time datetime="2016-04-01T19:00">${entity.getElementsByTagName("pubDate")[0].textContent.split(':')[0].slice(0, -2)}</time>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="uk-card-media-top">
                  ${postImage}
                </div>
                <div class="uk-card-body">
                  <p>${editedPostText}</p>
                </div>
                <div class="uk-card-footer">
                  <a href="${entity.getElementsByTagName("link")[0].textContent}" target="_blank" class="uk-button uk-button-text">Go to Post</a>
                </div>
              </div>
            </div>
          `);
        }
      }
    });

  // Get repos data from GitHub.
  getReposData()
    .then(repos => {
      repos.sort((a, b) => (a.value.stars < b.value.stars) ? 1 : -1);

      for (repo of repos) {
        $('.repos').append(`
          <div>
            <div class="uk-card uk-card-default">
              <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                  <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom"><b>${repo.name}</b></h3>
                  </div>
                </div>
              </div>
              <div class="uk-card-media-top">
                <img src="projects/${repo.code}.webp">
              </div>
              <div class="uk-card-body">
                <p>${repo.value.description}</p>
              </div>
              <div class="uk-card-footer">
                <span class="left">
                  <i class="fas fa-star"></i>
                  ${repo.value.stars}
                </span>
                <span class="right">
                  <i class="fal fa-code-merge"></i>
                  ${repo.value.forks}
                </span>
              </div>
            </div>
          </div>
        `);
      };
    });
});
