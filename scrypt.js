const buttons = document.querySelectorAll('.faq-toggle')


buttons.forEach((button) => {
    button.addEventListener('click', () => {
    // removeActives()
    button.parentNode.classList.toggle('active')
  })
})

// ---------only 1 open at a time----------
// function removeActives() {
//   buttons.forEach((button) => {
//     button.parentNode.classList.remove('active')
//   })
// }