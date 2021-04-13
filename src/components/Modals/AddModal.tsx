import React, { useState } from 'react';
import {
  GestureResponderEvent,
  Modal as NModal,

  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

interface Props {
  visible: boolean;
  handleConfirm(text: String): void;
  handleClose(event: GestureResponderEvent): void;
}

const AddModal: React.FC<Props> = ({visible, handleConfirm, handleClose}) => {
  const [inputText, setInputText] = useState('');
  const _handleConfirm = () => {
    handleConfirm(inputText);
    setInputText('');
  };
  return (
    <NModal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>New item</Text>
          <View style={styles.inputContainer}>
            <TextInput
              autoFocus={true}
              style={styles.input}
              multiline={true}
              value={inputText}
              onChangeText={setInputText}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={_handleConfirm}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonCancel]}
              onPress={handleClose}>
              <Text style={styles.cancelTextStyle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </NModal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 15,
    paddingTop: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: -4,
  },
  button: {
    borderRadius: 4,
    padding: 10,
    flex: 1,
    marginHorizontal: 4,
  },
  buttonClose: {
    borderWidth: 1,
    backgroundColor: 'rgb(15, 50 , 100)',
  },
  buttonCancel: {
    color: 'red',
    borderWidth: 1,
    borderColor: 'rgb(15, 50 , 100)',
  },
  cancelTextStyle: {
    color: 'rgb(15, 50 , 100)',
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderColor: '#000',
    borderRadius: 4,
    flex: 1,
    color: "#000"
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AddModal;
