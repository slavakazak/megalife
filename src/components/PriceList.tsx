import * as React from 'react';
import styled from '@emotion/styled';
import { widths } from '../styles/variables';
import { getEmSize } from '../styles/mixins';

import priceList from '../assets/images/price-list.png';

const Image = styled.img`
  position: relative;
  margin: 0 auto;
  width: ${getEmSize(widths.lg - 10)}em;
`;

const Header: React.FC = () => <Image alt="price-list" src={priceList} />;

export default Header;
