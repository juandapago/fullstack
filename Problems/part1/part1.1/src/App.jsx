const Header = (course) => {
  return (
    <div>
      <h1>{course.curso}</h1>
    </div>
  )
}
const Content = (infoSecciones) => {
  return (  
    <div>
      <p>Seccion: {infoSecciones.secciones[0].seccion}, Tareas: {infoSecciones.secciones[0].tareas}</p>
      <p>Seccion: {infoSecciones.secciones[1].seccion}, Tareas: {infoSecciones.secciones[1].tareas}</p>
      <p>Seccion: {infoSecciones.secciones[2].seccion}, Tareas: {infoSecciones.secciones[2].tareas}</p>
    </div>
  )
}

const Total = (infoSecciones) => {
const sumaTareas = infoSecciones.suma[0].tareas + infoSecciones.suma[1].tareas + infoSecciones.suma[2].tareas;
return(
  <div>
    <p>Tareas del curso: {sumaTareas}</p>
  </div>
)
}
const App = () => {
  const course = 'Half Stack application development'
  const infoSecciones = [
    {seccion : 'Fundamentals of React', tareas : 10},
    {seccion : 'Using props to pass data', tareas : 7},
    {seccion : 'State of a component', tareas : 14},
  ]
  return (
    <div>
      <Header curso = {course}/>
      <Content secciones = {infoSecciones}/>
      <Total suma = {infoSecciones}/>
    </div>
    )
  }

export default App