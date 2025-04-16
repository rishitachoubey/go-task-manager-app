import React from 'react';
import CompletedTasksChart from '../components/dashboard/CompletedTasksChart';
import DueTasksChart from '../components/dashboard/DueTasksChart';
import EstimationPieChart from '../components/dashboard/EstimationPieChart';
import FilterBar from '../components/table/FilterBar';
import NavBar from '../components/common/NavBar';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const Dashboard = () => {
  return (
    <Container>
      <NavBar />
      <FilterBar />
      <h2 style={{ marginTop: '20px' }}>📊 Dashboard Overview</h2>
      <ChartGrid>
        <CompletedTasksChart />
        <DueTasksChart />
        <EstimationPieChart />
      </ChartGrid>
    </Container>
  );
};

export default Dashboard;
