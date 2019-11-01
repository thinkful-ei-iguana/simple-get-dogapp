/* eslint-disable no-undef */
'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}
function fetchAllDogImages(countNumber){
  fetch(`https://dog.ceo/api/breeds/image/random/${countNumber}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert(error.message));
}
function displayResults(responseJson) {
  console.log(responseJson);
  const imageElements = [];
  //replace the existing image with the new one
  for(let i=0; i<responseJson.message.length;i++ ){
    imageElements.push($(`
      <img src ="${responseJson.message[i]}" class ="results-img">`));
  }
  $('.results').html(imageElements).removeClass('hidden');
  console.log(imageElements);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let countValue = event.target.imgcount.value;
    fetchAllDogImages(countValue);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});