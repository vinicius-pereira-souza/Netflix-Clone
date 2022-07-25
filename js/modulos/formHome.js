class FormHome {
  constructor(form, nome) {
    this.formulario = document.querySelector(`${form}[name="${nome}"]`)
    this.containerInput = this.formulario.querySelector('.paddingPlaceholder')
    this.input = this.formulario.querySelector('input')
    this.btnSubmit = this.formulario.querySelector('button')
    this.msg = this.formulario.querySelector('label')

    this.adicionarEventos()
  }

  // animando o placeholder com o click
  iniciarAnimacao = (e) => {
    const container = e.target.parentNode

    container.classList.add('active')
  }

  // encerrando a animação do placeholder com focus e
  // validando se o valor do input NÃO terminar com @gmail.com
  encerraAnimacao = (e) => {
    if(e.target.value == '') { 
      e.target.parentNode.classList.remove('active')

    } else if(!this.input.value.endsWith('@gmail.com')) {
      this.containerInput.classList.add('err')
      this.msg.innerText = 'Insira um email válido.'
      this.msg.classList.add('err')
    } 
  }

  // o primeiro if verifica se o input for vazio ao clicar para entrar, 
  // se estiver vazio insere uma mensagem de erro e ativa o input com .focus()
  // o segundo if verifica se o valor do input for valido 
  // se for valido remove a mesagem de erro e limpa o input
  validarEnviarDados = (e) => {
    e.preventDefault()

    if(this.input.value == '') {
      this.containerInput.classList.add('active')
      this.containerInput.classList.add('err')
      this.msg.innerText = 'O email é obrigatório.'
      this.msg.classList.add('err')
      this.input.focus()
    }

    if(this.input.checkValidity()) {
      this.containerInput.classList.remove('err')
      this.containerInput.classList.remove('active')
      this.msg.classList.remove('err')
      this.input.value = ''
    }
  }

  // o primeiro if verifica se a classe de err esta sendo usada no container do input
  // o segundo if faz a mesma coisa que o primeiro só que também verifica se o input esta vazio
  // o terceiro if faz a mesma coisa que os anteriores mas também verifica a classe err
  // esta sendo usada e se o valor do input termina com @gmail.com, se terminar remove as classes
  validarValorInput = (e) => {
    const container = this.containerInput
    const terminarCom = this.input.value.endsWith('@gmail.com')

    if(container.classList.contains('err')) {
      this.msg.innerText = 'Insira um email válido.'
    } 
    
    if(container.classList.contains('err') && this.input.value == '') {
      this.msg.innerText = 'O email é obrigatório.'
    }

    if(container.classList.contains('err') && terminarCom) {
      container.classList.remove('err')
      this.msg.classList.remove('err')
    }
  }

  // adiciona os eventos aos elementos
  adicionarEventos = () => {
    this.containerInput.addEventListener('click', this.iniciarAnimacao)
    this.input.addEventListener('focusout', this.encerraAnimacao)
    this.input.addEventListener('keyup', this.validarValorInput)
    this.btnSubmit.addEventListener('click', this.validarEnviarDados)
  }

}

export default FormHome
// const formHome1 = new FormHome('form', 'formHeader')