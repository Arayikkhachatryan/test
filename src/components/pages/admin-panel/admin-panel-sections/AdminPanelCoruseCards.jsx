import React from "react";
import InputField from "../../../common/InputField";

const AdminPanelCoruseCards = () => {
  return (
    <div className="admin-panel-course">
      <form action="">
        <div className="admin-panel-course-card">
          <h1>Create Course Card</h1>
          <div className="card-img-selection">
            <p>Course Card image</p>
            <InputField type="file" accept=".svg" />
          </div>
          <div className="card-name">
            <InputField placeholder="Course Name" className="login-field" />
          </div>
          <div className="card-description">
            <textarea
              name=""
              id=""
              cols="50"
              rows="10"
              className="admin-panel-textarea"
              placeholder="Course Card description..."
            ></textarea>
          </div>
        </div>
        <div className="admin-panel-course-info">
          <h1>Create Course Information</h1>
          <div className="course-img-selection">
            <p>Course Course Description image</p>
            <InputField placeholder="Password" type="file" accept=".svg" />
          </div>
          <div className="card-description">
            <textarea
              name=""
              id=""
              cols="50"
              rows="10"
              className="admin-panel-textarea"
              placeholder="Course description..."
            ></textarea>
          </div>
          <div className="card-submit">
            <div className="login-btn">
              <div className="login-bg-btn"></div>
              <button>Create Card and Course</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminPanelCoruseCards;
