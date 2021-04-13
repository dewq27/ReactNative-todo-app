import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PlusIcon from '../../components/Icons/Plus';
import ShareIcon from '../../components/Icons/Share';
import AddModal from '../../components/Modals/AddModal';
import Todo from '../../components/Todo';
import { IState } from '../../models/InterfaceStore';
import { addTodo } from '../../store/todo/todoActions';

const ASCII_SYMBOLS = {
  finished: '☑',
  active: '☐',
};

const ListView = () => {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const todosList = useSelector((state: IState) => state.todos);
  const dispatch = useDispatch();

  const _openAddModal = () => {
    setAddModalVisible(true);
  };

  const _closeAddModal = () => {
    setAddModalVisible(false);
  };
  const _addTodo = (text: string) => {
    dispatch(addTodo(text));
    _closeAddModal();
  };
  const _shareList = () => {
    Share.share({
      title: 'Todo list',
      message: sortedTodos
        .map(todo => {
          return `${ASCII_SYMBOLS[todo.status]} ${todo.text}\n`;
        })
        .join(''),
    });
  };

  const sortedTodos = useMemo(
    () =>
      todosList.sort((a, b) =>
        a.status === b.status
          ? a.created > b.created
            ? -1
            : 1
          : a.status < b.status
          ? -1
          : 1,
      ),
    [todosList],
  );
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        keyExtractor={item => item.uuid}
        data={sortedTodos}
        renderItem={({item}) => <Todo todo={item} />}
        ListEmptyComponent={
          <View style={styles.emptyList}>
            <Text>Your todo list is empty</Text>
          </View>
        }
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={_shareList} testID="ShareButton">
          <View style={styles.button}>
            <ShareIcon color="#fff" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={_openAddModal} testID="AddButton">
          <View style={styles.button}>
            <PlusIcon color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
      <AddModal
        visible={addModalVisible}
        handleConfirm={_addTodo}
        handleClose={_closeAddModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 20,
    right: 16,
    flexDirection: 'row',
  },
  listContainer: {
    padding: 20,
    paddingBottom: 82,
  },
  emptyList: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  button: {
    borderRadius: 25,
    marginHorizontal: 4,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(15, 50 , 100)',
  },
});

export default ListView;
