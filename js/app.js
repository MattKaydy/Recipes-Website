console.log("Hello world!");

// Return elements from query selector by class name
const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

// Initialization of elements
const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

// Listens for Click events, if event detected, toggle the class "show-links" to the navBtnDOM element.
navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear
