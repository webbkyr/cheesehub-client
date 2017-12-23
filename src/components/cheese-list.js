import React from 'react';

export default class CheeseList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
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
