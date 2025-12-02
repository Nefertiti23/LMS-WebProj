import React, { useState } from "react";
import CourseCard from "../CousreCard/CourseCard";
import SearchBar from "../SearchBar/SearchBar";
import { courses } from "../courses";
import "./CourseCatalog.css";

function CourseCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [instructorFilter, setInstructorFilter] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleEnrollment = (course) => {
    const enrolled = JSON.parse(localStorage.getItem("enrolled")) || [];
    if (!enrolled.includes(course.course_id)) {
      enrolled.push(course.course_id);
      localStorage.setItem("enrolled", JSON.stringify(enrolled));
      alert(`${course.title} has been enrolled`);
    } else {
      alert(`${course.title} is already enrolled.`);
    }
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
const matchesInstructor = instructorFilter
      ? course.instructor_name === instructorFilter
      : true;
    const matchesPrice = maxPrice ? course.price <= parseFloat(maxPrice) : true;
    return matchesSearch && matchesInstructor && matchesPrice;
  });

  return (
    <div className="screen">
      <h3 className='font-semibold text-3xl'>Course Catalog</h3>
      <SearchBar
        search={searchTerm}  setSearch={setSearchTerm}
        instructorFilter={instructorFilter}  setInstructorFilter={setInstructorFilter}
        maxPrice={maxPrice} setMaxPrice={setMaxPrice}
      />

      <div className="course_catalog">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.course_id}
            course={course}
            onEnroll={handleEnrollment} // Correct prop name
          />
        ))}
      </div>
      {filteredCourses.length === 0 && 
      <p className="my-10 text-center text-xl">No courses have matched your search.</p>}
    </div>
  );
}

export default CourseCatalog;