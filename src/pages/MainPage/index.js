import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Form, Logo, Title, Input, Button } from './styles';
import githubLogo from '../../assets/images/github-logo.svg';

function Main() {
  const [user, setUser] = useState();

  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="Usuário"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <Button to={`/${user}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}

export default Main;
