class Form{
  constructor() {
    this.inputs = document.querySelectorAll('input')
    this.btns = document.querySelectorAll('button[type="submit"]')
    this.body = document.body
    this.addEventos(this.inputs)
  }

  iniciarAnimacao = (e) => {
    const inputContainer = e.target.parentNode
    inputContainer.classList.add('active')
  }

  encerrarAnimacao = (e) => {
    const elementoClicado = e.target.parentNode
    const containerInput = document.querySelector('.paddingPlaceholder')
    const input = containerInput.querySelector('input')

    if(elementoClicado !== containerInput && input.value == '') {
      containerInput.classList.remove('active')
    }
  }

  checarValorInput = (e) => {
    const msg = e.target.parentNode.parentNode.querySelector('label')
    if(!e.target.value.endsWith('@gmail.com')) {
      msg.innerHTML = 'Insira um email válido.'
      msg.classList.add('err')
    }
  }

  validarValorInput = (e) => {
    const msg = e.target.parentNode.parentNode.querySelector('label')
    if(e.target.value == '') {
      msg.innerHTML = 'O email é obrigatório.'
      msg.classList.add('err')
    } 
  }

  enviarValorInput = (e) => {
    e.preventDefault()
    const input = e.target.parentNode.querySelector('input')
    const msg = e.target.parentNode.querySelector('label')

    if(input.value.endsWith('@gmail.com')) {
      msg.classList.remove('err')
      input.value = ''
    }
  }

  addEventos = (inputs) => {
    inputs.forEach(input => {
      input.addEventListener('click', this.iniciarAnimacao)
    })
    inputs.forEach(input => {
      input.addEventListener('change', this.checarValorInput)
    })
    inputs.forEach(input => {
      input.addEventListener('keyup', this.validarValorInput)
    })
    inputs.forEach(input => {
      input.parentNode.parentNode.parentNode.addEventListener('click', this.encerrarAnimacao)
    })
    this.btns.forEach(btn => {
      btn.addEventListener('click', this.enviarValorInput)
    })
  }
}

export default Form