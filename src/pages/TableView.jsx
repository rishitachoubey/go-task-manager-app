import React, { useState } from 'react';
import FilterBar from '../components/table/FilterBar';
import TaskTable from '../components/table/TaskTable';
import NavBar from '../components/common/NavBar';
import EditColumnsModal from '../components/common/EditColumnsModal'; // ✅ don't forget this import
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 0 24px;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 0;
`;

const TableView = () => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <>
      <NavBar />
      <PageWrapper>
        <FilterBar />
        <Toolbar>
          <button onClick={() => setShowEdit(true)}>Edit Columns</button>
        </Toolbar>
        {showEdit && <EditColumnsModal onClose={() => setShowEdit(false)} />}
        <TaskTable />
      </PageWrapper>
    </>
  );
};

export default TableView;
