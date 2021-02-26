import React, { useState, useEffect, useContext } from "react";
import StudentContext from "../Base/App";

export default function ClassStudents() {
  const value = useContext(StudentContext);
  return (
    <>
      <h3>{value}</h3>
    </>
  );
}
