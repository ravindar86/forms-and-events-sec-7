import React from "react";

export class SearchBar extends React.Component {
  /*  onInputChange(event) {
        console.log(event.target.value);
    }
      <input type='text' 
                        onChange={this.onInputChange} />

      <input type='text'
                            onChange={(event) => console.log(event.target.value)} />
    */

  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault(); // keeps the value in text box even after page refresh
    this.props.onSubmit(this.state.term); // calls the parent onSearchSubmit method
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Image</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
