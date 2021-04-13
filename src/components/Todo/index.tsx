import React, {StatelessComponent, useMemo} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ITodo} from '../../models';
import {removeTodo, updateStatusTodo} from '../../store/todo/todoActions';
import Checkbox from '../Checkbox';
import Trash from '../Icons/Trash';

interface Props {
  todo: ITodo;
}

const Todo: StatelessComponent<Props> = ({todo}) => {
  const dispatch = useDispatch();
  const isFinished = useMemo(() => todo.status === 'finished', [todo.status]);

  const _removeTodo = () => {
    Alert.alert(
      'Remove item',
      'Are you sure you want to delete the item?',
      [
        {
          text: 'Remove',
          onPress: () => {
            dispatch(removeTodo(todo.uuid));
          },
          style: 'destructive',
        },
        {
          text: 'Cancel',
          onPress: () => {},
        },
      ],
      {
        cancelable: true,
      },
    );
  };
  const _toggleStatus = () => {
    if (!isFinished) {
      dispatch(updateStatusTodo(todo.uuid, 'finished'));
    } else {
      dispatch(updateStatusTodo(todo.uuid, 'active'));
    }
  };
  return (
    <View
      style={[
        styles.container,
        {
          opacity: isFinished ? 0.6 : 1,
        },
      ]}>
      <Checkbox
        checked={todo.status === 'finished'}
        onChange={() => _toggleStatus()}
      />
      <Text
        style={[
          styles.text,
          {
            textDecorationLine: isFinished ? 'line-through' : 'none',
          },
        ]}>
        {todo.text}
      </Text>
      <TouchableOpacity style={styles.trashContainer} onPress={_removeTodo}>
        <Trash color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(5, 15 , 65)',
    borderRadius: 10,
    marginVertical: 8,
  },
  text: {
    flex: 1,
    color: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  trashContainer: {
    padding: 20,
  },
});

export default Todo;
