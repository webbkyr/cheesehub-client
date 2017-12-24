import React from 'react';
import {fetchCheeses} from '../actions/cheese';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

export  class CheeseList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  renderData() {
    if (this.props.loading) {
      return <Spinner name="three-bounce" color="olive" fadeIn='none'/>
    }
    if (this.props.error) {
      return <p>{this.props.error}</p>
    }

    const list = this.props.cheeses.map((cheese, index) => {
      return (
        <li key={index}>{cheese}</li>
      )

    });  
    return <ul className='cheese-results'>{list}</ul>;
  
  }


  render() {
    return (
      <div>
        <ul>
        {this.renderData()}
        </ul>
        <button> Click Me!</button>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  cheeses: state.cheeses,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(CheeseList)