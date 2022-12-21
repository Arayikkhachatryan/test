import React, { useEffect, useRef, useState } from "react";
import axios from "../../../../api/axios";
import AdminPanelCardTable from "./AdminPanelCardTable";
const ADD_CARD = "/cards/upload/:1";

const AdminPanelCoruseCards = ({ getCards }) => {
  const [file, setFile] = useState("");
  const [cardInfo, setCardInfo] = useState({
    card_name: "",
    card_description: "",
  });

  const filePicer = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    filePicer.current.click();
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("images", file);

    try {
      const res = await axios.post(ADD_CARD, formData);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(file);
    console.log(formData);
  };

  useEffect(() => {
    console.log(getCards);
  }, [getCards]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/cards", cardInfo);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-panel-course">
      <form onSubmit={handleSubmit}>
        <div className="admin-panel-course-card">
          <h1>Add Course Card</h1>
          <div className="card-img-selection">
            <div className="file-input">
              <p>Course Card image</p>
              <button onClick={handleClick}>file</button>
              <input
                className="hidden"
                ref={filePicer}
                type="file"
                name="image"
                onChange={handleChange}
              />
            </div>
            <div className="card-submit">
              <div className="login-btn">
                <div className="login-bg-btn"></div>
                <button onClick={handleUpload}>Create Card and Course</button>
              </div>
            </div>
          </div>
          <div className="card-name">
            <div className="login-field">
              <input
                type="text"
                placeholder="Card Name"
                className="login-field"
                name="card_name"
                value={cardInfo.card_name}
                onChange={(e) =>
                  setCardInfo({ ...cardInfo, card_name: e.target.value })
                }
              />
            </div>
          </div>
          <div className="card-description">
            <textarea
              name="card_description"
              cols="50"
              rows="10"
              className="admin-panel-textarea"
              placeholder="Course Card description..."
              value={cardInfo.card_description}
              onChange={(e) =>
                setCardInfo({ ...cardInfo, card_description: e.target.value })
              }
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
