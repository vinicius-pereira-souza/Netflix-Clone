const inputs = document.querySelectorAll('input')

const eventos = ['click', 'change']
const funcoes = ['animarPlaceholder', 'finalizarAnimacao']

// inputs.forEach(input => {
//   input.addEventListener('click', animarPlaceholder)
// })

// inputs.forEach(input => {
//   input.addEventListener('change', finalizarAnimacao)
// })


// function animarPlaceholder(e) {
//   console.log(e.type)
//   inputs.forEach(input => {
//     input.addEventListener('change', animarPlaceholder)
//   })
// }

// function finalizarAnimacao(e) {
//   console.log(e.type)
// }

for(let i = 0; i <= inputs.length; i++) {
  inputs[i].addEventListener(eventos[i], [funcoes[i]])
}