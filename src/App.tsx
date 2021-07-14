import React from 'react';

import { Wrapper, Container } from './App.styles'
import Chat from './components/Chat/chat.component'
import backgroundImg from './assets/background.png'

function App() {
  return (
    <Wrapper backgroundImg={backgroundImg}>
      <Container>
        <Chat />
      </Container>
    </Wrapper>
  );
}

export default App;
