import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { addCourseDescription, api } from "../../../../api/api";
import { DataContext } from "../../../../context/DataContext";
import AdminPanelCourseTable from "./AdminPanelCourseTable";
import { v4 as uuidv4 } from "uuid";

const AdminPanelCourse = () => {
  const [courseFile, setCourseFile] = useState(null);
  const [courseDesc, setCourseDesc] = useState("");
  const [cardId, setCardId] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const {
    getCards,
    setGetCards,
    isLoading,
    setIsLoading,
    getCourse,
    setGetCourse,
    coruseName,
    setCoruseName,
  } = useContext(DataContext);

  const addCourseImage = (e) => {
    setCourseFile(e.target.files[0]);
    console.log(courseFile);
  };

  const courseSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await addCourseDescription(
        { course_description: courseDesc },
        cardId
      );
      const data = await api.get("/courses");
      setGetCourse(data.data);
      setCardId("");
    } catch (error) {}
  };

  useEffect(() => {
    async function getPageData() {
      setIsLoading(true);
      try {
        const data = await api.get("/courses");
        const cards = await api.get("/cards");
        setGetCourse(data.data);
        setGetCards(cards.data);
        console.log(coruseName);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getPageData();
  }, []);

  return (
    <div className="admin-panel-course">
      <h1>Add Course Information</h1>
      <form>
        <div className="card-img-selection">
          <div className="file-input">
            <p>Course Description image</p>
            <input type="file" onChange={addCourseImage} />
            <input type="text" />
          </div>
        </div>
        <div className="card-submit">
          <div className="login-btn">
            <div className="login-bg-btn"></div>
            <button>Create Card and Course</button>
          </div>
        </div>
      </form>
      <form onSubmit={courseSubmit}>
        <div className="admin-panel-course-info">
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
            <div>
              {getCards.map((item, idx) => {
                // setCoruseName((prev) => {
                //   return {
                //     cardName: item.card_name,
                //   };
                // });
                // console.log(item.card_name);
                setCoruseName(item.card_name);
                return (
                  <div key={uuidv4()}>
                    <p>{item.card_name}</p>
                    <input
                      type="checkbox"
                      onChange={() => {
                        setCardId(item._id);
                      }}
                    />
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
