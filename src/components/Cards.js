import React from 'react'
import Card from './Card';

const Cards = ({courses}) => {

    let allCourses= [];

    if (!courses) {
      return <div>No courses available</div>;
    } 

    //returns you a list of all courses recieved from the api response
    const getCourses = () => {

        if (!courses) {
          return <div>No courses available</div>;
        } else {
          Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
              allCourses.push(course);
            });
          });
          return allCourses;
        }
    }


  return (
    <div>
      {getCourses().map((courses) => (
        <Card />
      ))}
    </div>
  );
}

export default Cards