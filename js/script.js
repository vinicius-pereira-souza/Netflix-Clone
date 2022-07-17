// animação placeholder

const inputs = document.querySelectorAll('input')

inputs.forEach((input) => {
  input.addEventListener('click', animarPlaceholder)
})

inputs.forEach((input) => {
  input.addEventListener('keyup', finalizarAnimacao)
})

function animarPlaceholder(e) {
  console.log(e.type)
  const placeholder = e.target.nextElementSibling
  placeholder.classList.add('active')
}

function finalizarAnimacao(e) {
  console.log(e.type)
  const placeholder = e.target.nextElementSibling
  if(e.target.value == '' ) {
    placeholder.classList.remove('active')
  }
}

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