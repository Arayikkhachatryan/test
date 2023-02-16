import React, { useContext, useCallback, useEffect } from "react";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { DataContext } from "../../../../context/DataContext";
import {
  deleteCard,
  deleteCardImage,
  deleteCoruse,
  getCardsData,
} from "../../../../api/api";
import { v4 as uuidv4 } from "uuid";
import Loader from "../../../common/Loader";

const AdminPanelCardTable = ({ setCardInfo }) => {
  const {
    getCards,
    isLoading,
    setIsLoading,
    setGetCards,
    setIsEdit,
    getCourse,
  } = useContext(DataContext);

  const handleEdit = (card) => {
    setIsEdit((prev) => !prev);
    setCardInfo((prev) => {
      return {
        ...prev,
        card_name: card.card_name,
        card_description: card.card_description,
        card_id: card._id,
        card_edit: true,
      };
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id, cardId) => {
    setIsLoading(true);
    try {
      const res = await deleteCard(id);
      const cards = await deleteCoruse(cardId);
      const { data } = await getCardsData();
      setGetCards(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const filterCourses = useCallback(
    (cardId) => {
      const [course] = getCourse.filter((item) => {
        return item.card_id === cardId;
      });
      return course?._id;
    },
    [getCourse]
  );

  const imgDelete = async (id, imageName) => {
    setIsLoading(true);
    try {
      const res = await deleteCardImage(id, imageName);
      const { data } = await getCardsData();
      setGetCards(data);
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

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
                <th className="column1">Card Img</th>
                <th className="column2">Card Name</th>
                <th className="column4">Card Description</th>
                <th className="column5"></th>
              </tr>
            </thead>
            <tbody>
              {getCards.map((el, idx) => {
                const course = filterCourses(el._id);
                console.log(course);
                return (
                  <tr key={uuidv4()}>
                    <td>{el._id}</td>

                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {el.card_image}
                      {el.card_image === null ? (
                        <></>
                      ) : (
                        <>
                          <button
                            onClick={() => {
                              imgDelete(el._id, el.card_image);
                            }}
                          >
                            <AiFillDelete />
                          </button>
                        </>
                      )}
                    </td>
                    <td>{el.card_name}</td>
                    <td>{el.card_description}</td>
                    <td>
                      <button
                        onClick={() => {
                          handleEdit(el);
                        }}
                      >
                        <TbEdit />
                      </button>
                      <button
                        onClick={() => {
                          handleDelete(el._id, course);
                        }}
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AdminPanelCardTable;
