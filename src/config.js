import AdminPanelCoruseCards from "./components/pages/adminPanel/adminPanelSections/AdminPanelCoruseCards";
import AdminPanelCourse from "./components/pages/adminPanel/adminPanelSections/AdminPanelCourse";
import AdminPanelPortfolio from "./components/pages/adminPanel/adminPanelSections/AdminPanelPortfolio";
import AdminPanelServices from "./components/pages/adminPanel/adminPanelSections/AdminPanelServices";
import AdminPanelTrainers from "./components/pages/adminPanel/adminPanelSections/AdminPanelTrainers";
import { BsCardText } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdMiscellaneousServices, MdOutlineWork } from "react-icons/md";
import { BsJournalBookmarkFill } from "react-icons/bs";

export const CONFIG = {
  headerConfig: [
    {
      name: "header.home",
      link: "/",
    },
    {
      name: "header.aboutUs",
      link: "/about",
    },
    {
      name: "header.services",
      link: "/service",
    },
    {
      name: "header.projects",
      link: "/project",
    },
    {
      name: "header.courses",
      link: "/courses",
    },
    {
      name: "header.contactUs",
      link: "/contact",
    },
  ],

  coursesCardsConfig: [
    {
      title: "Javascript",
      link: "/courses/js-course",
      className: "js-icon",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et, aut? Iusto sed, expedita quam iste reprehenderit laborum nisi tenetur quisquam quibusdam harum, velit dolorum consequuntur repellat doloribus? Cupiditate, ipsam minima.",
    },
    {
      title: "React JS",
      link: "/courses/react-js-course",
      className: "react-icon",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et, aut? Iusto sed, expedita quam iste reprehenderit laborum nisi tenetur quisquam quibusdam harum, velit dolorum consequuntur repellat doloribus? Cupiditate, ipsam minima.",
    },
    {
      title: "Node JS",
      link: "/courses/node-js-course",
      className: "node-icon",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et, aut? Iusto sed, expedita quam iste reprehenderit laborum nisi tenetur quisquam quibusdam harum, velit dolorum consequuntur repellat doloribus? Cupiditate, ipsam minima.",
    },
    {
      title: "Quality Assurance",
      link: "/courses/qa-course",
      className: "qa-icon",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et, aut? Iusto sed, expedita quam iste reprehenderit laborum nisi tenetur quisquam quibusdam harum, velit dolorum consequuntur repellat doloribus? Cupiditate, ipsam minima.",
    },
    {
      title: "Ui/Ux Design",
      link: "/courses/ui-ux-course",
      className: "ui-ux-icon",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et, aut? Iusto sed, expedita quam iste reprehenderit laborum nisi tenetur quisquam quibusdam harum, velit dolorum consequuntur repellat doloribus? Cupiditate, ipsam minima.",
    },
  ],

  allCoursesSilderConfig: [
    {
      title: "HTML & CSS",
      link: "/courses/html-css-course",
      className: "html-css-icon",
    },
    {
      title: "Javascript",
      link: "/courses/js-course",
      className: "js-icon",
    },
    {
      title: "React JS",
      link: "/courses/react-js-course",
      className: "react-icon",
    },
    {
      title: "Node JS",
      link: "/courses/node-js-course",
      className: "node-icon",
    },
    {
      title: "Quality Assurance",
      link: "/courses/qa-course",
      className: "qa-icon",
    },
    {
      title: "Ui/Ux Design",
      link: "/courses/ui-ux-course",
      className: "ui-ux-icon",
    },
  ],

  trainersConfig: [
    {
      image: "/images/smbat.png",
      name: "Smbat",
      workplace: "Software Engineer at Tumo Center for Creative Technologies",
      course: "",
    },
    {
      image: "/images/david.png",
      name: "David",
      workplace: "Software Engineer at Relum",
      course: "",
    },
    {
      image: "/images/arsen.png",
      name: "Arsen",
      workplace: "Frontend Developer at Tmarket",
      course: "",
    },
    {
      image: "/images/tigran.png",
      name: "Tigran",
      workplace: "Frontend Web Developer at Direlli LLC",
      course: "",
    },
    {
      image: "/images/sona.png",
      name: "Sona",
      workplace: "QA engineer at DataArt",
      course: "",
    },
    {
      image: "/images/vahan.png",
      name: "Vahan",
      workplace: "CEO at BSTRACT LLC",
      course: "",
    },
  ],

  adminPanelAside: [
    {
      name: "Coruse Cards",
      id: 0,
      component: <AdminPanelCoruseCards />,
      icon: <BsCardText />,
    },
    {
      name: "Coruse Info",
      id: 1,
      component: <AdminPanelCourse />,
      icon: <BsJournalBookmarkFill />,
    },
    {
      name: "Trainers",
      id: 2,
      component: <AdminPanelTrainers />,
      icon: <FaUsers />,
    },
    {
      name: "Services",
      id: 3,
      component: <AdminPanelServices />,
      icon: <MdMiscellaneousServices />,
    },
    {
      name: "Portfolio",
      id: 4,
      component: <AdminPanelPortfolio />,
      icon: <MdOutlineWork />,
    },
  ],
};
