/* eslint-disable no-undef */
'use strict';

function fetchAllDogImages(countNumber){
  fetch(`https://dog.ceo/api/breeds/image/random/${countNumber}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert(error.message));
}
//generate random image by breed
function randomByBreed(breed){
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      breedResults(responseJson))
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

function breedResults(responseJson) {


  let newString = `<img src ="${responseJson.message}" class ="results-img">`;
  $('.results').html(newString).removeClass('hidden');
}


function watchForm() {
  $('#submit').submit(event => {
    event.preventDefault();
    let countValue = event.target.imgcount.value;
    if (countValue <=50){
      fetchAllDogImages(countValue);
    }else {
      alert('Please insert a number between 1 and 50');
    }
  });
  $('#breed').submit(event => {
    event.preventDefault();
    let breed = event.target.breedimg.value;
    randomByBreed(breed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  breedResults();
});