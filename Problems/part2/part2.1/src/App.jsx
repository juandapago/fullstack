import Course from './components/Course'
const Total = (props) => {
  const totalExcercises = props.total.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises
  }, 0)
  return (
    <p><strong>Total of {totalExcercises} excercises</strong></p>
  )
}

const Part = (props) => {
  return (
    <p>{props.name}: {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    props.parts.map(part => 
        <Part key = {part.id} name = {part.name} exercises = {part.exercises}/>
    )
  )
}

const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const App = () => {
const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <Header courseName = 'Web development curriculum'/>
      {courses.map(course =>
      <Course course={course} key = {course.id}/>
      )}
      
    </>
  )
}

export default App