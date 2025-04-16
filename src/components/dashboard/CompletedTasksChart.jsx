import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CompletedTasksChart = () => {
  const { list, filters } = useSelector((state) => state.tasks);

  const dataMap = {};

  list
    .filter((task) =>
      task.status === 'Completed' &&
      (!filters.priority || task.priority === filters.priority) &&
      (!filters.assignee || task.assignee.toLowerCase().includes(filters.assignee.toLowerCase())) &&
      (!filters.search ||
        task.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        task.description.toLowerCase().includes(filters.search.toLowerCase()))
    )
    .forEach((task) => {
      dataMap[task.dueDate] = (dataMap[task.dueDate] || 0) + 1;
    });

  const data = Object.entries(dataMap).map(([date, count]) => ({ date, count }));

  return (
    <div data-testid="completed-chart">
      <h3>Completed Tasks per Day</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#4caf50" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompletedTasksChart;
