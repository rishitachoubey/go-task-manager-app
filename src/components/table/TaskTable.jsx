import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../features/taskSlice';
import styled from 'styled-components';
import TaskDrawer from '../drawer/TaskDrawer';

const displayMap = {
  id: 'ID',
  name: 'Name',
  description: 'Description',
  assignee: 'Assignee',
  status: 'Status',
  dueDate: 'Due Date',
  priority: 'Priority',
  estimatedHours: 'Estimation Hours',
  remarks: 'Remarks',
};

const TableWrapper = styled.div`
  padding: 24px;
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  min-width: 800px; /* Ensures horizontal scroll if content overflows */
  border-collapse: collapse;
  border: 1px solid #ccc;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
    min-width: 600px;
  }
`;

const TableHead = styled.thead`
  background-color: #f8f8f8;
`;

const Th = styled.th`
  padding: 12px;
  border: 1px solid #ccc;
  font-weight: 600;
  text-align: left;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Td = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    padding: 8px;
    font-size: 12px;
  }
`;

const Tr = styled.tr`
  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;

const NoData = styled.div`
  padding: 20px;
  text-align: center;
  color: #777;
`;

const TaskTable = () => {
  const dispatch = useDispatch();
  const { list, loading, error, filters, columns } = useSelector((state) => state.tasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const tableRef = useRef();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filteredList = list.filter((task) => {
    return (
      (!filters.status || task.status === filters.status) &&
      (!filters.priority || task.priority === filters.priority) &&
      (!filters.assignee || task.assignee.toLowerCase().includes(filters.assignee.toLowerCase())) &&
      (!filters.search ||
        task.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        task.description.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  const visibleRows = filteredList.slice(0, visibleCount);

  useEffect(() => {
    const interval = setInterval(() => {
      if (tableRef.current) {
        const { scrollHeight, clientHeight } = tableRef.current;
        if (scrollHeight <= clientHeight && visibleCount < filteredList.length) {
          setVisibleCount((prev) => Math.min(prev + 10, filteredList.length));
        } else {
          clearInterval(interval);
        }
      }
    }, 300);
    return () => clearInterval(interval);
  }, [filteredList.length, visibleCount]);

  const handleScroll = () => {
    if (!tableRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = tableRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      setVisibleCount((prev) => Math.min(prev + 10, filteredList.length));
    }
  };

  return (
    <TableWrapper ref={tableRef} onScroll={handleScroll} style={{ maxHeight: '500px', overflowY: 'auto' }}>
      {loading && <NoData>Loading tasks...</NoData>}
      {error && <NoData>{error}</NoData>}
      {!loading && filteredList.length === 0 && <NoData>No tasks match the filter.</NoData>}

      {!loading && filteredList.length > 0 && (
        <StyledTable>
          <TableHead>
            <tr>
              <Th>Row No.</Th>
              {columns.order
                .filter((key) => columns.visible.includes(key))
                .map((colKey) => (
                  <Th key={colKey}>{displayMap[colKey]}</Th>
                ))}
            </tr>
          </TableHead>
          <tbody>
            {visibleRows.map((task, index) => (
              <Tr key={task.id} onClick={() => setSelectedTask(task)}>
                <Td>{index + 1}</Td>
                {columns.order
                  .filter((key) => columns.visible.includes(key))
                  .map((key) => (
                    <Td key={key}>{task[key]}</Td>
                  ))}
              </Tr>
            ))}
          </tbody>
        </StyledTable>
      )}

      <TaskDrawer task={selectedTask} onClose={() => setSelectedTask(null)} />
    </TableWrapper>
  );
};

export default TaskTable;
