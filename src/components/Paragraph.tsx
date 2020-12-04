import * as React from 'react';
import styled from '@emotion/styled';

import { dimensions } from '../styles/variables';
import { getEmSize } from '../styles/mixins';

const StyledContainer = styled.p<{ large?: boolean }>`
  font-size: ${({ large }) => getEmSize(large ? dimensions.fontSize.large : dimensions.fontSize.regular)}em;
`;

interface ParagraphProps {
  large?: boolean;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className, large }) => (
  <StyledContainer className={className} large={large}>
    {children}
  </StyledContainer>
);

export default Paragraph;
