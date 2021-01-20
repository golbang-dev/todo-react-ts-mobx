import React from 'react';

import { observer } from 'mobx-react';

import ToDoItemInterface from '../Models/Models';
import ItemListStore from '../Stores/ItemListStore';
import {
  ContentWrapper,
  ItemWrapper,
  TextWrapper,
  TitleWrapper,
} from './ToDoItemStyle';

const ToDoItem = observer(
  (props: ToDoItemInterface): JSX.Element => {
    // eslint-disable-next-line object-curly-newline
    const { title, content, isChecked, id, isPinned } = props;

    const itemListStore = ItemListStore.Store;
    const onCheck = itemListStore.check;
    const onPin = itemListStore.pin;
    const onDelete = itemListStore.delete;
    return (
      <ItemWrapper>
        <TextWrapper>
          <TitleWrapper check={isChecked} pin={isPinned}>
            {title}
          </TitleWrapper>
          <ContentWrapper>{content}</ContentWrapper>
        </TextWrapper>
        <button onClick={() => onCheck(id)} type="button">
          check
        </button>
        <button onClick={() => onPin(id)} type="button">
          pin
        </button>
        <button onClick={() => onDelete(id)} type="button">
          delete
        </button>
      </ItemWrapper>
    );
  }
);

export default ToDoItem;
