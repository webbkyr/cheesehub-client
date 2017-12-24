import React from 'react';
import {fetchCheeses} from '../actions/cheese';
import { connect } from 'react-redux';

export  class CheeseList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  render() {
    const list = this.props.cheeses.map((cheese, index) => {
      return (
        <li key={index}>{cheese}</li>
      )

    });
    return (
        <ul>
        {list}
        </ul>
    )
  }

}

export default connect()(CheeseList)