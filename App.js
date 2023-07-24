import { useState, useEffect, useCallback, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import ReactComp from "./ReactComp";
import { startSmsHandling, stopSmsHandling } from "./src";

function retrieveVerificationCode(sms) {
  const codeRegExp = /\d{6}/m;
  const code = sms?.match(codeRegExp)?.[0];
  return code ?? null;
}

export default function App() {
  const [code, setCode] = useState();
  const [showData, setShowData] = useState(false);

  const startSmsListner = useCallback(() => {
    console.log("$$$ startSmsHandling");
    startSmsHandling((event) => {
      console.log("$$$ event received");

      const receivedSms = event?.sms;
      if (!receivedSms) {
        console.warn("No SMS received!");
        return;
      }

      const retrievedCode = retrieveVerificationCode(receivedSms, 6);
      if (!retrievedCode) {
        console.warn("No code retrieved!");
        return;
      }

      setCode(retrievedCode);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 600 }}>
        Testing OTP Auto Read Flow
      </Text>
      {!showData && (
        <Button title="Show OTP Input" onPress={() => setShowData(true)} />
      )}
      {showData && (
        <ReactComp
          startSmsListner={startSmsListner}
          stopSmsListner={stopSmsHandling}
          code={code}
          setCode={setCode}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    height: 300,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
