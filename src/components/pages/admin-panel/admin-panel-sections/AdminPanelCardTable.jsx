import React, { useState, useContext } from "react";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { DataContext } from "../../../../context/DataContext";
import { useEffect } from "react";

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
        card_name:card.card_name,
        card_description: card.card_description,
        card_id: card._id
      };
    });
    window.scrollTo({top:0, behavior:"smooth"})
    console.log(card);
  };

  // useEffect(() => {
  //   console.log(cardData);
  // },[cardData]);

  // useEffect(() => {
  //   console.log(getCards);
  // }, []);

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
              <td>img</td>
              <td>
                {el.card_name}
              </td>
              <td>
                {el.card_description}
              </td>
              <td>
                <button
                  onClick={() => {
                    handleEdit(el);
                  }}
                >
                   <TbEdit />
                </button>
                <AiFillDelete />
              </td>
            </tr>
          ))}
          {/* {getCards &&
            getCards.map((card) => {
              <tr>
                <td>1</td>
                <td>img.img</td>
                <td>
                  <input
                    
                  />
                </td>
                <td>
                  <textarea
                    
                  />
                </td>

                
              </tr>;
            })} */}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanelCardTable;
