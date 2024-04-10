import { IoCheckmarkSharp } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { BsArrowReturnLeft } from "react-icons/bs";
import "./TodoItem.css";
import PropTypes from "prop-types";

function TodoItem({
  todoName,
  todoDate,
  onDeleteClick,
  onToggleClick,
  isCompleted,
}) {
  return (
    <div className={`todo-item ${isCompleted ? "completed" : ""}`}>
      <div className="container">
        <div className="row kg-row">
          <div className="col-4">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-4">
            {isCompleted ? (
              <BsArrowReturnLeft
                onClick={() => onToggleClick(todoName)}
                style={{ cursor: "pointer", color: "#9E78CF" }}
              />
            ) : (
              <>
                <span className="check-span">
                  <IoCheckmarkSharp
                    onClick={() => onToggleClick(todoName)}
                    style={{ cursor: "pointer", color: "#9E78CF" }}
                  />
                </span>
                <span className="delete-span">
                  <MdDeleteOutline
                    onClick={() => onDeleteClick(todoName)}
                    style={{ cursor: "pointer", color: "#9E78CF" }}
                  />
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
TodoItem.propTypes = {
  todoName: PropTypes.string.isRequired,
  todoDate: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default TodoItem;
