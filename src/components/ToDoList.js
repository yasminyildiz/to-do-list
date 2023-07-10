import React from "react";
import DeleteIcon from "../icons/delete.svg";
import EditIcon from "../icons/edit.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoList = ({
  todoList,
  handleCheckBoxChange,
  handleCheck,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className="tableDiv">
      <table className="table">
        <tbody>
          {todoList !== null
            ? todoList.map((item) => (
                <tr key={item.id}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxChange}
                      checked={item.statu}
                      onClick={() => handleCheck(item.id)}
                    ></input>
                  </td>
                  <td>
                    <span>{item.task}</span>
                  </td>
                  <td>
                    <img
                      src={DeleteIcon}
                      alt="deleteIcon"
                      onClick={() => handleDelete(item.id)}
                    />
                    <img
                      src={EditIcon}
                      alt="editIcon"
                      onClick={() => handleEdit(item.id)}
                    />
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};
export default TodoList;
