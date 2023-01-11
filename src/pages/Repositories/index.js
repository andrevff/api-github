import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Filter from './Filter';
import List from './List';
import Profile from './Profile';
import { Loading, Container, MainSection, Sidebar } from './styles';
import { getLangsFrom, getUser, getRepos } from '../../services/api';

function Repositories() {
  const { login } = useParams();

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);
      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
      setLanguages(getLangsFrom(repositoriesResponse.data));

      setLoading(false);
    };

    loadData();
  }, []);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <MainSection>
        <List repositories={repositories} currentLanguage={currentLanguage} />
      </MainSection>
    </Container>
  );
}

export default Repositories;
