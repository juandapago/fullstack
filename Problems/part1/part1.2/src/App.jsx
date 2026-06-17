const Header = (course) => {
  return (
    <div>
      <h1>{course.curso}</h1>
    </div>
  )
}
const Part = (infoParte) => {
  return (
    <div>
      <p>Seccion: {infoParte.p.seccion} , Numero de tareas:{infoParte.p.tareas}</p>
    </div>
  )
}
const Content = (infoSecciones) => {
  return (
    <div>
      <Part  p = {infoSecciones.secciones[0]}/>
      <Part  p = {infoSecciones.secciones[1]}/>
      <Part  p = {infoSecciones.secciones[2]}/>
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