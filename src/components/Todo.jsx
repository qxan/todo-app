import {AiFillDelete} from "react-icons/ai";
import {FiEdit} from "react-icons/fi";
const Todo = ({inputs, deleteItem}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-[3rem]">
      <h2>To Do's</h2>
      <div>
        <button className="bg-blue-400 rounded-2xl  w-[4rem] h-[2rem] text-white border px-2 m-21">
          All
        </button>
        <button className="bg-green-400 rounded-2xl  w-[4rem] h-[2rem] text-white border px-2 m-2">
          Done
        </button>
        <button className="bg-red-400  rounded-2xl w-[4rem] h-[2rem] text-white border px-2 m-2">
          Todo
        </button>
      </div>
      <div className="bg-red-500 w-[20rem] h-[20rem] overflow-scroll  rounded-xl">
        {inputs.map((each) => {
          const {id, todo} = each;
          return (
            <div className="flex justify-between">
              <p>{todo}</p>
              <div>
                <FiEdit />
                <AiFillDelete onClick={() => deleteItem(id)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Todo;