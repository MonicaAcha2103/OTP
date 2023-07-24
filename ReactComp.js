import React, { forwardRef, useEffect } from "react";
import { TextInput, View, Text, Button } from "react-native";

const ReactComp = forwardRef((props, ref) => {
  const { startSmsListner, code, setCode, stopSmsListner } = props;

  useEffect(() => {
    startSmsListner();
  }, []);

  return (
    <View
      style={{
        justifyContent: "space-around",
        flex: 1,
      }}
    >
      <Text>SMS Input</Text>
      <TextInput
        value={code}
        onChangeText={setCode}
        style={{ borderColor: "black", borderWidth: 2, width: 200 }}
      />

      <Button title="Stop SMS Listner" onPress={() => stopSmsListner()} />
    </View>
  );
});
export default ReactComp;
