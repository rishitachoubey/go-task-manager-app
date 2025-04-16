import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../features/taskSlice';

const FilterContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 20px 24px;
  background: #fafafa;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  flex: 1;
  min-width: 180px;

  &:focus {
    border-color: #1a73e8;
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);
  }
`;

const Select = styled.select`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  min-width: 160px;

  &:focus {
    border-color: #1a73e8;
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);
  }
`;

const FilterBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.tasks.filters);

  const handleChange = (e) => {
    dispatch(setFilters({ [e.target.name]: e.target.value }));
  };

  return (
    <FilterContainer>
      <Select name="status" value={filters.status} onChange={handleChange}>
        <option value="">All Status</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </Select>
      <Select name="priority" value={filters.priority} onChange={handleChange}>
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </Select>
      <Input
        name="assignee"
        value={filters.assignee}
        placeholder="Search by assignee"
        onChange={handleChange}
      />
      <Input
        name="search"
        value={filters.search}
        placeholder="Search task name / description"
        onChange={handleChange}
      />
    </FilterContainer>
  );
};

export default FilterBar;
