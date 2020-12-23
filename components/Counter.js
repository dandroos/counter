import React, { useState } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { withTheme, Text, IconButton, Menu, Divider } from "react-native-paper";
import moment from "moment";
import {
  setCounters,
  setIdToEdit,
  setRenameDialog,
  setConfirmDeleteDialog,
  setAdjustCountDialog,
} from "../state/actions";

const Counter = ({
  dispatch,
  counters,
  name,
  count,
  dateModified,
  counterID,
  theme,
}) => {
  const { colors } = theme;
  const [visible, setVisible] = useState(false);
  const handlePress = (buttonId, counterId) => {
    switch (buttonId) {
      case "inc":
        dispatch(
          setCounters(
            counters.map((i) => {
              if (i.id === counterId) {
                return {
                  ...i,
                  count: i.count + 1,
                  dateModified: new Date(),
                };
              } else {
                return i;
              }
            })
          )
        );
        break;
      case "dec":
        dispatch(
          setCounters(
            counters.map((i) => {
              if (i.id === counterId) {
                return {
                  ...i,
                  count: i.count - 1,
                  dateModified: new Date(),
                };
              } else {
                return i;
              }
            })
          )
        );
        break;
      case "settings":
        setVisible(true);
        break;
      default:
        return;
    }
  };

  const CounterIcon = ({ icon, id }) => {
    return (
      <IconButton
        color={colors.primary}
        icon={icon}
        onPress={() => handlePress(id, counterID)}
        id={id}
      />
    );
  };
  return (
    <View
      style={{
        marginVertical: 2,
        backgroundColor: "#fafafa",
        borderWidth: 0.5,
        borderColor: colors.accent,
        padding: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          onLongPress={() => {
            dispatch(setIdToEdit(counterID));
            dispatch(setRenameDialog(true));
          }}
          style={{ fontSize: 20 }}
        >
          {name}
        </Text>
        <View style={{ flex: 1 }} />
        <Text
          onLongPress={() => {
            dispatch(setIdToEdit(counterID));
            dispatch(setAdjustCountDialog(true));
          }}
          style={{ fontSize: 20 }}
        >
          {JSON.parse(count)}
        </Text>

        <CounterIcon icon="chevron-down" id="dec" />
        <CounterIcon icon="chevron-up" id="inc" />
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={<CounterIcon icon="dots-vertical" id="settings" />}
        >
          <Menu.Item
            title="Rename"
            icon="pencil"
            onPress={() => {
              setVisible(false);
              dispatch(setIdToEdit(counterID));
              dispatch(setRenameDialog(true));
            }}
          />
          <Menu.Item
            title="Adjust count"
            icon="counter"
            onPress={() => {
              setVisible(false);
              dispatch(setIdToEdit(counterID));
              dispatch(setAdjustCountDialog(true));
            }}
          />
          <Divider />
          <Menu.Item
            title="Delete"
            icon="delete"
            onPress={() => {
              setVisible(false);
              dispatch(setIdToEdit(counterID));
              dispatch(setConfirmDeleteDialog(true));
            }}
          />
        </Menu>
      </View>
      <View>
        <Text style={{ color: colors.disabled }}>
          Last updated at {moment(dateModified).format("H:mm:ss")} on
          {` ` + moment(dateModified).format("DD/MM/YY")}
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  counters: state.counters,
});

export default connect(mapStateToProps)(withTheme(Counter));
