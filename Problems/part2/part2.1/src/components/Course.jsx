const Course = ({course}) => {
  return(
    <div> 
      <Header courseName = {course.name} />
      <Content parts = {course.parts}/>
      <Total total = {course.parts}/>
    </div>
  )
}
