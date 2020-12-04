import * as React from 'react';
import styled from '@emotion/styled';
import { widths } from '../styles/variables';
import { getEmSize } from '../styles/mixins';

import List from '../assets/images/list.jpg';


const Image = styled.img`
  position: relative;
  margin: 10px auto;
  width: ${getEmSize(widths.lg - 10)}em;
`;

const Header: React.FC = () => <Image alt="price-list" src={List} />;

export default Header;
