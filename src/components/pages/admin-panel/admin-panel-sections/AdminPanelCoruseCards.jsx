import React, { useState } from "react";
import axios from "../../../../api/axios";
import InputField from "../../../common/InputField";
import AdminPanelCardTable from "./AdminPanelCardTable";
const ADD_CARD = "/cards/upload/:id";
const AdminPanelCoruseCards = () => {
  const [cardFile, setCardFile] = useState(null);
  const [cardName, setCardName] = useState("");
  const [cardDesc, setCardDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cardFile", cardFile);
    formData.append("cardName", cardName);
    formData.append("cardDesc", cardDesc);
    await axios
      .post(ADD_CARD, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCardImage = (e) => {
    setCardFile(e.target.files[0]);
    console.log(cardFile);
  };

  return (
    <div className="admin-panel-course">
      <form onSubmit={handleSubmit}>
        <div className="admin-panel-course-card">
          <h1>Add Course Card</h1>
          <div className="card-img-selection">
            <div className="file-input">
              <p>Course Card image</p>
              <input type="file" onChange={addCardImage} />
            </div>
          </div>
          <div className="card-name">
            <div className="login-field">
              <input
                type="email"
                placeholder="Email"
                className="login-field"
                name="email"
                onChange={(e) => setCardFile(e.target.value)}
              />
            </div>
          </div>
          <div className="card-description">
            <textarea
              name="cardDesc"
              cols="50"
              rows="10"
              className="admin-panel-textarea"
              placeholder="Course Card description..."
              onChange={(e) => setCardDesc(e.target.value)}
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
      <AdminPanelCardTable />
    </div>
  );
};

export default AdminPanelCoruseCards;
