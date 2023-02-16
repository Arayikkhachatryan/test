import React, { useState, useEffect, useContext, useCallback } from "react";
import { addCourseDescription, addCourseImage } from "../../../../api/api";
import { DataContext } from "../../../../context/DataContext";
import { v4 as uuidv4 } from "uuid";
import AdminPanelCourseTable from "../adminPanelTables/AdminPanelCourseTable";
import { getCourseData, getCardsData } from "../../../../api/api";

const AdminPanelCourse = () => {
  /// Context
  const { getCards, setGetCards, setIsLoading, setGetCourse, getCourse } =
    useContext(DataContext);

  /// States
  const [file, setFile] = useState("");
  const [cardId, setCardId] = useState();
  const [isChoosen, setIsChoosen] = useState(false);
  const [courseDesc, setCourseDesc] = useState({
    course_description: "",
    course_id: "",
  });

  /// Get data on component mount
  useEffect(() => {
    async function getPageData() {
      setIsLoading(true);
      try {
        const coruse = await getCourseData();
        setGetCourse(coruse.data);
        const cards = await getCardsData();
        setGetCards(cards.data);
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

  const handleCourseUpload = async (id) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await addCourseImage(id, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = await getCourseData();
      setGetCourse(data.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  /// Form Submit
  const courseFormSubmit = async (e) => {
    setIsLoading(true);
    try {
      const res = await addCourseDescription(
        courseDesc.course_description,
        cardId
      );
      const data = await getCourseData();
      setGetCourse(data.data);
      setCourseDesc({ course_description: "" });
      setCardId("");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const filterCards = useCallback(
    (cardId) => {
      const [card] = getCards.filter((item) => {
        return item._id === cardId;
      });
      return card;
    },
    [getCards]
  );

  return (
    <div className="admin-panel-course">
      <h1>Add Course Information</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCourseUpload(courseDesc.course_id);
        }}
      >
        <div className="card-img-selection">
          <div className="file-input">
            <p>Course Description image</p>

            <div className="choose-card">
              <div>
                <p>Choose Card</p>
              </div>
              {getCourse.map((item) => {
                const card = filterCards(item.card_id);
                console.log(card);
                return (
                  <div
                    style={{
                      cursor: "pointer",
                    }}
                    key={uuidv4()}
                    onClick={() => {
                      setIsChoosen(true);
                      setCourseDesc((prev) => {
                        return {
                          course_id: item._id,
                        };
                      });
                    }}
                  >
                    <p
                      style={{
                        backgroundColor:
                          item._id === courseDesc.course_id && isChoosen
                            ? "#cccccc"
                            : "",
                      }}
                    >
                      {card?.card_name}
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          courseFormSubmit();
        }}
      >
        <h1>Add Course Description</h1>
        <div className="admin-panel-course-info">
          <div className="card-description">
            <textarea
              name="courseDesc"
              cols="50"
              rows="10"
              className="admin-panel-textarea"
              placeholder="Course description..."
              value={courseDesc.course_description}
              onChange={(e) =>
                setCourseDesc((prev) => {
                  return {
                    ...prev,
                    course_description: e.target.value,
                  };
                })
              }
            />
            <div className="choose-course">
              <div>
                <p>Choose Course</p>
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
                      setCardId(item._id);
                    }}
                  >
                    <p
                      style={{
                        backgroundColor:
                          item._id === cardId && isChoosen ? "#cccccc" : "",
                      }}
                    >
                      {item.card_name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="card-submit">
          <div className="login-btn">
            <div className="login-bg-btn"></div>
            <button>Create Card and Course</button>
          </div>
        </div>
      </form>
      <div></div>
      <AdminPanelCourseTable />
    </div>
  );
};

export default AdminPanelCourse;
