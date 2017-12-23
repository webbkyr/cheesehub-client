import React from 'react';

export default class CheeseList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    const list = this.props.cheeses.map(cheese => {
      return <ul>
        <li>{cheese}</li>
        </ul>
    });
    return (
      <div>{list}</div>
    )
  }

}
