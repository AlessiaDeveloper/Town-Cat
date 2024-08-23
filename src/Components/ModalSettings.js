import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";
import TextLucky from "./TextLucky";
import TextTitleEdifici from "./TextTitleEdifici";

export default function ModalSettings() {
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
            {/* <TextLucky style={styles.modalText}>Opzioni di gioco</TextLucky> */}
            <TextTitleEdifici>OPZIONI</TextTitleEdifici>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <TextLucky style={styles.textStyle}>Cambia lingua</TextLucky>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <TextLucky style={styles.textStyle}>MUSICA</TextLucky>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              {/* <TextLucky style={styles.textStyle}>Musica</TextLucky> */}
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>chiudi</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Image
          source={require("./../../assets/opzione.png")}
          style={styles.icona}
        />
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
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
  icona: { width: 60, height: 60 },
  buttonOpen: {},
  buttonClose: {
    backgroundColor: "#5D2E8C",
    borderColor: "yellow",
    borderWidth: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
