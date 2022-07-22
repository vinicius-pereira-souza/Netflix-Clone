import Grow from './modulos/growQuestion.js'
import FormHome from './modulos/formHome.js'

const newGrow = new Grow()
newGrow.init

const formHome1 = new FormHome('form', 'formHeader')
formHome1.init

const formHome2 = new FormHome('form', 'formFooter')
formHome2.init