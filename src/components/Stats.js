function Stats({items}) {
    if (!items.length) {
        return <p className="stats"><em>Start adding some items to your packing list</em></p>
    }
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const persentage = Math.trunc((numPacked / numItems) * 100);

    const isEverythingPacked = persentage === 100;
    const message = isEverythingPacked
        ? "You got everything. Ready to Fly!"
        : `You have ${numItems} items on your list, and you already packed ${numPacked} (${persentage}%)`;

    return (
        <footer className="stats">
            {message}
        </footer>
    )
}

export default Stats;
