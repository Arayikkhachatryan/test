import React, { useState } from "react";
import Layout from "../../App";
import Cards from "./Cards";
import CoursesModalForm from "./CoursesModalForm";

const CoursesPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <Cards open={open} setOpen={setOpen} />
        <CoursesModalForm open={open} onClose={() => setOpen(false)} />
      </Layout>
    </>
  );
};

export default CoursesPage;
