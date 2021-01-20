import React from 'react';

import Header from './Components/Header';
import ToDoItemAddTemplate from './Components/ToDoItemAddTemplate';
import ToDoItemList from './Components/ToDoItemList';
import GlobalStyle from './Utils/GlobalStyle';

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Header />
    <ToDoItemAddTemplate />
    <ToDoItemList />
  </>
);

export default App;
