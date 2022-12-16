import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

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
            <th className="column1">Card Img</th>
            <th className="column2">Card Name</th>
            <th className="column4">Card Description</th>
            <th className="column5"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>img.img</td>
            <td>
              <input
                name="cardName"
                type="text"
                readOnly={isEdit ? false : true}
                style={{ border: isEdit ? "1px solid black" : "none" }}
                onChange={(e) => setCardName(e.target.value)}
              />
            </td>
            <td>
              <textarea
                type="text"
                onChange={(e) => setCardDesc(e.target.value)}
                readOnly={isEdit ? false : true}
                style={{ border: isEdit ? "1px solid black" : "none" }}
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
