import React from "react";
import NewCounterDialog from "./NewCounterDialog";
import RenameDialog from "./RenameDialog";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import AdjustCountDialog from "./AdjustCountDialog";
import CreditsDialog from "./CreditsDialog";

const Dialogs = () => {
  return (
    <>
      <ConfirmDeleteDialog />
      <CreditsDialog />
      <AdjustCountDialog />
      <NewCounterDialog />
      <RenameDialog />
    </>
  );
};

export default Dialogs;
