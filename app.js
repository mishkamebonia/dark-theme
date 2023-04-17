const body = document.body
const nav = document.querySelector("nav")
const footer = document.querySelector("footer")
const logo = document.querySelector(".logo")
const themeBtn = document.querySelector("#theme")
const author = document.querySelector(".author")
const header = document.querySelectorAll("h1")
const description = document.querySelectorAll(".info")
const btn = document.querySelectorAll(".link-btn")
const icon = document.querySelector(".fa-solid")

const changeTheme = () => {
  icon.classList.toggle("fa-sun")
  icon.classList.toggle("fa-moon")

  nav.classList.toggle("dark-div-background")
  footer.classList.toggle("dark-div-background")
  body.classList.toggle("dark-background")
  logo.classList.toggle("dark-color")
  themeBtn.classList.toggle("dark-btn")
  author.classList.toggle("dark-color")
  
  header.forEach((i) => {
    i.classList.toggle("dark-color")
  })
  description.forEach((i) => {
    i.classList.toggle("dark-color")
  })
  btn.forEach((i) => {
    i.classList.toggle("dark-btn")
  })
} 