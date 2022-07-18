class Form{
  constructor() {
    this.form = document.querySelectorAll('form')
    this.btns = document.querySelectorAll('button[type="submit"]')
    this.body = document.body
    this.addEventos(this.form)
  }

  iniciarAnimacao = (e) => {
    const input = e.target.parentNode.querySelector('input')
    this.placeholder = input.parentNode.parentNode.querySelector('.placeholderAnimation')
    if(e.target == input) {
      input.classList.add('clicado')
      this.placeholder.classList.add('active')
    }
  }

  handleClick = (e) => {
    const placeholder = document.body.querySelector('.placeholderAnimation')
    const input = document.body.querySelector('.clicado')

    if(e.target !== input) {
      placeholder.classList.remove("active")
    } else {
      placeholder.classList.add("active")
    }
  }
  
 
  
  addEventos = (arrform) => {
    arrform.forEach(form => {
      form.addEventListener('click', this.iniciarAnimacao)
    })
    this.body.addEventListener('click', this.handleClick)
    // arrform.forEach(form => {
    //   form.addEventListener('change', this.finalizarAnimacaoValidacao)
    // })
    // arrform.forEach(form => {
    //   form.addEventListener('keyup', this.validarValorInput)
    // })
  }
}

export default Form