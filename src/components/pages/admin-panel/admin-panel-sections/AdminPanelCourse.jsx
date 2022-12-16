import React, { useState } from "react";

const AdminPanelCourse = () => {
  const [courseFile, setCourseFile] = useState(null);
  const [courseDesc, setCourseDesc] = useState("");

  const addCourseImage = (e) => {
    setCourseFile(e.target.files[0]);
    console.log(courseFile);
  };
  return (
    <div className="admin-panel-course">
      <form action="">
        <div className="admin-panel-course-info">
          <h1>Add Course Information</h1>
          <div className="card-img-selection">
            <div className="file-input">
              <p>Course Description image</p>
              <input type="file" onChange={addCourseImage} />
            </div>
          </div>
          <div className="card-description">
            <textarea
              name="courseDesc"
              cols="50"
              rows="10"
              className="admin-panel-textarea"
              placeholder="Course description..."
              value={courseDesc}
              onChange={(e) => setCourseDesc(e.target.value)}
            />
          </div>
        </div>
        <div className="card-submit">
          <div className="login-btn">
            <div className="login-bg-btn"></div>
            <button>Create Card and Course</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminPanelCourse;
