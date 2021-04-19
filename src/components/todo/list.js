import React from 'react';
import PropsTypes from 'prop-types';
import './todo.css';


class ListTodo extends React.Component {
  render() {
    return(
      <>
        <ul>
        {this.props.list.map((item, index) => (
          <li key={index} style={{ marginTop: '8px', listStyle: 'none'}}>
            <input type="checkbox" onClick={() => this.props.finish(item.id)} />
            <span className= {item.done ? 'delete' : ''}> {item.name} </span>
            <button
              onClick={() => this.props.remove(item.id)}
              style={{ marginLeft: '5px' }}
            > X </button>
          </li>
        ))}
        </ul>
      </>
    )
  }
}
ListTodo.ProtoType = {
  list : PropsTypes.array,
  remove : PropsTypes.func.isRequired,
  finish : PropsTypes.func.isRequired
}
export default ListTodo;