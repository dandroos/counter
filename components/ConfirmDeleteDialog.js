import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Portal, Dialog, Paragraph, Button } from "react-native-paper";
import { setCounters, setConfirmDeleteDialog } from "../state/actions";

const ConfirmDeleteDialog = ({ dispatch, isOpen, counters, idToEdit }) => {
  const [name, setName] = useState("");
  const [idToDelete, setIdToDelete] = useState("");

  useEffect(() => {
    if (isOpen) {
      const counterToDelete = counters.reduce((prev, curr) => {
        if (curr.id === idToEdit) {
          return curr;
        }
        return prev;
      });
      setName(counterToDelete.name);
      setIdToDelete(counterToDelete.id);
    }
  }, [isOpen]);

  const handleClose = () => {
    dispatch(setConfirmDeleteDialog(false));
  };

  return (
    <Portal>
      <Dialog visible={isOpen} onDismiss={handleClose}>
        <Dialog.Title>Confirm delete</Dialog.Title>
        <Dialog.Content>
          <Paragraph>Are you sure you want to delete {name}?</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleClose}>Cancel</Button>
          <Button
            onPress={() => {
              dispatch(
                setCounters(
                  counters.filter((i) => {
                    return i.id !== idToDelete;
                  })
                )
              );
              handleClose();
            }}
          >
            OK
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.confirmDeleteDialog,
  counters: state.counters,
  idToEdit: state.idToEdit,
});

export default connect(mapStateToProps)(ConfirmDeleteDialog);
