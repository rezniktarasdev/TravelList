import {useState} from "react";

function Form({onAddItem}) {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!description) {
            return
        }

        const newItem = {description, quantity, packed: false, id: Date.now()};

        setDescription('');
        setQuantity(1);
        onAddItem(newItem);
    };

    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select
                value={quantity}
                onChange={(e) => {
                    setQuantity(Number(e.target.value));
                } }
            >
                {Array.from({length:20}, ((el, i) => i + 1))
                    .map((elem) => {
                        return <option value={elem} key={elem}>{elem}</option>
                    })}
            </select>
            <input
                type="text"
                placeholder="Input..."
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
            />
            <button>Add</button>
        </form>
    )
}

export default Form;
