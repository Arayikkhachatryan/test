import React from "react";
import { CONFIG } from "../../../../config";
import { BsCardText } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

const AdminPanelAside = ({ children, setActive, active }) => {
  const [isOpen, setIsOpen] = useState(false);

  const icons = [
    BsCardText,
    BsJournalBookmarkFill,
    FaUsers,
    MdMiscellaneousServices,
    MdOutlineWork,
  ];

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  return (
    <>
      <aside style={{ width: isOpen ? "400px" : "120px" }}>
        <div className="aside-fixed">
          <GiHamburgerMenu onClick={() => setIsOpen((prev) => !prev)} />
          {CONFIG.adminPanelAside.map((item, idx) => {
            const Icons = icons[idx];
            return (
              <div
                key={idx}
                className="aside-container"
                onClick={() => setActive(item.id)}
                style={{
                  backgroundColor: item.id === active ? "#26264f" : "",
                }}
              >
                <div>
                  <Icons />
                  <p style={{ display: isOpen ? "block" : "none" }}>
                    {item.name}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="aside-logout" onClick={handleLogout}>
            <div>
              <BiLogOut />
              <p
                style={{
                  display: isOpen ? "block" : "none",
                }}
              >
                LogOut
              </p>
            </div>
          </div>
        </div>
      </aside>
      <div className="admin-panel-content">{children}</div>
    </>
  );
};

export default AdminPanelAside;
