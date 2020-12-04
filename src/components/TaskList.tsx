import * as React from 'react';
import styled from '@emotion/styled';

const TaskOl = styled.ol`
  padding-left: 20px;
`;

interface ContainerProps {
  className?: string;
}

const TaskList: React.FC<ContainerProps> = ({ children, className }) => <TaskOl className={className}>{children}</TaskOl>;

export default TaskList;
