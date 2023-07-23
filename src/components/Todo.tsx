import { TodoCompleted, TodoId, type Todo as TodoType } from '../types/types';


interface Props extends TodoType {
  onToggleCompletedTodo: ( {id}: TodoId , {completed}:TodoCompleted  ) => void
  onRemoveTodo: ({id}: TodoId) => void
}


export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompletedTodo }) => {
  
  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompletedTodo(
      {id},
      {completed: event.target.checked}
    )
  }

  return (
    <div  className="view" >
        <input
            className="toggle"
            checked={ completed }
            type="checkbox"
            onChange={ handleChangeCheckBox }
        />
        <label>{ title }</label>
        <button
            className="destroy"
            onClick={ () => { onRemoveTodo({id}) } }
        />
    </div>
  )
}
