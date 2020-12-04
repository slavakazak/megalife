import * as React from 'react';
import { Link } from 'gatsby';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';
import PriceList from '../components/PriceList';

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Доступные занятия</h1>
        <ul>
          <Link to="/lessons/01">Занятие 1</Link>
        </ul>
        <PriceList />
        <img url="../assets/images/list.jpg" alt="list">
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
