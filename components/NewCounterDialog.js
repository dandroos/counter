import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Portal, Dialog, TextInput, Button } from "react-native-paper";
import { setNewCounterDialog, setCounters } from "../state/actions";
import "react-native-get-random-values";
import { v4 as uniqId } from "uuid";

const NewCounterDialog = ({ dispatch, isOpen, counters }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e);
  };

  const handlePress = () => {
    if (name.length !== 0) {
      const newEntry = {
        id: uniqId(),
        name,
        count: 0,
        dateModified: new Date(),
      };
      dispatch(setCounters([...counters, newEntry]));
      handleClose();
    }
  };

  const handleClose = () => {
    dispatch(setNewCounterDialog(false));
  };

  useEffect(() => {
    if (!isOpen) {
      setName("");
    }
  }, [isOpen]);

  return (
    <Portal>
      <Dialog visible={isOpen} onDismiss={handleClose}>
        <Dialog.Title>Create a new counter</Dialog.Title>
        <Dialog.Content>
          <TextInput
            onChangeText={handleChange}
            maxLength={20}
            label="Name"
            value={name}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleClose}>Cancel</Button>
          <Button disabled={name.length === 0} onPress={handlePress}>
            OK
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.newCounterDialog,
  counters: state.counters,
});

export default connect(mapStateToProps)(NewCounterDialog);
