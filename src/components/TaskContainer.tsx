import * as React from 'react';
import styled from '@emotion/styled';

const TaskOl = styled.li`
  padding: 10px 10px 10px 0;
  margin: 10px 0px 30px;
`;

interface ContainerProps {
  className?: string;
}

const TaskContainer: React.FC<ContainerProps> = ({ children, className }) => <TaskOl className={className}>{children}</TaskOl>;

export default TaskContainer;
