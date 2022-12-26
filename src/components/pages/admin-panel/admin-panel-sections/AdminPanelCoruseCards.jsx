import React, { useContext, useState, useEffect } from "react";
// import axios from "../../../../api/axios";
import AdminPanelCardTable from "./AdminPanelCardTable";
import { DataContext } from "../../../../context/DataContext";
import Loader from "../../../common/Loader";
import { addCardImage, api } from "../../../../api/api";

const AdminPanelCoruseCards = () => {
  const [file, setFile] = useState("");
  const [cardInfo, setCardInfo] = useState({
    card_name: "",
    card_description: "",
    card_id: "",
  });
  const { isLoading, setGetCards, setIsLoading } = useContext(DataContext);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  useEffect(() => {
    async function getPageData() {
      setIsLoading(true);
      try {
        const data = await api.get("/cards");
        setGetCards(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getPageData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/cards", {
        card_name: cardInfo.card_name,
        card_description: cardInfo.card_description,
      });
      const data = await api.get("/cards");
      setGetCards(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = async (id) => {
    setIsLoading(true)
    try {
      const formData = new FormData();
      formData.append("image", file);
      const { data } = await addCardImage(id, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  };

  return (
    <div className="admin-panel-course">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpload(cardInfo.card_id);
            }}
          >
            <div className="card-img-selection">
              <div className="file-input">
                <p>Course Card image</p>
                <input
                  type="text"
                  value={cardInfo.card_id}
                  onChange={(e) =>
                    setCardInfo((prev) => {
                      return {
                        card_id: e.target.value,
                      };
                    })
                  }
                />
                <input type="file" name="image" onChange={handleChange} />
              </div>
              <div className="card-submit">
                <div className="login-btn">
                  <div className="login-bg-btn"></div>
                  <button>Create Card and Course</button>
                </div>
              </div>
            </div>
          </form>
          <form onSubmit={handleSubmit}>
            <div className="admin-panel-course-card">
              <h1>Add Course Card</h1>

              <div className="card-name">
                <div className="login-field">
                  <input
                    type="text"
                    placeholder="Card Name"
                    className="login-field"
                    name="card_name"
                    value={cardInfo.card_name}
                    onChange={(e) =>
                      setCardInfo((prev) => {
                        return {
                          ...prev,
                          card_name: e.target.value,
                        };
                      })
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
                    setCardInfo((prev) => {
                      return {
                        ...prev,
                        card_description: e.target.value,
                      };
                    })
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
          <AdminPanelCardTable setCardInfo={setCardInfo} />
        </>
      )}
    </div>
  );
};

export default AdminPanelCoruseCards;
