import React from "react";
import { useState } from "react";
import axios from "../../../../api/axios";
import InputField from "../../../common/InputField";
import AdminPanelCardTable from "./AdminPanelCardTable";
const ADD_CARD = "/cards/upload/:id";
const AdminPanelCoruseCards = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const addCardsImg = async (e) => {
    e.preventDefault();

    await axios
      .post(ADD_CARD)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="admin-panel-course">
      <form action="">
        <div className="admin-panel-course-card">
          <h1>Create Course Card</h1>
          <div className="card-img-selection">
            <div className="file-input">
              <p>Course Card image</p>
              <InputField type="file" accept=".svg" onChange={addCardsImg} />
            </div>

            <div className="login-btn">
              <div className="login-bg-btn"></div>
              <button>Add image</button>
            </div>
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
            />
          </div>
        </div>
        {/* <div className="admin-panel-course-info">
          <h1>Create Course Information</h1>
          <div className="card-img-selection">
            <div className="file-input">
              <p>Course Description image</p>
              <InputField type="file" accept=".svg" />
            </div>

            <div className="login-btn">
              <div className="login-bg-btn"></div>
              <button>Add image</button>
            </div>
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
        </div> */}
      </form>
      <AdminPanelCardTable />
    </div>
  );
};

export default AdminPanelCoruseCards;
