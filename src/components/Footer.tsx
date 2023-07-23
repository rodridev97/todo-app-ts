import { FilterValue } from "../types/types";
import { Filters } from "./Filters";

interface Props {
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    handleFilterChange: (filter: FilterValue) => void
    onClearCompleted: () => void
}


export const Footer: React.FC<Props> = ({ 
    activeCount = 0,
    completedCount = 0, 
    filterSelected,
    handleFilterChange,
    onClearCompleted 
}) => {
  return (
    <footer className="footer" >
        <span className="todo-count" >
            <strong>{ activeCount }  </strong>
            - Pending Task
        </span>

        <Filters
            filterSelected = { filterSelected }
            onFilterChange = { handleFilterChange }
        />
        {
            completedCount > 0 && (
                    <button
                        className='clear-completed'
                        onClick={ onClearCompleted }
                    >
                    Delete All Completed 
                    </button>
                )
        }
    </footer>
  );
}
