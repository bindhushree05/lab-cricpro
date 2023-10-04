document.addEventListener("DOMContentLoaded", function() {
  document.body.style.marginLeft = "200px";
  document.body.style.marginRight = "200px";
  document.body.style.fontFamily = "'Nunito Sans', sans-serif";

  var flexboxElements = document.querySelectorAll('.flexbox');
  flexboxElements.forEach(function(element) {
      element.style.display = 'flex';
      element.style.flexDirection = 'column';
  });

  var h1Elements = document.querySelectorAll('h1');
  h1Elements.forEach(function(element) {
      element.style.textShadow = '2px 2px 3px grey';
      element.style.fontWeight = 'italic';
      element.style.fontSize = '45px';
      element.style.margin = '0%';
  });

  var pElements = document.querySelectorAll('p');
  pElements.forEach(function(element) {
      element.style.color = 'grey';
      element.style.marginTop = '0%';
      element.style.fontSize = '22px';
      element.style.fontWeight = 'italic';
  });

  var tableElements = document.querySelectorAll('table');
  tableElements.forEach(function(element) {
      element.style.borderCollapse = 'collapse';
      element.style.boxShadow = '2px 2px grey';
      element.style.backgroundColor = 'white';
  });


  var logoElement = document.getElementById('logo');
  if (logoElement) {
      logoElement.style.alignSelf = 'flex-end';
      logoElement.style.marginRight = '50px';
  }


  var tfElement = document.getElementById('tf');
  if (tfElement) {
      tfElement.style.backgroundImage = "url('https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-bg.png')";
      tfElement.style.backgroundRepeat = 'no-repeat';
      tfElement.style.backgroundPosition = 'bottom right';
  }
});
