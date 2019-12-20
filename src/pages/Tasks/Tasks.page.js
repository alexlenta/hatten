import React, { useState } from 'react';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';

import './Tasks.page.scss';
import { TaskAction, TabButton, TaskModal } from '../../components/TasksPage';
import { BarTab } from './Tabs';
import { Emoji, PageContainer, Card, Placeholder } from '../../components';
import { getItemById } from '../../utils';

import tasksData from './Tasks.data';
import mockData from '../../assets/mock.db.json';

export const TasksPage = () => {
  const { url } = useRouteMatch();
  const [barTasks, setBarTasks] = useState(mockData.tasks.barTasks);
  const [showAddModal, setShowAddModal] = useState(false);

  const tabsWithPath = tasksData.tabs.map(tabItem => ({
    ...tabItem,
    path: url + tabItem.path,
  }));

  const handleSelect = task => {
    setBarTasks(prevBarTasks =>
      prevBarTasks.map(prevTask => {
        if (prevTask.id === task.id) {
          prevTask.selected = !prevTask.selected;
        }

        return prevTask;
      })
    );
  };

  const handleRemoveClick = () => {
    setBarTasks(prevBarTasks => prevBarTasks.filter(task => !task.selected));
  };

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleActionClick = action => {
    switch (action.id) {
      case 'remove':
        handleRemoveClick();
        break;
      case 'add':
        handleAddClick();
        break;
      default:
        break;
    }
  };

  const handleModalClose = newTask => {
    if (newTask) {
      const newTaskId = barTasks.length
        ? barTasks[barTasks.length - 1].id + 1
        : 1;

      const taskToAdd = {
        ...newTask,
        id: newTaskId,
        dateString: '15 Dec',
        priority: newTask.priority.value,
      };

      setBarTasks(prevBarTasks => [...prevBarTasks, taskToAdd]);
    }

    setShowAddModal(false);
  };

  return (
    <PageContainer className="TasksPage" withModal={showAddModal}>
      <div className="task-actions-container">
        {tasksData.taskActions.map((taskAction, i) => (
          <TaskAction
            key={taskAction.id}
            action={taskAction}
            i={i}
            onClick={() => handleActionClick(taskAction)}
          />
        ))}
      </div>

      <Card className="tasks-page-card">
        <div className="tabs-container">
          {tabsWithPath.map(tabItem => (
            <TabButton key={tabItem.id} tab={tabItem} />
          ))}
        </div>

        <div>
          <Switch>
            <Route path={getItemById(tabsWithPath, 'bar').path}>
              <BarTab tasks={barTasks} onSelect={handleSelect} />
            </Route>

            <Route path={getItemById(tabsWithPath, 'cleaning').path}>
              <Placeholder>
                Cleaning tasks is coming soon{' '}
                <Emoji ariaLabel="waiting" content="⏳" />
              </Placeholder>
            </Route>

            <Redirect to={getItemById(tabsWithPath, 'bar').path} />
          </Switch>
        </div>
      </Card>

      {showAddModal && <TaskModal onClose={handleModalClose} />}
    </PageContainer>
  );
};
