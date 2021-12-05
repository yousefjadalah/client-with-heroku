fetch("https://first-api-withheroku.herokuapp.com/")
  .then((response) => response.json())
  .then((json) => {
console.log(json)
    for (let i = 0; i < json.length; i++) {
      var y = document.createElement("li");
      y.innerHTML = json[i].name;
      document.getElementById("myul").appendChild(y);
    }
});