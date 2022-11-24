import React, { useState } from "react";
import Cards from "./Cards";
import CoursesCards from "./CoursesCards";
import CoursesModalForm from "./CoursesModalForm";

const CoursesPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Cards open={open} setOpen={setOpen} />
      <CoursesModalForm open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default CoursesPage;
