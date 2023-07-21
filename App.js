import { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import ReactComp from "./ReactComp";
import { startSmsHandling, useSmsUserConsent } from "./src";

function retrieveVerificationCode(sms) {
  const codeRegExp = /\d{6}/m;
  const code = sms?.match(codeRegExp)?.[0];
  return code ?? null;
}

export default function App() {
  const [code, setCode] = useState();
  const retrievedCode = useSmsUserConsent();
  const [data, setShowData] = useState(false);

  useEffect(() => {
    if (retrievedCode) setCode(retrievedCode);
  }, [retrievedCode]);

  const startSmsCallback = useCallback(() => {
    return startSmsHandling((event) => {
      const retrievedCode = retrieveVerificationCode(event?.sms);
      setCode(retrievedCode);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Test" onPress={() => setShowData(true)} />
      {data && (
        <ReactComp
          startSmsCallback={startSmsCallback}
          code={code}
          setCode={setCode}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
