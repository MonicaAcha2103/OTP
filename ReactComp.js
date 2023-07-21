import React, { forwardRef, useEffect } from "react";
import { TextInput, View, Text } from "react-native";

const ReactComp = forwardRef((props, ref) => {
  const { startSmsCallback, code, setCode } = props;
  console.log("ReactComp", props);

  useEffect(() => {
    const stopSmsListener = startSmsCallback();
    return stopSmsListener;
  }, []);

  return (
    <View>
      <Text>ReactComp</Text>
      <TextInput value={code} onChangeText={setCode} />
    </View>
  );
});
export default ReactComp;
