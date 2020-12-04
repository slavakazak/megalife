import * as React from 'react';
import { Link } from 'gatsby';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

const NotFoundPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>404: Страница не найдена.</h1>
        <p>
          Тут ничего нет :). <Link to="/">Назад.</Link>
        </p>
      </Container>
    </Page>
  </IndexLayout>
);

export default NotFoundPage;
