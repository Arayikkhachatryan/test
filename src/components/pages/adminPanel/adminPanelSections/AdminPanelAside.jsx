import React, { useState } from "react";
import { CONFIG } from "../../../../config";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";

const AdminPanelAside = ({ children, setActive, active }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  return (
    <>
      <aside style={{ minWidth: isOpen ? "400px" : "120px" }}>
        <div className="aside-fixed">
          <GiHamburgerMenu onClick={() => setIsOpen((prev) => !prev)} />
          {CONFIG.adminPanelAside.map((item, idx) => {
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
                  {item.icon}
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
