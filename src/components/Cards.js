import React from 'react'
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;

    function getcourses() {
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getcourses().map( (course) => (
                <Card key={course.id} course={course}/>
            ))
        }

    </div>
  )
}

export default Cards