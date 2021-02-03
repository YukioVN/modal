import React, { useState } from 'react';
import Modal from './components/modal';

function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const handleButtonClick = () =>{
    setModalVisible(true);
  };

  return (
    <>
      <button onClick={handleButtonClick}>Open Modal</button>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <h1>Testing 1, 2, 3</h1>
      </Modal>
    </>
  );
}

export default App;