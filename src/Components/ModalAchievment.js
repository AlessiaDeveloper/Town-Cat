import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import TextLucky from "./TextLucky";

export default function ModalAchievment() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        style={styles.centeredView}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <TextLucky style={styles.textStyle}>
                Compra il primo cat bistrot
              </TextLucky>
              <TextLucky style={styles.textStyle}>8 croccantini</TextLucky>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              {/* <TextLucky style={styles.textStyle}>
                Compra il primo cat bistrot
              </TextLucky>
              <TextLucky style={styles.textStyle}>8 croccantini</TextLucky> */}
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              {/* <TextLucky style={styles.textStyle}>
                Compra il primo cat bistrot
              </TextLucky> */}
              {/* <TextLucky style={styles.textStyle}>8 croccantini</TextLucky> */}
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              {/* <TextLucky style={styles.textStyle}>
                Compra il primo cat bistrot
              </TextLucky> */}
              {/* <TextLucky style={styles.textStyle}>8 croccantini</TextLucky> */}
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="list" size={30} color="#CCFF66" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    marginTop: 10,
    padding: 10,
  },
  buttonOpen: {},
  buttonClose: {
    backgroundColor: "#CCFF66",
    borderColor: "#FF6666",
    borderWidth: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
  },
});
