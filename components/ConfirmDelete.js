import React from "react";
import { connect } from "react-redux";
import { Portal, Dialog, Paragraph } from "react-native-paper";

const ConfirmDeleteDialog = () => {
  return (
    <Portal>
      <Dialog visible={true}>
        <Dialog.Title>Confirm delete</Dialog.Title>
        <Dialog.Content>Are you sure you want to delete {} </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default ConfirmDeleteDialog;
