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

  validarValorInput = (e) => {
    const msgErr = e.target.parentNode.nextElementSibling
    const inputVazio = e.target.value == ''
    const valorInputInvalido = e.target.checkValidity()

    if(inputVazio) {
      e.target.parentNode.classList.add('errActive')
      e.target.parentNode.classList.remove('focus')
      msgErr.classList.add('activeErr')
    } else if(!inputVazio){
      e.target.parentNode.classList.add('focus')
    }

    if(e.target.name == 'email' && valorInputInvalido) {
      this.validarEmail(e.target, msgErr, valorInputInvalido)
    }
    if(e.target.name == 'password') {
      this.validarSenha(e.target, msgErr, valorInputInvalido)
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

  validarSenha = (target, msgErr, valorInput) => {
    if(!valorInput) {
      target.parentNode.classList.add('errActive')
      msgErr.classList.add('activeErr')

    } else if (valorInput && target.value < 4) {
      target.parentNode.classList.add('errActive')
      msgErr.classList.add('activeErr')

    }else {
      target.parentNode.classList.remove('errActive')
      msgErr.classList.remove('activeErr')
    }
  }

  mostrarSenha = (e) => {
    e.preventDefault()
    const inputSenha =  document.querySelector('#password')
    inputSenha.focus()
    if(inputSenha.getAttribute('type') == 'password') {
      inputSenha.setAttribute('type', 'text')
      e.target.innerText = 'ocultar'

    } else {
      inputSenha.setAttribute('type', 'password')
      e.target.innerText = 'mostrar'
    }
  }

  validarValorNoSubmit = (e) => {
    e.preventDefault()
    const inputs = document.querySelectorAll('.submit')

    inputs.forEach(input => {
      const msgErr = input.parentNode.nextElementSibling
      if(input.name == 'email' && !input.checkValidity()) {
        input.parentNode.classList.add('errActive')
        msgErr.classList.add('activeErr')

      } else if(input.name == 'password' && e.target.value.length < 4 && !input.checkValidity()) {
        input.parentNode.classList.add('errActive')
        msgErr.classList.add('activeErr')
      }
    })

    inputs.forEach(input => {
      const msgErr = input.parentNode.nextElementSibling

      if(input.checkValidity() ){
        input.parentNode.classList.remove('errActive')
        msgErr.classList.remove('activeErr')
      }
    })

    if(inputs[0].checkValidity() && inputs[1].checkValidity()) {
      this.btnMostrarSenha.classList.remove('active')
      this.containerInputs[0].classList.remove('focus')
      this.containerInputs[1].classList.remove('focus')
      inputs[0].value = ''
      inputs[1].value = ''
      
    }
  }

  // Adiciona os eventos as elementos selecionados
  adicionarEventos = () => {
    this.containerInputs.forEach(container => {
      const input = container.querySelector('input')

      input.addEventListener('focusout', this.validarValorInput)
      input.addEventListener('keyup', this.validarValorInput)
      container.addEventListener('click', this.aniciarAnimacao)
    })
    this.btnMostrarSenha.addEventListener('click', this.mostrarSenha)
    this.btnSubmit.addEventListener('click', this.validarValorNoSubmit)
  }
}

const form1 = new Formulario()