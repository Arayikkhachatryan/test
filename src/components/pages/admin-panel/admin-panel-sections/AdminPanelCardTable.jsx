import React from "react";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
const AdminPanelCardTable = () => {
  return (
    <div className="cards-table-wrapper">
      <table>
        <thead>
          <tr>
            <th className="column1">ID</th>
            <th className="column2">Card Img</th>
            <th className="column3">Card Name</th>
            <th className="column4">Card Description</th>
            <th className="column5"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>img.img</td>
            <td>React JS</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              ipsa quaerat blanditiis inventore qui. Ad temporibus eligendi
              distinctio, voluptatum necessitatibus perspiciatis praesentium
              exercitationem veniam nihil dolore nam ratione at rerum.
            </td>
            <td>
              <TbEdit />
              <AiFillDelete />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>img.img</td>
            <td>React JS</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              ipsa quaerat blanditiis inventore qui. Ad temporibus eligendi
              distinctio, voluptatum necessitatibus perspiciatis praesentium
              exercitationem veniam nihil dolore nam ratione at rerum.
            </td>
            <td>
              <TbEdit />
              <AiFillDelete />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>img.img</td>
            <td>React JS</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              ipsa quaerat blanditiis inventore qui. Ad temporibus eligendi
              distinctio, voluptatum necessitatibus perspiciatis praesentium
              exercitationem veniam nihil dolore nam ratione at rerum.
            </td>
            <td>
              <TbEdit />
              <AiFillDelete />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>img.img</td>
            <td>React JS</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              ipsa quaerat blanditiis inventore qui. Ad temporibus eligendi
              distinctio, voluptatum necessitatibus perspiciatis praesentium
              exercitationem veniam nihil dolore nam ratione at rerum.
            </td>
            <td>
              <TbEdit />
              <AiFillDelete />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanelCardTable;
