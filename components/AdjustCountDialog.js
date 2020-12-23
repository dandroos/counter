import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Portal, Dialog, TextInput, Button } from "react-native-paper";
import { setAdjustCountDialog, setCounters } from "../state/actions";

const AdjustCountDialog = ({ dispatch, isOpen, counters, idToEdit }) => {
  const [newCount, setNewCount] = useState();

  useEffect(() => {
    if (isOpen) {
      const counterToEdit = counters.reduce((prev, curr) => {
        if (curr.id === idToEdit) {
          return curr;
        }
        return prev;
      });
      setNewCount(counterToEdit.count.toString());
    }
  }, [isOpen]);

  const handleClose = () => {
    dispatch(setAdjustCountDialog(false));
  };

  const handleChange = (text) => {
    if (/^\d*$/.test(text)) {
      if (text.length > 0) {
        setNewCount(text);
      } else {
        setNewCount("");
      }
    }
  };

  return (
    <Portal>
      <Dialog visible={isOpen} onDismiss={handleClose}>
        <Dialog.Title>Adjust count</Dialog.Title>
        <Dialog.Content>
          <TextInput
            keyboardType="numeric"
            onChangeText={handleChange}
            label="Count"
            value={typeof newCount === "string" ? newCount.toString() : ""}
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
                        count: JSON.parse(newCount),
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
  isOpen: state.adjustCountDialog,
  counters: state.counters,
  idToEdit: state.idToEdit,
});

export default connect(mapStateToProps)(AdjustCountDialog);
