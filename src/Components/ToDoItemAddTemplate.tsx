import React, { useCallback, useState } from 'react';

import { observer } from 'mobx-react';

import ItemListStore from '../Stores/ItemListStore';
import {
  InputButton,
  InputTemplate,
  TextInput,
  TextInputWrapper,
} from './ToDoItemAddTemplateStyle';

const ToDoItemAddTemplate = observer(
  (): JSX.Element => {
    const itemListStore = ItemListStore.Store;

    const [title, setTitle] = useState<string>('');

    const titleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
      },
      []
    );

    const [content, setContent] = useState<string>('');

    const contentChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
      },
      []
    );

    const insert = (newTitle: string, newContent: string): void => {
      itemListStore.insert(newTitle, newContent);
    };

    return (
      <InputTemplate>
        <TextInputWrapper>
          <TextInput
            onChange={titleChange}
            placeholder="Title"
            type="text"
            value={title}
          />
          <TextInput
            onChange={contentChange}
            placeholder="Content"
            type="text"
            value={content}
          />
        </TextInputWrapper>
        <InputButton onClick={() => insert(title, content)} />
      </InputTemplate>
    );
  }
);

export default ToDoItemAddTemplate;
