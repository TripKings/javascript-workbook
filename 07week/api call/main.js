window.onload = function() {
  console.log("Javascript completed");
  populateUsers();
};

let populateUsers = function() {
  fetch("https://randomuser.me/api/?results=10")
    .then(function(res) {
      console.log("processing the result of the api feth call = ", res);
      return res.json();
    })
    .then(function(payload) {
      console.log("Processing the payload of the fetch call = ", payload);
      console.log("List of users = ", payload.results);
      payload.results.forEach(function(user, index) {
        let li = document.createElement("li");
        let img = document.createElement("img");
        let span = document.createElement("span");
        let ul = document.getElementById("listOfUsers");
        img.setAttribute("src", user.picture.large);
        span.innerHTML = `<b>${user.name.title} ${user.name.first} ${user.name.last}</b>`;
        let button = document.createElement("button");
        button.innerText = "Show my Email";
        button.setAttribute("data-email", user.email);
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(button);
        button.addEventListener("click", function(event) {
          var clickedButton = event.target;
          console.log("the user that was clicked", clickedButton);
          var email = clickedButton.getAttrubute("date-email");
          console.log("the email is", email);
          var clickedLi = clickedButton.parentElement;
          let emailSpan = document.createElement("span");
          emailSpan.innerText = email;
          clickedLi.appendChild(emailSpan);
          clickedLi.removeChild(clickedButton);
        });

        ul.appendChild(li);
      });
    });
};

// let arrayOfPeople;

// window.onload = function() {
//     getUsers()
// }

// const getUsers = () => {
//     fetch('https://randomuser.me/api/?results=5000')
//       .then(res => res.json())
//       .then(posts => arrayOfPeople = posts)
//       console.log(getUsers)
//   }

// const consoleUser = () => {
//     console.log(arrayOfPeople)
// }

// const displayUser = () => {
//     const allUsers = document.getElementById('all-post')
//     arrayOfPeople.map((post, index) => {
//         const li = document.createElement('li')
//         const text = document.createTextNode()
//         li.appendChild(text)
//         allUsers.append(li)
//     })
// }
