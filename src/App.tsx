import { useState } from 'react';
import Todos from './components/Todos';
import { type Todo as TodoType,  TodoId, TodoCompleted, FilterValue, TodoTitle } from './types/types';
import { TODO_FILTERS } from './constants/consts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const mockTodos = [
  {
    id: '1',
    title: 'Title 1',
    completed: true
  },
  {
    id: '2',
    title: 'Title 2',
    completed: false
  },
  {
    id: '3',
    title: 'Title 3',
    completed: false
  }
];



const App = (): JSX.Element => {

  const [todos, setTodos] = useState(mockTodos);

  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({id}:TodoId): void => {
    const newTodos = todos.filter(  todo => todo.id !== id )
    setTodos( newTodos )
  }

  /* Other Form
  const handleCompleted = ( { id, completed }: { id: TodoId, completed: TodoCompleted } ): void => {
    const 
  }
  */
  
  const handleCompleted = ( {id}: TodoId , {completed}:TodoCompleted ): void => {
    const  newTodos = todos.map( todo => {
      if ( todo.id === id ) {
        return {
          ...todo,
          completed
        }
      }

      return todo;
    });
    setTodos( newTodos )
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  }

  const activeCount = todos.filter( todo => !todo.completed ).length;
  const completedCount = todos.length - activeCount;

  const filterTodos = todos.filter( todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  })

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter( todo => !todo.completed );
    setTodos(newTodos);
  }

  const handleOnAddTodo = ({ title }: TodoTitle) => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  return (
    <div className="todoapp" >
      <Header 
        onAddTodo={ handleOnAddTodo  }
      />
      <Todos 
        todos={ filterTodos }
        onToggleCompletedTodo={ handleCompleted }  
        onRemoveTodo={ handleRemove }
      />
      <Footer
        activeCount={ activeCount }
        completedCount={ completedCount }
        filterSelected={ filterSelected }
        handleFilterChange={ handleFilterChange }
        onClearCompleted={ handleRemoveAllCompleted }
      />
    </div>
  );
  
}

export default App
