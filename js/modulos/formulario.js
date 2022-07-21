class Formulario {
  constructor(form, nome) {
    this.formulario = document.querySelector(`${form}[name="${nome}"]`)
    this.containerDoFormulario = this.formulario.parentNode
    this.input = this.formulario.querySelector('input')
    this.btnSubmit = this.formulario.querySelector('button')
    this.adicionarEventos()
  }

  aniciarAnimacao = (e) => {
    const placeholder = e.target.parentNode
    placeholder.classList.add('active')
    if(this.input.classList.contains('err')) {
      this.input.classList.remove('err')
    }
  }

  validarValorInput = (e) => {
    const msg = this.formulario.querySelector('label')
    const terminarCom = this.input.value.endsWith('@gmail.com')
    const espacoEmBranco = /\s/g.test(this.input.value)

    if(e.type == 'change' && !terminarCom || espacoEmBranco) {
      this.input.classList.add('err')
      msg.innerText = 'Insira um email válido.'
      msg.classList.add('err')

    } else if (e.type == 'keyup' && this.input.value == '') {
      this.input.classList.add('err')
      msg.innerText = 'O email é obrigatório.'
      msg.classList.add('err')
    } 
  }

  encerrarAnimacao = (e) => {
    const containerDoInput = this.input.parentNode
    const msg = this.formulario.querySelector('label')

    if(e.target !== this.input && this.input.value == '') {
      containerDoInput.classList.remove('active')
      msg.classList.remove('err')
    } 
  }

  enviarValor = (e) => {
    e.preventDefault()
    const msg = this.formulario.querySelector('label')
    if(this.input.value === '') {
      this.input.classList.add('err')
      msg.innerText = 'O email é obrigatório.'
      msg.classList.add('err')
    } else if(this.input.value !== '' && this.input.value.endsWith('@gmail.com')) {
      this.input.value = ''
      msg.classList.remove('err')
      this.input.classList.remove('err')
    }
  }

  adicionarEventos = () => {
    this.input.addEventListener('click', this.aniciarAnimacao)
    this.input.addEventListener('change', this.validarValorInput)
    this.input.addEventListener('keyup', this.validarValorInput)
    this.containerDoFormulario.addEventListener('click', this.encerrarAnimacao)
    this.btnSubmit.addEventListener('click', this.enviarValor)
  }

}

export default Formulario