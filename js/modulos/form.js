class Form {
  constructor() {
    this.inputs = document.querySelectorAll('input')
    this.btns = document.querySelectorAll('button[type="submit"]')
    this.addEventos()
  }

  animarPlaceholder = (e) => {
    e.target.nextElementSibling.classList.add('active')
  }

  finalizarAnimacao = (e) => {
    if(!e.target.value) {
      e.target.nextElementSibling.classList.remove('active')
    }

    if(!e.target.value.endsWith('@gmail.com')) {
      const msg = e.target.parentNode.nextElementSibling
      msg.innerText = 'Insira um email válido.'
      msg.classList.add('err')
    }

    e.target.addEventListener('keyup', this.validarValor)
  }

  validarValor = (e) => {
    if(e.target.value === '') {
      const msg = e.target.parentNode.nextElementSibling
      msg.innerText = 'O email é obrigatório.'
      msg.classList.add('err')
      e.target.nextElementSibling.classList.remove('active')
    } else if(e.target.value.endsWith('@gmail.com')) {
      const msg = e.target.parentNode.nextElementSibling
      msg.classList.remove('err')
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const input = e.target.parentNode.querySelector('input')
    if(input.value.endsWith('@gmail.com')) {
      input.value = ''
    } else if(input.value == '') {
      const msg = input.parentNode.nextElementSibling
      const placeholder = input.nextElementSibling
      msg.innerText = 'O email é obrigatório.'
      msg.classList.add('err')
      placeholder.classList.add('active')
    }
    // input.nextElementSibling.classList.remove('active')

  }

  addEventos = () => {
    this.inputs.forEach(input => {
      input.addEventListener('click', this.animarPlaceholder)
    })

    this.inputs.forEach(input => {
      input.addEventListener('change', this.finalizarAnimacao)
    })

    this.btns.forEach(btn => {
      btn.addEventListener('click', this.handleSubmit)
    })
  }
}

export default Form