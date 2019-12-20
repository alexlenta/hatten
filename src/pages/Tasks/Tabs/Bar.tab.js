import React from 'react';

import './Bar.tab.scss';
import tasksData from '../Tasks.data';
import { TaskItem } from '../../../components/TasksPage';
import { Emoji } from '../../../components';
import { stringWithElipsis } from '../../../utils/functions';

export const BarTab = ({ tasks = [], onSelect = null }) => {
  const parsedTasks = tasks.map(task => ({
    ...task,
    description: stringWithElipsis(
      task.description,
      tasksData.maxTaskDescriptionLength
    ),
    assignedTo: task.user && task.user.name,
  }));

  return (
    <div className="BarTab">
      <div>
        <div className="TaskItem">
          {tasksData.barTasksHeaders.map(header => (
            <div className="cell table-header" key={header.id}>
              {header.name}
            </div>
          ))}
        </div>

        {!tasks.length && (
          <div className="empty">
            You&apos;ve completed all your tasks{' '}
            <Emoji ariaLabel="done" content="🚀" />
          </div>
        )}

        {!!tasks.length &&
          parsedTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              cells={tasksData.barTasksHeaders}
              onSelect={onSelect}
            />
          ))}
      </div>
    </div>
  );
};
