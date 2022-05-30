import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setName, setToken, UserType } from "./reducers/user";

const App = () => {
  const dispatch = useDispatch();
  const user: UserType = useSelector(({ user }: { user: UserType }) => user);

  const handleTokenPress = () => {
    dispatch(setToken("changed token"));
  }
  const handleNamePress = () => {
    dispatch(setName("changed name"));
  }
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>
        {user.token}
      </Text>
      <Text style={styles.text}>
        {user.name}
      </Text>
      <Button
        title="Set Token"
        onPress={handleTokenPress}
      ></Button>
      <Button
        title="Set Name"
        onPress={handleNamePress}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 32,
  },
  btn: {
    padding: 10
  }
});

export default App;
