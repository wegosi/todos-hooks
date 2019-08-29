import React, { useContext } from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { DispatchContext } from './context/todos.conext';


function Todo({ id, task, completed }) {
  const dispatch  = useContext(DispatchContext)
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? (
        <EditTodoForm 
          id={id} 
          task={task} 
          toggleEditForm={toggle} 
        />
      ) : (
          <>
            <Checkbox 
              tabIndex={-1} 
              checked={completed} 
              onClick={() => dispatch({ type: 'TOGGLE', id: id })} 
            />
            <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label='Edit' onClick={toggle}>
                <EditIcon />
              </IconButton>
              <IconButton 
                aria-label='Delete' 
                onClick={() => dispatch({ type: 'REMOVE', id: id })}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )
      }
    </ListItem>
  )
}
export default Todo;
