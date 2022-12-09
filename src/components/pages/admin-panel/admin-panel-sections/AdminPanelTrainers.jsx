import React from "react";
import InputField from "../../../common/InputField";

const AdminPanelTrainers = () => {
  return (
    <div className="admin-panel-trainers">
      <form action="">
        <h1>Create Course Card</h1>
        <div className="card-img-selection">
          <p>Trainer image</p>
          <InputField type="file" accept=".svg" />
        </div>
        <div className="card-name">
          <InputField placeholder="Trainer Name" className="login-field" />
        </div>
        <div className="card-name">
          <InputField placeholder="Trainer Workplace" className="login-field" />
        </div>

        <div className="card-submit">
          <div className="login-btn">
            <div className="login-bg-btn"></div>
            <button>Create Trainer Card</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminPanelTrainers;
