class Formulario {
  constructor(form, nome) {
    this.formulario = document.querySelector(`${form}[name="${nome}"]`)
    this.containerDoFormulario = this.formulario.parentNode
    this.input = this.formulario.querySelector('input')
    this.btnSibmit = this.formulario.querySelector('button')
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

    if(e.type == 'change' && !e.target.value.endsWith('@gmail.com')) {
      this.input.classList.add('err')
      msg.innerText = 'Insira um email válido.'
      msg.classList.add('err')
    } else {
      this.input.classList.remove('err')
      msg.classList.remove('err')
    }

    if(e.type == 'keyup' && this.input.value == '') {
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
    if(this.input.value.endsWith('@gmail.com')) {
      this.input.value = ''
    }
  }

  adicionarEventos = () => {
    this.input.addEventListener('click', this.aniciarAnimacao)
    this.input.addEventListener('change', this.validarValorInput)
    this.input.addEventListener('keyup', this.validarValorInput)
    this.containerDoFormulario.addEventListener('click', this.encerrarAnimacao)
    this.btnSibmit.addEventListener('click', this.enviarValor)
  }

}

export default Formulario