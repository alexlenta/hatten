import React, { useState } from 'react';

import './TaskModal.scss';
import { Card } from '../Card';

import mockData from '../../assets/mock.db.json';
import tasksData from '../../pages/Tasks/Tasks.data';

export const TaskModal = ({ onClose = null }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    date: undefined,
    user: undefined,
    priority: undefined,
  });

  const [changes, setChanges] = useState({
    title: false,
    description: false,
    date: false,
    user: false,
    priority: false,
  });

  const handleSubmit = event => {
    event.preventDefault();
    onClose(task);
  };

  const handleChange = (name, value) => {
    setTask(prevTask => ({ ...prevTask, [name]: value }));
    setChanges(prevChanged => ({ ...prevChanged, [name]: true }));
  };

  const handleBlur = name => {
    setChanges(prevChanged => ({ ...prevChanged, [name]: true }));
  };

  const isAddDisabled = Object.keys(task).some(key => !task[key]);

  return (
    <div className="modal TaskModal">
      <Card>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <label className="input-label" htmlFor="taskTitle">
                Title
              </label>
              <br />

              <input
                id="taskTitle"
                name="title"
                className={`${!task.title ? 'invalid' : ''} ${
                  changes.title ? 'dirty' : ''
                }`}
                type="text"
                onBlur={() => handleBlur('title')}
                placeholder="Task title (max 14 characters)"
                autoFocus
                value={task.title}
                onChange={event => handleChange('title', event.target.value)}
              />
            </div>

            <div className="input-box">
              <label className="input-label" htmlFor="taskTitle">
                Description
              </label>
              <br />

              <input
                id="taskDescription"
                name="description"
                className={`full-width ${!task.description ? 'invalid' : ''} ${
                  changes.description ? 'dirty' : ''
                }`}
                type="text"
                onBlur={() => handleBlur('description')}
                placeholder="Task description"
                value={task.description}
                onChange={event =>
                  handleChange('description', event.target.value)
                }
              />
            </div>

            <div className="input-box-row">
              <div className="input-box">
                <label className="input-label" htmlFor="taskTitle">
                  Date
                </label>
                <br />

                <input
                  id="taskDate"
                  name="date"
                  className={`${!task.date ? 'invalid' : ''} ${
                    changes.date ? 'dirty' : ''
                  }`}
                  type="date"
                  onBlur={() => handleBlur('date')}
                  onChange={event => handleChange('date', event.target.value)}
                />
              </div>
              <div className="input-box">
                <label className="input-label" htmlFor="taskTitle">
                  Assign to
                </label>
                <br />

                <select
                  id="taskUser"
                  name="user"
                  className={`${!task.user ? 'invalid' : ''} ${
                    changes.user ? 'dirty' : ''
                  }`}
                  value={task.user ? task.user.id : 'select'}
                  onChange={event =>
                    handleChange(
                      'user',
                      mockData.employees.find(
                        emp => String(emp.id) === String(event.target.value)
                      )
                    )
                  }
                >
                  <option value="select" disabled>
                    Select
                  </option>
                  {mockData.employees.map(employee => (
                    <option key={employee.id} value={employee.id}>
                      {employee.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-box">
                <label className="input-label" htmlFor="taskTitle">
                  Priority
                </label>
                <br />

                <select
                  id="taskPriority"
                  name="priority"
                  className={`${!task.priority ? 'invalid' : ''} ${
                    changes.priority ? 'dirty' : ''
                  }`}
                  value={task.priority ? task.priority.value : 'select'}
                  onChange={event =>
                    handleChange(
                      'priority',
                      tasksData.taskPritoryOptions.find(
                        priority =>
                          String(priority.value) === String(event.target.value)
                      )
                    )
                  }
                >
                  <option value="select" disabled>
                    Select
                  </option>
                  {tasksData.taskPritoryOptions.map(priority => (
                    <option key={priority.value} value={priority.value}>
                      {priority.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-row">
              <button
                className="modal-button"
                type="button"
                onClick={() => onClose && onClose()}
              >
                Cancel
              </button>
              <button
                className="modal-button modal-button-submit"
                type="submit"
                disabled={isAddDisabled}
              >
                Add task
              </button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};
