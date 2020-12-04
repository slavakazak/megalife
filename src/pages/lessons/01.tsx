import * as React from 'react';
// import { Link } from 'gatsby';

import Page from '../../components/Page';
import Container from '../../components/Container';
import IndexLayout from '../../layouts';
import TaskList from '../../components/TaskList';
import Task01 from '../../components/lessons/01/Task01';
import Task02 from '../../components/lessons/01/Task02';
import Task04 from '../../components/lessons/01/Task04';
import Task05 from '../../components/lessons/01/Task05';
import Task06 from '../../components/lessons/01/Task06';

const PageTwo = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Занятие 1</h1>
        <TaskList>
          <Task01 />
          <Task02 />
          <Task04 />
          <Task05 />
          <Task06 />
        </TaskList>
      </Container>
    </Page>
  </IndexLayout>
);

export default PageTwo;
