import React from 'react'

import Header from './components/header';
import Item from './Item';
import Supplier from './Supplier';
import CheckBox from './components/CheckBox';
import Submitted from './components/Submitted';

const App = () => {
  return (
    <>
      <Header/>
      <CheckBox/>
      <Item/>
      <Supplier/>
      <Submitted/>
    </>
  )
}

export default App;
