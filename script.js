let states = document.getElementById("states");

states.onchange = function () {
  //logging the index of the selected item in the dropdown
  console.log("states index:" + states.selectedIndex);
  //logging the name of the selected item in the dropdown
  console.log("states index:" + states.options[states.selectedIndex].text);
  //logging the file name of the selected item in the dropdown
  console.log("img/" + states.value + "@2x.jpg");
  //changing the image of the div with id=postcard to the file name logged previously
  document
    .getElementById("postcard")
    .style.backgroundImage = "url(img/" + states.value + "@2x.jpg)";
};
