let arrayOfPeople;
window.onload = function() {
    getUsers()
}


const getUsers = () => {
    fetch('https://randomuser.me/api/?results=5000')
      .then(res => res.json())
      .then(posts => arrayOfPosts = posts)
  }

const consoleUser = () => {
    console.log(arrayOfPeople)
}

const displayUser = () => {
    const allUsers = document.getElementById('all-post')
    arrayOfPeople.map((post, index) => {
        const li = document.createElement('li')
        const text = document.createTextNode()
        li.appendChild(text)
        allUsers.append(li)
    })
}