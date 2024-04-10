import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import PropTypes from "prop-types";
const TodoItems = ({ todoItems, onDeleteClick, onToggleClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.dueDate}
          todoName={item.name}
          isCompleted={item.isCompleted}
          onDeleteClick={onDeleteClick}
          onToggleClick={onToggleClick}
        ></TodoItem>
      ))}
    </div>
  );
};

TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      dueDate: PropTypes.string,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
};

export default TodoItems;
