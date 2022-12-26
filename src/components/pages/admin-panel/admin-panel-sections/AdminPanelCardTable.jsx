import React, { useState, useContext } from "react";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { DataContext } from "../../../../context/DataContext";
import { deleteCard } from "../../../../api/api";

const AdminPanelCardTable = ({ setCardInfo }) => {
  const [isEdit, setIsEdit] = useState(false);
  // const [cardData, setCardData] = useState({
  //   card_name: "",
  //   card_description: ""
  // });
  const { getCards } = useContext(DataContext);

  const handleEdit = (card) => {
    setIsEdit((prev) => !prev);
    setCardInfo((prev) => {
      return {
        card_name: card.card_name,
        card_description: card.card_description,
        card_id: card._id,
      };
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(card);
  };

  // useEffect(() => {
  //   console.log(cardData);
  // },[cardData]);

  // useEffect(() => {
  //   console.log(getCards);
  // }, []);

  const handleDelete = async (id) => {
    try {
      const res = await deleteCard(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
          {getCards.map((el, idx) => (
            <tr key={idx}>
              <td>{el._id}</td>
              <td>{el.card_image}</td>
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
                    handleDelete(el._id);
                  }}
                >
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanelCardTable;
