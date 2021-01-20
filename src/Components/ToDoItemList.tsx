import React from 'react';

import { observer } from 'mobx-react';

import ItemListStore from '../Stores/ItemListStore';
import ToDoItem from './ToDoItem';
import ListWrapper from './ToDoItemListStyle';

const ToDoItemList = observer(
  (): JSX.Element => {
    const itemListStore = ItemListStore.Store;
    const { itemList } = itemListStore;

    const items = itemList.map((item) => <ToDoItem {...item} />);

    return <ListWrapper>{items}</ListWrapper>;
  }
);

export default ToDoItemList;
