import React, { useContext, useEffect, useState } from "react";
import {
  addTrainerImage,
  addTrainerInfo,
  api,
  getTrainersData,
} from "../../../../api/api";
import { DataContext } from "../../../../context/DataContext";
import Loader from "../../../common/Loader";
import AdminPanelTrainerTable from "../adminPanelTables/AdminPanelTrainerTable";
import { v4 as uuidv4 } from "uuid";

const AdminPanelTrainers = () => {
  /// Context
  const { isLoading, setIsLoading, getTrainers, setGetTrainers } =
    useContext(DataContext);

  /// States
  const [trainerFile, setTrainerFile] = useState("");
  const [isChoosen, setIsChoosen] = useState(false);
  const [trainerInfo, setTrainerInfo] = useState({
    trainer_name: "",
    trainer_workplace: "",
    trainer_id: "",
  });

  /// Get data on component mount
  useEffect(() => {
    async function getPageData() {
      setIsLoading(true);
      try {
        const data = await getTrainersData();
        setGetTrainers(data.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getPageData();
  }, []);

  /// Img upload
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

  /// Form Submit
  const trainerFormSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await addTrainerInfo(
        trainerInfo.trainer_name,
        trainerInfo.trainer_workplace
      );
      // const res = await api.post("/trainers");
      const data = await getTrainersData();
      setGetTrainers(data.data);
      console.log(getTrainers);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="admin-panel-trainers">
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
            <h1>Add Trainer Image</h1>

            <div className="trainers-upload">
              <div className="choose-trainer">
                <div>
                  <p>Choose Card</p>
                </div>
                {getTrainers.map((item) => {
                  return (
                    <div
                      style={{
                        cursor: "pointer",
                      }}
                      key={uuidv4()}
                      onClick={() => {
                        setIsChoosen(true);
                        setTrainerInfo((prev) => {
                          return {
                            trainer_id: item._id,
                          };
                        });
                      }}
                    >
                      <p
                        style={{
                          backgroundColor:
                            item._id === trainerInfo.trainer_id && isChoosen
                              ? "#cccccc"
                              : "",
                        }}
                      >
                        {item.trainer_name}
                      </p>
                    </div>
                  );
                })}
              </div>

              <input type="file" onChange={handleChange} />

              <div className="card-submit">
                <div className="login-btn">
                  <div className="login-bg-btn"></div>
                  <button>Create Card and Course</button>
                </div>
              </div>
            </div>
          </form>
          <form onSubmit={trainerFormSubmit}>
            <h1>Add Trainer Info</h1>
            <div className="card-name">
              <div className="login-field">
                <input
                  type="text"
                  placeholder="Trainer Name"
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
            </div>
            <div className="card-name">
              <div className="login-field">
                <input
                  type="text"
                  placeholder="Trainer Workplace"
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
