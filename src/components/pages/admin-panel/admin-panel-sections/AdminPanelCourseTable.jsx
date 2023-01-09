import React, { useState, useContext, useEffect } from "react";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { DataContext } from "../../../../context/DataContext";
import {
  deleteCard,
  deleteCardImage,
  deleteCoruse,
  getCardsData,
  getCourseData,
} from "../../../../api/api";
import { v4 as uuidv4 } from "uuid";
import Loader from "../../../common/Loader";

const AdminPanelCourseTable = ({ setCardInfo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [cardName, setCardName] = useState({
    name: "",
  });
  // const [cardData, setCardData] = useState({
  //   card_name: "",
  //   card_description: ""
  // });
  const {
    getCards,
    isLoading,
    setIsLoading,
    setGetCards,
    getCourse,
    setGetCourse,
  } = useContext(DataContext);

  const handleEdit = (card) => {
    setIsEdit((prev) => !prev);
    // setCardInfo((prev) => {
    //   return {
    //     card_name: card.card_name,
    //     card_description: card.card_description,
    //     card_id: card._id,
    //   };
    // });
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(card);
  };

  const handleDelete = async (courseId) => {
    setIsLoading(true);
    try {
      const res = await deleteCoruse(courseId);
      const data = await getCourseData();
      setGetCourse(data.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getCards.forEach((element) => {
      console.log(element);
      setCardName();

      console.log(cardName);
    });
  }, []);

  // useEffect(() => {
  //   console.log(getCards);
  // }, []);

  //   const handleDelete = async (id) => {
  //     setIsLoading(true);
  //     try {
  //       const res = await deleteCard(id);
  //       const data = await getCardsData();
  //       setGetCards(data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setIsLoading(false);
  //   };

  //   const imgDelete = async (id, cardImage) => {
  //     try {
  //       const res = await deleteCardImage(id, cardImage);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="cards-table-wrapper">
          <table>
            <thead>
              <tr>
                <th className="column1">ID</th>
                <th className="column2">Course Name</th>
                <th className="column3">Course Description</th>
                <th className="column4">Edit</th>
                {/* <th className="column1">Course Img</th> */}
                {/* <th className="column5"></th>
                <th className="column5"></th> */}
              </tr>
            </thead>
            <tbody>
              {getCourse.map((el) => (
                <tr key={uuidv4()}>
                  <td>{el.card_id}</td>
                  <td>{cardName.cardName}</td>
                  <td>{el.course_description}</td>
                  {/* <td style={{ display: "flex" }}>
                    {el.course_image}
                    <button>
                      <AiFillDelete />
                    </button>
                  </td> */}
                  <td>
                    <button>
                      <TbEdit />
                    </button>
                    <button onClick={() => handleDelete(el._id)}>
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AdminPanelCourseTable;
