import React from "react";
import { useContext } from "react";
import { DataContext } from "../../../../context/DataContext";
import { v4 as uuidv4 } from "uuid";
import { AiFillDelete } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import Loader from "../../../common/Loader";
import {
  deleteTrainerCard,
  deleteTrainerImage,
  getTrainersData,
} from "../../../../api/api";

const AdminPanelTrainerTable = () => {
  const { getTrainers, setGetTrainers, isLoading, setIsLoading } =
    useContext(DataContext);

  const TrainerDelete = async (id) => {
    setIsLoading(true);
    try {
      const res = await deleteTrainerCard(id);
      const { data } = await getTrainersData();
      setGetTrainers(data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const trainerImgDelete = async (id, imageName) => {
    setIsLoading(true);
    try {
      const res = await deleteTrainerImage(id, imageName);
      const { data } = await getTrainersData();
      setGetTrainers(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="cards-table-wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th className="column1">ID</th>
                <th className="column4">Trainer Img</th>
                <th className="column4">Trainer Name</th>
                <th className="column4">Trainer Workplace</th>
                <th className="column5">Edit</th>
              </tr>
            </thead>
            <tbody>
              {getTrainers.map((el) => (
                <tr key={uuidv4()}>
                  <td>{el._id}</td>
                  <td style={{ display: "flex" }}>
                    {el.trainer_image}
                    {el.trainer_image === null ? (
                      <></>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            trainerImgDelete(el._id, el.trainer_image);
                          }}
                        >
                          <AiFillDelete />
                        </button>
                      </>
                    )}
                  </td>
                  <td>{el.trainer_name}</td>
                  <td>{el.trainer_workplace}</td>
                  <td>
                    <button>
                      <TbEdit />
                    </button>
                    <button
                      onClick={() => {
                        TrainerDelete(el._id);
                      }}
                    >
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default AdminPanelTrainerTable;
