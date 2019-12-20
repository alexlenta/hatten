import React from 'react';

import './TaskItem.scss';
import { Select } from '../Select';
import { Priority } from './Priority';
import tasksData from '../../pages/Tasks/Tasks.data';

export const TaskItem = ({ task = {}, cells = [], onSelect = null }) => {
  return (
    <div className="TaskItem">
      {cells.map(cell => {
        if (cell.value === 'selected') {
          return (
            <div className="cell" key={cell.id}>
              <Select
                selected={!!task.selected}
                onClick={onSelect ? () => onSelect(task) : null}
              />
            </div>
          );
        }

        if (cell.value === 'priority') {
          return (
            <div className="cell" key={cell.id}>
              <Priority
                priority={tasksData.taskPritoryOptions.find(
                  priorityOption => priorityOption.value === task[cell.value]
                )}
              />
            </div>
          );
        }

        return (
          <div className="cell" key={cell.id}>
            {task[cell.value] || 'null'}
          </div>
        );
      })}
    </div>
  );
};
