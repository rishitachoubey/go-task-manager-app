import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const EstimationPieChart = () => {
  const { list, filters } = useSelector((state) => state.tasks);
  const hoursMap = {
    '0-2': 0,
    '3-5': 0,
    '6-8': 0,
    '9+': 0
  };

  list
    .filter((task) =>
      (!filters.status || task.status === filters.status) &&
      (!filters.priority || task.priority === filters.priority) &&
      (!filters.assignee || task.assignee.toLowerCase().includes(filters.assignee.toLowerCase())) &&
      (!filters.search ||
        task.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        task.description.toLowerCase().includes(filters.search.toLowerCase()))
    )
    .forEach((task) => {
      const h = task.estimatedHours || 0;
      if (h <= 2) hoursMap['0-2']++;
      else if (h <= 5) hoursMap['3-5']++;
      else if (h <= 8) hoursMap['6-8']++;
      else hoursMap['9+']++;
    });

  const data = Object.entries(hoursMap).map(([range, value]) => ({
    name: range,
    value
  }));

  return (
    <div data-testid="estimation-chart">
      <h3>Estimation Hours Distribution</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EstimationPieChart;
