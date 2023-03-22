let states = document.getElementById("states");

states.onchange = function () {
  //logging the index of the selected item in the dropdown
  console.log("states index:" + states.selectedIndex);
  //logging the name of the selected item in the dropdown
  console.log("states index:" + states.options[states.selectedIndex].text);
  //logging the file name of the selected item in the dropdown
  console.log("img/" + states.value + "@2x.jpg");
  //changing the image of the div with id=postcard to the file name logged previously
  document.getElementById("postcard").style.backgroundImage =
    "url(img/" + states.value + "@2x.jpg)";
  //changing the header inside the postcard div with the name of the option you chose.
  document.getElementById("state-heading").innerHTML =
    states.options[states.selectedIndex].text;
  //changing the text inside the greeting id to a string concatenated with the name of the state chosen.
    document.getElementById("greeting").innerHTML =
    'Greetings from ' + states.options[states.selectedIndex].text + '!';
};
