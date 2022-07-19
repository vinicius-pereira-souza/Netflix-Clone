import Grow from './modulos/growQuestion.js'
import Formulario from './modulos/formulario.js'

const newGrow = new Grow()
newGrow.init

const form1 = new Formulario('form', 'formHeader')
form1.init

const form2 = new Formulario('form', 'formFooter')
form2.init