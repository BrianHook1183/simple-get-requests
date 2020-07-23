


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


// -----------------------For assignment #3 -----------------------------------------



// -----------------------For all assignments -----------------------------------------
$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  watchForm2();
});
// -----------------------For all assignments -----------------------------------------