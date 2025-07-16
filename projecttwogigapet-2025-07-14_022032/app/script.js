$(function () {
  // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $(".treat-button").click(clickedTreatButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
  $(".sleep-button").click(clickedSleepButton);
});

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "Rilakkuma", weight: "10", happiness: "0" };

function clickedSleepButton() {
  pet_info.happiness++;
  checkAndUpdatePetInfoInHtml();
  document.getElementById("pet-image").src =
    "https://cdn.glitch.com/32c1d140-94fe-426a-aad6-537bd27f998f%2FrilakkumaSleep.gif?v=1572935328487";
}

function clickedTreatButton() {
  // Increase pet happiness
  pet_info.happiness++;
  // Increase pet weight
  pet_info.weight++;
  //rilakkuma and food http://giphygifs.s3.amazonaws.com/media/iVObrJwHQf9Nm/giphy.gif
  document.getElementById("pet-image").src =
    "https://cdn.glitch.com/32c1d140-94fe-426a-aad6-537bd27f998f%2Frilakkumafood.gif?v=1572935087323";
  checkAndUpdatePetInfoInHtml();
  document.getElementById("text").innerHTML = "YUMM";
}

function clickedPlayButton() {
  // Increase pet happiness
  pet_info.happiness++;
  // Decrease pet weight
  pet_info.weight--;
  checkAndUpdatePetInfoInHtml();
  //rilakkuma and a toy https://media.giphy.com/media/cyswnvMCoLhRu/giphy.gif"
  document.getElementById("pet-image").src =
    "https://cdn.glitch.com/32c1d140-94fe-426a-aad6-537bd27f998f%2FrilakkumaToy.gif?v=1572935151478";
  document.getElementById("text").innerHTML = "leave me alone!";
}

function clickedExerciseButton() {
  // Decrease pet happiness
  pet_info.happiness--;
  // Decrease pet weight
  pet_info.weight--;
  //rilakkuma working out http://giphygifs.s3.amazonaws.com/media/9xk9N8sERKuQg/giphy.gif
  document.getElementById("pet-image").src =
    "https://cdn.glitch.com/32c1d140-94fe-426a-aad6-537bd27f998f%2FrilakkumaWorkOut.gif?v=1572935257818";
  checkAndUpdatePetInfoInHtml();
  document.getElementById("text").innerHTML = "Ugh!";
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero, set it back to zero
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
    //rilakkuma sleeping https://media.giphy.com/media/YiZfp0swPEZO0/giphy.gif
    document.getElementById("pet-image").src =
      "https://cdn.glitch.com/32c1d140-94fe-426a-aad6-537bd27f998f%2FrilakkumaSleep.gif?v=1572935328487";
    document.getElementById("text").innerHTML = "ZZZZ";
  }
}

// Updates your HTML with the current values in your pet_info dictionary
function updatePetInfoInHtml() {
  $(".name").text(pet_info["name"]);
  $(".weight").text(pet_info["weight"]);
  $(".happiness").text(pet_info["happiness"]);

  //$('.img').src("http://giphygifs.s3.amazonaws.com/media/iVObrJwHQf9Nm/giphy.gif");
}
