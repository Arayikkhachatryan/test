import React, { useContext, useState, useEffect } from "react";
import { addCardImage, cardSubmit, getCardsData } from "../../../../api/api";
import { DataContext } from "../../../../context/DataContext";
import { v4 as uuidv4 } from "uuid";
import AdminPanelCardTable from "../adminPanelTables/AdminPanelCardTable";
import Loader from "../../../common/Loader";

const AdminPanelCoruseCards = () => {
  /// Context
  const { isLoading, setGetCards, setIsLoading, getCards } =
    useContext(DataContext);

  /// States
  const [file, setFile] = useState("");
  const [isChoosen, setIsChoosen] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    card_name: "",
    card_description: "",
    card_id: "",
  });

  /// Get data on component mount
  useEffect(() => {
    async function getPageData() {
      setIsLoading(true);
      try {
        const data = await getCardsData();
        setGetCards(data.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getPageData();
  }, []);

  /// Img upload
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCardUpload = async (id) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await addCardImage(id, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = await getCardsData();
      setGetCards(data.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  /// Form Submit
  const cardFormSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await cardSubmit(
        cardInfo.card_name,
        cardInfo.card_description
      );
      const data = await getCardsData();
      setGetCards(data.data);
      setCardInfo({ card_name: "", card_description: "" });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
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
              handleCardUpload(cardInfo.card_id);
            }}
          >
            <h1>Add Course Card</h1>

            <div className="card-img-selection">
              <div className="file-input">
                <div className="choose-card">
                  <div>
                    <p>Choose Card</p>
                  </div>
                  {getCards.map((item) => {
                    return (
                      <div
                        style={{
                          cursor: "pointer",
                        }}
                        key={uuidv4()}
                        onClick={() => {
                          console.log(item._id);
                          setIsChoosen(true);
                          setCardInfo((prev) => {
                            return {
                              card_id: item._id,
                            };
                          });
                        }}
                      >
                        <p
                          style={{
                            backgroundColor:
                              item._id === cardInfo.card_id && isChoosen
                                ? "#cccccc"
                                : "",
                          }}
                        >
                          {item.card_name}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <input type="file" name="image" onChange={handleChange} />
              </div>
            </div>
            <div className="card-submit">
              <div className="login-btn">
                <div className="login-bg-btn"></div>
                <button>Create Card and Course</button>
              </div>
            </div>
          </form>
          <form onSubmit={cardFormSubmit}>
            <div className="admin-panel-course-card">
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
