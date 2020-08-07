$('.projects .card .image').dimmer({
  on: 'hover'
});

console.log('foo');
const RSS_URL = `https://lifelongstudent.io/index.xml`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data))
