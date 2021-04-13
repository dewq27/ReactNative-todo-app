import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import CheckIcon from '../Icons/Check';

interface Props {
  checked: boolean;
  onChange(event: GestureResponderEvent): void;
}

const Checkbox: React.FC<Props> = ({checked, onChange}) => {
  return (
    <TouchableOpacity style={styles.touchableContainer} onPress={onChange} testID="checkbox">
      <View
        style={[
          styles.container,
          {
            backgroundColor: checked ? 'rgb(15, 50 , 100)' : 'transparent',
          },
        ]}>
        {checked && <CheckIcon stroke={'#fff'} width={12} height={12} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    padding: 20,
    borderRadius: 10,
  },
  container: {
    borderRadius: 20,
    width: 20,
    height: 20,
    borderColor: 'rgb(15, 50 , 100)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
});

export default Checkbox;
