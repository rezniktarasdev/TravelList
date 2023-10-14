import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
    const [items, setItems] = useState([]);

    const handleAddIems = (item) => {
        setItems((items => [...items, item]))
    };

    const handleDeleteItem = (id) => {
        setItems((items) => items.filter((item) => item.id !== id))
    };

    const handleToggleItem = (id) => {
        setItems((items) => items
            .map((item) => item.id === id
            ? {...item, packed: !item.packed}
            : item))
            console.log(items)
    };

    const onClearList = () => {
        const confirmed = window.confirm('Are you sure you want to delete all items?')

        if (confirmed) {
            setItems([]);
        }
    };

    return (
        <div className="app">
            <Logo />
            <Form onAddItem={handleAddIems} />
            <PackingList
                items={items}
                onClearList={onClearList}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem} />
            <Stats items={items} />
        </div>
    )
}

export default App;
