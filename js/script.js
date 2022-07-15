const perguntas = document.querySelectorAll('.pergunta')

perguntas.forEach(pergunta => {
  pergunta.addEventListener('click', handleClick)
})

function handleClick(e) {
  console.log(e.target)
}