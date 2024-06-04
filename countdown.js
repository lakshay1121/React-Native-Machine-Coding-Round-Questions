import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let intervalId;
    if (start) {
      intervalId = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [start]);

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(false);
  };

  const handleReset = () => {
    setStart(false);
    setCounter(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <Text style={styles.counterText}>{counter}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleStart}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleStop}>
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleReset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },

  button: {
    backgroundColor: "black",
    margin: 10,
    width: 100,
    height: 40,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },

  childContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 20,
  },
});
