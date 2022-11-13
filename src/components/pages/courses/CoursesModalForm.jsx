import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "../../common/InputField";
import emailjs from "emailjs-com";

const CoursesModalForm = ({ open, onClose }) => {
  const { t } = useTranslation();
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_course: "",
    user_time: "",
  });
  console.log(values);

  const updateForm = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(e.target);
    console.log(values);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_n5c4jpa", "template_teuuymc", values, "pdhYY8IQiRxIzVget")
      .then(
        (result) => {
          setValues({
            user_name: "",
            user_email: "",
            user_phone: "",
            user_course: "",
            user_time: "",
          });
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    onClose(
      toast.success(t("onSubmitNotif"), {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    );
    e.target.reset();
  };

  if (!open) return null;
  return (
    <>
      <div className="overlay-bg" onClick={onClose}>
        <div className="modal-overlay">
          <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="modal-wrapper-content">
              <div className="modal-close" onClick={onClose}>
                <AiOutlineClose />
              </div>
              <form onSubmit={sendEmail}>
                <h3>Some Text!</h3>
                <InputField
                  label="name"
                  name="user_name"
                  type="text"
                  updateForm={updateForm}
                />
                <InputField
                  label="email"
                  name="user_email"
                  type="email"
                  updateForm={updateForm}
                />
                <InputField
                  label="phone"
                  name="user_phone"
                  type="text"
                  updateForm={updateForm}
                />
                <div>
                  <label htmlFor="user_course">course</label>
                  <select
                    onChange={updateForm}
                    defaultValue="user_course"
                    name="user_course"
                  >
                    <option value="user_course" disabled>
                      Choose course
                    </option>
                    <option value="html">html</option>
                    <option value="js">js</option>
                    <option value="react">react</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="user_course">course</label>
                  <select
                    onChange={updateForm}
                    defaultValue="user_time"
                    name="user_time"
                  >
                    <option value="user_course" disabled>
                      Choose course
                    </option>
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                  </select>
                </div>
                <button type="submit">{t("register")}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesModalForm;
