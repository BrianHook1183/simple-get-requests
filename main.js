


// -----------------------For assignment #1 -----------------------------------------
function watchForm() {
  $('#prompt1').submit(event => {
    event.preventDefault();
    userNumber = $("input[name=numberOfDogs]").val();
    getDogImage(userNumber);
  });
}

function getDogImage(userNumber) {
  fetch('https://dog.ceo/api/breeds/image/random/'+ userNumber)
  .then(response => response.json())
  .then(responseJson => console.log(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
}
// -----------------------For assignment #1 -----------------------------------------



// -----------------------For assignment #2 -----------------------------------------
function watchForm2() {
  $('#prompt2').submit(event => {
    event.preventDefault();
    userNumber2 = $("input[name=numberOfDogs2]").val();
    console.log(userNumber2);
    clearCollage();
    getDogImage2(userNumber2);
  });
}

function clearCollage() {
  $('.picture-collage').html('');
}

function getDogImage2(userNumber2) {
  fetch('https://dog.ceo/api/breeds/image/random/'+ userNumber2)
  .then(response => response.json())
  .then(responseJson => displayResults2(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults2(responseJson) {
  //replace the existing image with the new one
  responseJson.message.forEach(image => {
  $('.picture-collage').append(`
  <img src="${image}" class="collage-img">
  `);
  })
}
// -----------------------For assignment #2 -----------------------------------------




// -----------------------For assignment #3 -----------------------------------------

function watchForm3() {
  $('#prompt3').submit(event => {
    event.preventDefault();
    userBreed = $("input[name=breedOfDog]").val();
    console.log('the user submitted: ' + userBreed);
    const breedEndpoint = `https://dog.ceo/api/breed/${userBreed}/images/random`;
    console.log('endPoint is: ' + breedEndpoint);
    getDogImage3(breedEndpoint);
  });
}

function getDogImage3(breedEndpoint) {
  fetch(breedEndpoint)
  .then(response => response.json())
  .then(responseJson => displayResults3(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults3(responseJson) {
  $('.portrait').html(`
  <img src="${responseJson.message}" class="portrait-img">
  `);
}

// -----------------------For assignment #3 -----------------------------------------



// -----------------------For all assignments -----------------------------------------
$(function() {
  watchForm();
  watchForm2();
  watchForm3();
});
// -----------------------For all assignments -----------------------------------------