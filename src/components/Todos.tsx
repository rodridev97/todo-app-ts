import { type Todo as TodoType, TodoId, TodoCompleted } from '../types/types';
import { Todo } from './Todo';

interface Props {
  todos: TodoType[]
  onToggleCompletedTodo: ( {id}: TodoId , {completed}:TodoCompleted ) => void
  onRemoveTodo: ( {id}: TodoId ) => void
}


const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompletedTodo }) => {
  return (
    <ul className="todo-list" >
        {  
          todos.map( todo => ( 
              <li 
                key={ todo.id } 
                className={ todo.completed ? 'completed' : '' }
              > 
                <Todo 
                  key={ todo.id }
                  id={ todo.id }
                  title={ todo.title }
                  completed={ todo.completed }
                  onRemoveTodo={ onRemoveTodo }
                  onToggleCompletedTodo={ onToggleCompletedTodo }
                /> 
              </li> 
            ))
        }
    </ul>
  )
}

export default Todos;