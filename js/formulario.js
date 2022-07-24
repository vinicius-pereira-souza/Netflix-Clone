class Formulario {
  constructor() {
    this.formulario = document.querySelector('form')
    this.btnSubit = this.formulario.elements[3]
    // this.containerInputs = document.querySelectorAll('.inputContainer')

    this.adicionarEventos()
  }

  validarSubmit = (e) => {
    e.preventDefault()
    const input = e.target.parentNode.querySelector('input')
    const inputContainer = e.target.parentNode
    const msgErr = input.parentNode.nextElementSibling
    
    if(input.value == '') {
      inputContainer.classList.add('errActive')
      msgErr.classList.add('activeErr')
    }
  }

  adicionarEventos = () => {
    this.formulario.addEventListener('change', this.validarSubmit)
  }
}

const form1 = new Formulario()