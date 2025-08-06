import './SearchButtons.scss';

const SearchButtons = (props) => {
    const buttonsData = [
        { name: 'All', label: 'All' },
        { name: 'Brazil', label: 'Brazil' },
        { name: 'Kenya', label: 'Kenya' },
        { name: 'Columbia', label: 'Columbia' },
    ]

    const buttons = buttonsData.map(({ name, label }) => { 
        return (
            <button
                className="btns__btn"
                key={name}
                onClick={(e) => props.onFilterSelect(name)}>{label}
                </button>
        );
    })

    return (
        <div className="btns">
            {buttons}
        </div>
    );
}

export default SearchButtons;