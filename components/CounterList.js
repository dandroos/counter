import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setCounters, setNewCounterDialog } from "../state/actions";
import { View, AsyncStorage } from "react-native";
import Counter from "./Counter";
import "react-native-get-random-values";
import { v4 as uniqId } from "uuid";
import { Text, Button } from "react-native-paper";

const CounterList = ({ dispatch, counters }) => {
  useEffect(() => {
    AsyncStorage.getItem("counters", (err, res) => {
      if (res) {
        dispatch(setCounters(JSON.parse(res)));
      } else {
        dispatch(
          setCounters([
            {
              id: uniqId(),
              name: "Counter 1",
              count: 0,
              dateModified: new Date(),
            },
          ])
        );
      }
    });
  }, []);

  useEffect(() => {
    if (counters) {
      AsyncStorage.setItem("counters", JSON.stringify(counters));
    }
  }, [counters]);

  return (
    <View style={{ marginHorizontal: 10, marginTop: 10 }}>
      {counters && counters.length !== 0 ? (
        counters.map((i) => (
          <Counter
            key={i.id}
            counterID={i.id}
            name={i.name}
            count={i.count}
            dateModified={i.dateModified}
          />
        ))
      ) : (
        <View>
          <Text style={{ marginBottom: 4, textAlign: "center" }}>
            You do not currently have any counters.
          </Text>
          <Button
            mode="outlined"
            onPress={() => dispatch(setNewCounterDialog(true))}
          >
            New Counter
          </Button>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  counters: state.counters,
});

export default connect(mapStateToProps)(CounterList);
