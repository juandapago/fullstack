const Header = (props) => {
  return (
    <div>
      <h1>{props.curso.name}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>Seccion: {props.p.name} , Numero de tareas:{props.p.exercises}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part  p = {props.part[0]}/>
      <Part  p = {props.part[1]}/>
      <Part  p = {props.part[2]}/>
    </div>
  )
}

const Total = (props) => {
  const sumaTareas = props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises;

  return(
    <div>
      <p>Tareas del curso: {sumaTareas}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header curso = {course}/>
      <Content part = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}
export default App