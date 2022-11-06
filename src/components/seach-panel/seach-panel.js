import { Component } from "react";
import "./seach-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdataSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdataSearch(term.toLowerCase());
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.onUpdataSearch}
      />
    );
  }
}

export default SearchPanel;
