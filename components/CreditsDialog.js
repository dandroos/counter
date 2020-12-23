import React from "react";
import { connect } from "react-redux";
import * as Linking from "expo-linking";
import {
  Dialog,
  Portal,
  Avatar,
  Paragraph,
  List,
  Text,
  Button,
} from "react-native-paper";
import { setCreditsDialog } from "../state/actions";

const CreditsDialog = ({ dispatch, isOpen }) => {
  return (
    <Portal>
      <Dialog
        visible={isOpen}
        onDismiss={() => dispatch(setCreditsDialog(false))}
      >
        <Dialog.Title style={{ textAlign: "center" }}>
          About the author
        </Dialog.Title>
        <Dialog.Content>
          <Avatar.Image
            size={200}
            style={{ alignSelf: "center", marginBottom: 20 }}
            source={require("../assets/av.png")}
          />
          <Paragraph>
            Hi! My name is Dave. I make things with code under the name Prospr
            Development. Thanks for using my lil' ol' app. You can follow me
            online here...
          </Paragraph>
          <List.Section>
            <List.Item
              title="Facebook"
              left={() => {
                return <List.Icon icon="facebook" />;
              }}
              onPress={() =>
                Linking.openURL(
                  "https://www.facebook.com/dave.andrews.10004694/"
                )
              }
            />
            <List.Item
              title="Twitter"
              left={() => {
                return <List.Icon icon="twitter" />;
              }}
              onPress={() =>
                Linking.openURL("https://www.twitter.com/prosprwebdev")
              }
            />
            <List.Item
              title="Instagram"
              left={() => {
                return <List.Icon icon="instagram" />;
              }}
              onPress={() =>
                Linking.openURL("https://www.instagram.com/prosprwebdev")
              }
            />
          </List.Section>
          <Text style={{ textAlign: "center", fontSize: 10 }}>
            &copy; 2020 Prospr Development
          </Text>
          <Text style={{ textAlign: "center", fontSize: 10 }}>
            All rights reserved
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => dispatch(setCreditsDialog(false))}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.creditsDialog,
});

export default connect(mapStateToProps)(CreditsDialog);
