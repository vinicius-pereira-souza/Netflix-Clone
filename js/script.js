const input = document.querySelector('#email')

console.log(input)

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