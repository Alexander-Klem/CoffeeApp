import { Component } from 'react';

import './Search.scss';

class Search extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
            term: '',
        }
    }

    onUpdateSearch = (e) => { 
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    }

    render() { 
        return (
            <input
                className="input"
                type="text" name="text" id="text"
                placeholder='start typing here...'
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        );
    }
}

export default Search;