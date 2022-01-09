// import cx from "classnames";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "../styles/Home.module.css";

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

    return (
        <div className="h-screen bg-glassmorphism-welcome text-gray-100">
        <div className="w-3/4 mx-auto">
            <div className="pt-12">
                <h1 className="text-4xl">Todo App</h1>
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
                            // className={(styles.item)}
                            onClick={() => handleDone(id)}
                        >
                            {message}
                        </li>
                    ))}
            <p className="text-center text-gray-600">______________________ DONE ______________________</p>
                {items
                    .filter(({ done }) => done)
                    .map(({ id, message, done }) => (
                        <li
                            key={id}
                            className={(styles.item, styles.done)}
                            onClick={() => handleDone(id)}
                        >
                            {message}
                        </li>
                    ))}
            </ul>
        </div>
        </div>
    );
};

export default Todo;