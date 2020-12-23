import React from "react";
import { connect } from "react-redux";
import { setNewCounterDialog, setCreditsDialog } from "../state/actions";
import { Appbar } from "react-native-paper";

const Nav = ({ dispatch }) => {
  return (
    <Appbar.Header>
      <Appbar.Content title="SIMPLE COUNTER" />
      <Appbar.Action
        icon="information"
        onPress={() => dispatch(setCreditsDialog(true))}
      />
      <Appbar.Action
        icon="plus"
        onPress={() => dispatch(setNewCounterDialog(true))}
      />
    </Appbar.Header>
  );
};

export default connect()(Nav);
