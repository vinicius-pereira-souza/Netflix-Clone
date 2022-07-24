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

  validarAoPrescionarTecla = (e) => {
    const container = e.target.parentNode.classList.contains('errActive')
    const msgErr = e.target.parentNode.nextElementSibling
    const terminarCom = e.target.value.endsWith('@gmail.com')

    if(e.target.name == 'password' && container && e.target.value.length >= 4) {
      e.target.parentNode.classList.remove('errActive')
      msgErr.classList.remove('activeErr')

    } else if (e.target.name == 'password' && !container && e.target.value.length < 4){
      e.target.parentNode.classList.add('errActive')
      msgErr.classList.add('activeErr')
    }

    if(e.target.name == 'email' && container && terminarCom) {
      e.target.parentNode.classList.remove('errActive')
      msgErr.classList.remove('activeErr')

    } else if (e.target.name == 'email' && !container && !terminarCom){
      e.target.parentNode.classList.add('errActive')
      msgErr.classList.add('activeErr')
    }
  }

  mostrarPassword = (e) => {
    e.preventDefault()
    const inputSenha =  document.querySelector('#password')
    
    if(inputSenha.getAttribute('type') == 'password') {
      inputSenha.setAttribute('type', 'text')
      e.target.innerText = 'ocultar'

    } else {
      inputSenha.setAttribute('type', 'password')
      e.target.innerText = 'mostrar'
    }
  }

  validarValor = (e) => {
    const msgErr = e.target.parentNode.nextElementSibling

    if(e.target.value == '') {
      e.target.parentNode.classList.add('errActive')
      e.target.parentNode.classList.remove('focus')
      msgErr.classList.add('activeErr')
    }

  }

  enviarFormulario = (e) => {
    e.preventDefault()
    const inputs = document.querySelectorAll('.submit')

    inputs.forEach(input => {
      const msgErr = input.parentNode.nextElementSibling

      if(input.name == 'email' && !e.target.value.endsWith('@gmail.com')) {
        input.parentNode.classList.add('errActive')
        msgErr.classList.add('activeErr')

      } else if(input.name == 'password' && e.target.value.length < 4) {
        input.parentNode.classList.add('errActive')
        msgErr.classList.add('activeErr')
      }

    })
  }

  adicionarEventos = () => {
    this.containerInputs.forEach(container => {
      const input = container.querySelector('input')

      container.addEventListener('click', this.aniciarAnimacao)
      input.addEventListener('focusout', this.validarValor)
    })

    this.containerInputs.forEach(container => {
      const input = container.querySelector('input')

      input.addEventListener('keyup', this.validarAoPrescionarTecla)
    })

    this.btnMostrarSenha.addEventListener('click', this.mostrarPassword)

    this.btnSubmit.addEventListener('click', this.enviarFormulario)
  }
}

const form1 = new Formulario()