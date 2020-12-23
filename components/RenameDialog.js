import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Portal, Dialog, TextInput, Button } from "react-native-paper";
import { setIdToEdit, setRenameDialog, setCounters } from "../state/actions";

const RenameDialog = ({ dispatch, isOpen, counters, idToEdit }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (isOpen) {
      const counterToEdit = counters.reduce((prev, curr) => {
        if (curr.id === idToEdit) {
          return curr;
        } else {
          return prev;
        }
      });
      setName(counterToEdit.name);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setName(e);
  };

  const handleClose = () => {
    dispatch(setRenameDialog(false));
    dispatch(setIdToEdit(null));
  };

  return (
    <Portal>
      <Dialog visible={isOpen} onDismiss={handleClose}>
        <Dialog.Title>Rename</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label="Name"
            maxLength={20}
            value={name}
            onChangeText={handleChange}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleClose}>Cancel</Button>
          <Button
            onPress={() => {
              dispatch(
                setCounters(
                  counters.map((i) => {
                    if (i.id === idToEdit) {
                      return {
                        ...i,
                        name,
                        dateModified: new Date(),
                      };
                    } else {
                      return i;
                    }
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
  isOpen: state.renameDialog,
  counters: state.counters,
  idToEdit: state.idToEdit,
});

export default connect(mapStateToProps)(RenameDialog);
