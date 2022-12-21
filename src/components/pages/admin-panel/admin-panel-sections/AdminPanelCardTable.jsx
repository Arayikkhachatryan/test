import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useEffect } from "react";

const AdminPanelCardTable = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardDesc, setCardDesc] = useState("");

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
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
          <tr>
            <td>1</td>
            <td>img.img</td>

            <td>
              <input
                name="cardName"
                type="text"
                readOnly={isEdit ? false : true}
                style={{ border: isEdit ? "1px solid black" : "none" }}
                // value={card.card_name}
                onChange={(e) => setCardName(e.target.value)}
              />
            </td>
            <td>
              <textarea
                type="text"
                readOnly={isEdit ? false : true}
                style={{ border: isEdit ? "1px solid black" : "none" }}
                // value={card.card_description}
                onChange={(e) => setCardDesc(e.target.value)}
              />
            </td>

            <td>
              <button onClick={handleEdit}>
                {isEdit ? <MdDone /> : <TbEdit />}
              </button>
              <AiFillDelete />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanelCardTable;
