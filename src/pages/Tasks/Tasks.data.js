export default {
  tabs: [
    {
      id: 'bar',
      path: '/bar',
      name: 'Bar tasks',
    },
    {
      id: 'cleaning',
      path: '/cleaning',
      name: 'Cleaning tasks',
    },
  ],
  taskActions: [
    { id: 'edit', name: 'Edit task', icon: 'add-button' },
    { id: 'add', name: 'Add task', icon: 'edit' },
    { id: 'remove', name: 'Remove task', icon: 'remove' },
  ],
  taskPritoryOptions: [
    {
      value: 'high',
      name: 'High',
      color: 'rgba(255, 21, 0, 1)',
      bgColor: 'rgba(255, 21, 0, .2)',
    },
    {
      value: 'optional',
      name: 'Optional',
      color: 'rgba(72,61,139, 1)',
      bgColor: 'rgba(65,105,225, .2)',
    },
    {
      value: 'low',
      name: 'Low',
      color: 'rgba(255,165,0, 1)',
      bgColor: 'rgba(255,215,0, .2)',
    },
  ],
  barTasksHeaders: [
    { id: 1, value: 'selected', name: 'Select' },
    { id: 2, value: 'title', name: 'Title' },
    { id: 3, value: 'description', name: 'Description' },
    { id: 4, value: 'assignedTo', name: 'Assigned to' },
    { id: 5, value: 'dateString', name: 'Date added' },
    { id: 6, value: 'priority', name: 'Priority' },
  ],
  maxTaskDescriptionLength: 40,
};
