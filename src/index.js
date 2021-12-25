import React from 'react';
import ReactDOM from 'react-dom';
import { SearchBar } from './components/SearchBar';

class App extends React.Component {

    onSearchSubmit(term) {
        console.log(term);
    }

    render() {
        return <SearchBar onSubmit = {this.onSearchSubmit} />
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
