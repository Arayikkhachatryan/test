import React, { useContext, useEffect, useState } from "react";
import { addTrainerImage, api, getTrainersData } from "../../../../api/api";
import { DataContext } from "../../../../context/DataContext";
import Loader from "../../../common/Loader";
import AdminPanelTrainerTable from "../adminPanelTables/AdminPanelTrainerTable";

const AdminPanelTrainers = () => {
  const [trainerInfo, setTrainerInfo] = useState({
    trainer_name: "",
    trainer_workplace: "",
    trainer_id: "",
  });
  const [trainerFile, setTrainerFile] = useState("");
  const { isLoading, setIsLoading, getTrainers, setGetTrainers } =
    useContext(DataContext);

  useEffect(() => {
    async function getPageData() {
      setIsLoading(true);
      try {
        const data = await api.get("/trainers");
        setGetTrainers(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getPageData();
  }, []);

  const handeleAddTrainer = async () => {
    setIsLoading(true);
    try {
      const res = await api.post("/trainers", {
        trainer_name: trainerInfo.trainer_name,
        trainer_workplace: trainerInfo.trainer_workplace,
      });
      const data = await getTrainersData();
      setGetTrainers(data.data);
      console.log(getTrainers);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setTrainerFile(e.target.files[0]);
  };

  const handleUploadTrainer = async (id) => {
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", trainerFile);
      const res = await addTrainerImage(id, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = await getTrainersData();
      setGetTrainers(data.data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="admin-panel-trainers">
      <h1>Add Trainer</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUploadTrainer(trainerInfo.trainer_id);
            }}
          >
            <div className="file-input">
              <input
                type="text"
                value={trainerInfo.trainer_id}
                onChange={(e) =>
                  setTrainerInfo((prev) => {
                    return {
                      trainer_id: e.target.value,
                    };
                  })
                }
              />
              <input type="file" onChange={handleChange} />
            </div>
            <div className="card-img-selection">
              <div className="login-btn">
                <div className="login-bg-btn"></div>
                <button>Add image</button>
              </div>
            </div>
          </form>
          <form onSubmit={handeleAddTrainer}>
            <div className="card-name">
              <input
                type="text"
                value={trainerInfo.trainer_name}
                onChange={(e) =>
                  setTrainerInfo((prev) => {
                    return {
                      ...prev,
                      trainer_name: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="card-name">
              <input
                type="text"
                value={trainerInfo.trainer_workplace}
                onChange={(e) =>
                  setTrainerInfo((prev) => {
                    return {
                      ...prev,
                      trainer_workplace: e.target.value,
                    };
                  })
                }
              />
            </div>

            <div className="card-submit">
              <div className="login-btn">
                <div className="login-bg-btn"></div>
                <button>Create Trainer Card</button>
              </div>
            </div>
          </form>
        </>
      )}
      <AdminPanelTrainerTable />
    </div>
  );
};

export default AdminPanelTrainers;
