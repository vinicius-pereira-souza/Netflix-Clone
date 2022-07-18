class growQuestion {
  constructor() {
    this.questionsBtn = document.querySelectorAll('.pergunta')
    this.addEvent()
  }

  handleClick = (e) => {
    const resp = e.target.nextElementSibling
    e.target.classList.toggle('active')
    if(e.target.classList.contains('active')) {
      resp.classList.add('active')
    } else {
      resp.classList.remove('active')
    }
  }

  addEvent = () => {
    this.questionsBtn.forEach(btn => {
      btn.addEventListener('click', this.handleClick)
    })
  }
}

export default growQuestion