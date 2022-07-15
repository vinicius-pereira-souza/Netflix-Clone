// Validação dos inputs

const btns = document.querySelectorAll('button[type="submit"]')

btns.forEach(btn => {
  btn.addEventListener('click', validarInput)
})

function validarInput(e) {
  e.preventDefault()
  const input = e.target.parentNode.querySelector
  ('input')
  const err = e.target.parentNode.nextElementSibling

  if(!input.checkValidity()) {
    const err = e.target.parentNode.nextElementSibling
    err.classList.add('err')
  } else {
    err.classList.remove('err')
    input.value = ''
  }
}

// animação do placeholder

// const inputs = document.querySelectorAll('input')

// inputs.forEach(input => {
//   input.addEventListener('click', handleValidacaoInput)
// })

// function handleValidacaoInput(e) {
//   e.preventDefault()

// }

// Perguntas Frequentes

const perguntasBtns = document.querySelectorAll('.pergunta')

perguntasBtns.forEach(pergunta => {
  pergunta.addEventListener('click', handleClick)
})

function handleClick(e) {
  const target = e.target
  const next = target.nextElementSibling
  target.classList.toggle('active')
  if(target.classList.contains('active')) {
    next.classList.add('active')
  } else {
    next.classList.remove('active')
  }
}