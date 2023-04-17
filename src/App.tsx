import React from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import HorizontalPodScaling from './Components/HorizontalPodScaling';

function App() {
  return (
      <Container fluid style={{ paddingTop: '15px' }}>
        <HorizontalPodScaling />
      </Container>
  );
}

export default App;
