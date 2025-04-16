// Simulated Task API response
export const fetchTasksAPI = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'Fix login bug',
          status: 'In Progress',
          priority: 'High',
          assignee: 'Alice',
          dueDate: '2025-04-18',
          description: 'Fix login issue on Android',
          comments: ['Investigating issue', 'Patch submitted'],
          estimatedHours: 5
        },
        {
          id: 2,
          name: 'Create dashboard UI',
          status: 'Completed',
          priority: 'Medium',
          assignee: 'Bob',
          dueDate: '2025-04-14',
          description: 'Use Recharts for analytics',
          comments: ['Approved by design team'],
          estimatedHours: 4
        },
        {
          id: 3,
          name: 'Update user profile form',
          status: 'Completed',
          priority: 'Low',
          assignee: 'Charlie',
          dueDate: '2025-04-10',
          description: 'Add new input fields and validation',
          comments: ['Deployed to staging'],
          estimatedHours: 2
        },
        {
          id: 4,
          name: 'Refactor auth service',
          status: 'In Progress',
          priority: 'High',
          assignee: 'Diana',
          dueDate: '2025-04-20',
          description: 'Modularize and improve readability',
          comments: ['Initial refactor done'],
          estimatedHours: 6
        },
        {
          id: 5,
          name: 'QA Test Payment Flow',
          status: 'In Progress',
          priority: 'Medium',
          assignee: 'Ella',
          dueDate: '2025-04-19',
          description: 'Ensure all gateways work properly',
          comments: ['UPI failed on mobile'],
          estimatedHours: 3
        },
        {
          id: 6,
          name: 'Fix navbar collapsing',
          status: 'Completed',
          priority: 'Low',
          assignee: 'Frank',
          dueDate: '2025-04-12',
          description: 'Navbar disappears on smaller screens',
          comments: ['Patch verified'],
          estimatedHours: 1
        },
        {
          id: 7,
          name: 'Write unit tests for filters',
          status: 'In Progress',
          priority: 'Medium',
          assignee: 'Gina',
          dueDate: '2025-04-21',
          description: 'Cover all reducers and UI logic',
          comments: [],
          estimatedHours: 4
        },
        {
          id: 8,
          name: 'Design new logo',
          status: 'Completed',
          priority: 'Low',
          assignee: 'Harry',
          dueDate: '2025-04-08',
          description: 'Minimal, modern design needed',
          comments: ['Approved by marketing'],
          estimatedHours: 2
        },
        {
          id: 9,
          name: 'Implement dark mode',
          status: 'In Progress',
          priority: 'High',
          assignee: 'Isla',
          dueDate: '2025-04-22',
          description: 'Toggle theme with user setting',
          comments: ['CSS refactor needed'],
          estimatedHours: 6
        },
        {
          id: 10,
          name: 'Add tooltips to buttons',
          status: 'Completed',
          priority: 'Low',
          assignee: 'John',
          dueDate: '2025-04-15',
          description: 'Improves usability for new users',
          comments: [],
          estimatedHours: 1
        },
        ...Array.from({ length: 20 }, (_, i) => ({
          id: 11 + i,
          name: `Task ${11 + i}`,
          status: i % 3 === 0 ? 'Completed' : 'In Progress',
          priority: ['High', 'Medium', 'Low'][i % 3],
          assignee: ['Alice', 'Bob', 'Charlie', 'Diana', 'Ella'][i % 5],
          dueDate: `2025-04-${(10 + (i % 20)).toString().padStart(2, '0')}`,
          description: `Auto-generated task description ${11 + i}`,
          comments: [],
          estimatedHours: Math.floor(Math.random() * 6 + 1)
        }))
      ]);
    }, 500)
  );
