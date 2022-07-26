class Formulario {
  constructor() {
    this.containerInputs = document.querySelectorAll('.inputContainer')
    this.btnMostrarSenha = document.querySelector('.mostrarSenha')
    this.btnSubmit = document.querySelector('.btnSubmit')

    this.adicionarEventos()
  }

  // iniciando a animação do placeholder
  //verificando se o input é de senha 
  // se for coloca a classe active que irá fazer o botão para ver a senha aparecer
  aniciarAnimacao = (e) => {
    const containerTarget = e.target.parentNode
    containerTarget.classList.add('focus')

    if(containerTarget.classList.contains('senha')) {
      this.btnMostrarSenha.classList.add('active')
    }
  }

  // o primeiro if verifica se a senha tem a classe errActive 
  // e se a quantidade de caracteres é maior ou igual a 4
  // o else if faz exatamente o contrario
  // o segundo if faz a mesma coisa que o primeiro só que para o email
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

  // Ao clicar no botão 'mostrar' irá trocar o type de 'password' para 'text'
  // e vice versa alterando o texto do botão
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

  // verifica se o valor de algum input for vazio 
  // caso seja vazio o placeholder voltara a posição original 
  // e a mensagem de erro irá aparecer
  validarValor = (e) => {
    const msgErr = e.target.parentNode.nextElementSibling

    if(e.target.value == '') {
      e.target.parentNode.classList.add('errActive')
      e.target.parentNode.classList.remove('focus')
      msgErr.classList.add('activeErr')
    }

  }

  // O primeiro if verifica que se ao clicar no botão de entrar o input do email
  // não terminar com @gmail.com se não termina irá acionar a mensagem de erro
  // o mesmo vale para o input de senha mas irá checar se possui menos de 4 caracteres
  // O segundo if verifica se o valor de ambos os inputs são validos 
  // O terceiro if verifica se ambos for validos se for o input irá limpo   
  enviarFormulario = (e) => {
    e.preventDefault()
    const inputs = document.querySelectorAll('.submit')

    inputs.forEach(input => {
      const msgErr = input.parentNode.nextElementSibling

      if(input.name == 'email' && !e.target.value.endsWith('@gmail.com')) {
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