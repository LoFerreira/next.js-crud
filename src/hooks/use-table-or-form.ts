import React from "react";

const useTableOrForm = () => {
  const [visible, setVisible] = React.useState<"table" | "form">("table");

  const showTable = () => setVisible("table");
  const showForm = () => setVisible("form");

  return {
    formVisible: visible == "form",
    tableVisible: visible == "table",
    showTable,
    showForm,
  };
};

export default useTableOrForm;
