class Formulario {
  constructor() {
    this.containerInputs = [...document.querySelectorAll('.inputContainer')]
    this.btnMostrarSenha = document.querySelector('.mostrarSenha')
    this.containerSenha = this.btnMostrarSenha.parentNode
    this.btnSubmit = document.querySelector('.btnSubmit')
    this.adicionarEventos()
  }

  aniciarAnimacao = (e) => {
    const container = e.target.parentNode
    container.classList.add('focus')

    if(e.target.parentNode.classList.contains('containerSenha')) {
      this.btnMostrarSenha.classList.add('active')
    }
  }

  validarInput = (e) => {
    const input = e.target.parentNode.querySelector("input")
    const msgErr = e.target.parentNode.nextElementSibling

    if(e.type == 'keyup' && input.value == '') {
      msgErr.classList.add('activeErr')
    }

  }

  showPassWorld = (e) => {
    e.preventDefault()
    const inputSenha = this.containerSenha.querySelector('input')
    if(inputSenha.getAttribute('type') == 'password') {
      inputSenha.setAttribute('type', 'text')
      e.target.innerText = 'ocultar'
    } else {
      inputSenha.setAttribute('type', 'password')
      e.target.innerText = 'mostrar'
    }
  }

  enviarFormulario = (e) => {
    e.preventDefault()
  }

  adicionarEventos = () => {
    this.containerInputs.forEach(container => {
      const inputs = container.querySelector('input')

      container.addEventListener('click', this.aniciarAnimacao)
      inputs.addEventListener('keyup', this.validarInput)
      inputs.addEventListener('change', this.validarInput)
    })

    this.btnMostrarSenha.addEventListener('click', this.showPassWorld)
    this.btnSubmit.addEventListener('click', this.enviarFormulario)
  }
}

const form1 = new Formulario()