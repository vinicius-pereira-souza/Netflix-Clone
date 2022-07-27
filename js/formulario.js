class Formulario {
  constructor() {
    this.containerInputs = document.querySelectorAll('.inputContainer')
    this.btnMostrarSenha = document.querySelector('.mostrarSenha')
    this.btnSubmit = document.querySelector('.btnSubmit')

    this.adicionarEventos()
  }

  aniciarAnimacao = (e) => {
    const containerTarget = e.target.parentNode
    containerTarget.classList.add('focus')

    if(containerTarget.classList.contains('senha')) {
      this.btnMostrarSenha.classList.add('active')
    }
  }

  validarAoFocusOut = (e) => {
    e.preventDefault()
    const msgErr = e.target.parentNode.nextElementSibling
    const inputVazio = e.target.value == ''
    const valorInputInvalido = e.target.checkValidity()
    const condicaoCaracteres = e.target.value < 4

    if(inputVazio) {
      e.target.parentNode.classList.add('errActive')
      e.target.parentNode.classList.remove('focus')
      msgErr.classList.add('activeErr')
    } else if(!inputVazio){
      e.target.parentNode.classList.add('focus')
    }
    if(inputVazio && e.target.name == 'password') {
      this.btnMostrarSenha.classList.remove('active')
    }

    if(e.target.name == 'email') {
      this.validarEmail(e.target, msgErr, valorInputInvalido)
    }
  }

  validarEmail = (target, msgErr, valorInput) => {
    if(!valorInput) {
      target.parentNode.classList.add('errActive')
      msgErr.classList.add('activeErr')
    } else {
      target.parentNode.classList.remove('errActive')
      msgErr.classList.remove('activeErr')
    }
  }

  // Adiciona os eventos as elementos selecionados
  adicionarEventos = () => {
    this.containerInputs.forEach(container => {
      const input = container.querySelector('input')

      input.addEventListener('focusout', this.validarAoFocusOut)
      container.addEventListener('click', this.aniciarAnimacao)
    })
  }
}

const form1 = new Formulario()