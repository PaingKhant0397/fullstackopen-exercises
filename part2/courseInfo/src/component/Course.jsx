const Header = (props) => {

  return <h1>{props.name}</h1>
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => {
        return (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        )

      })}
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((total, num) => {
    total = total + num.exercises
    return total
  }, 0)

  return (
    <p>Number of exercises {total} </p>
  )
}

const Course = ({ course }) =>
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>


export default Course;