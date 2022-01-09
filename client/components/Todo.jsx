import cx from "classnames";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
    const [todoItem, setTodoItem] = useState("");
    const [items, setItems] = useState([]);

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            handleAdd();
        }
    };

    const handleAdd = () => {
        if (todoItem) {
            setItems([
                {
                    id: uuidv4(),
                    message: todoItem,
                    done: false,
                },
                ...items,
            ]);

            setTodoItem("");
        }
    };

    const handleDone = (id) => {
        const _items = items.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    done: !item.done,
                };
            }

            return item;
        });

        setItems(_items);
    };
                    const [num, setNum] =useState(0);
                    const incNum =() =>{
                        setNum(num+1)
                    }
                    const decNum =() =>{
                        if(NUM > 0){
                        setNum(num-1)
                        }
                        else{
                            alert('Zero is there')
                            setNum(0);
                        }
                    }


    return (
        <div className="h-screen bg-gray-900 text-gray-100">
        <div className="w-3/4 mx-auto">
            <div className="pt-12">
                <h1 className="text-4xl text-center">Todo App</h1>
            </div>

            <div className="pt-12">
                <input
                    type="text"
                    value={todoItem}
                    className="w-full rounded py-2 px-4 text-gray-900"
                    onChange={(e) => setTodoItem(e.target.value)}
                    onKeyDown={handleEnter}
                />
            </div>

            <ul className="pt-12">
            <p className="text-center text-gray-600">______________________ TODO ______________________</p><br />
                {items
                    .filter(({ done }) => !done)
                    .map(({ id, message, done }) => (
                        <li
                            key={id}
                            className={cx(styles.item)}
                            // onClick={() => handleDone(id)}
                        >
                            {message}
                            <button onClick={() => { handleDone(id); incNum();}}>DONE</button>
                        </li>
                    ))}
            <p className="text-center text-gray-600">______________________ DONE ______________________</p>
                {items
                    .filter(({ done }) => done)
                    .map(({ id, message, done }) => (
                        <li
                            key={id}
                            className={cx(styles.item, styles.done)}
                            // onClick={() => handleDone(id)}
                        >
                            {message}
                            <button onClick={() => { handleDone(id); decNum();}}>DONE</button>
                        </li>
                    ))}
            
            </ul>
        </div>
        <h1 className="text-left text-xl text-white">{num}</h1>
        </div>
    );
};

export default Todo;