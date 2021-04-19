import React from 'react';
import styled from 'styled-components';
import ButtonComponent from '../components/todo/button';
import InputComponent from '../components/todo/input';
import ListTodo from '../components/todo/list';

const DivContainer = styled.div`
  max-width: 380px;
  margin: 10px auto;
  padding: 5px;
  border: 1px solid #ccc;
`;

class AppTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name_work: '',
      list_work: [], // {name_work: 'A', id_work: 2, done: false}
      id_work: 1
    }
  }

  changeNameWork = (event) => {
    //console.log(event.target.value);
    let work = event.target.value;
    // if(work !== ''){
      this.setState({
        ...this.state,
        name_work: work
      })
    // }
  }

  addTodoWork = () => {
    if(this.state.name_work !== ''){
      this.setState({
        ...this.state,
        id_work: this.state.id_work + 1,
        list_work: [...this.state.list_work, {
          id: this.state.id_work,
          name: this.state.name_work,
          done: false
        }],
        name_work: ''
      })
    }
  }

  removeTodo = (id) => {
    const newTodo = this.state.list_work.filter(item => item.id !== id);
    this.setState({
      ...this.state,
      list_work: newTodo
    })
  }
finishTodo = (id) => {
  //cap nhap lai trang thai done ve true của cong viec co ma la id giu len
  const updateTodo = this.state.list_work.map(item => item.id === id ? {...item, done: !item.done} : item);
  this.setState({
    ...this.state,
    list_work: updateTodo
  })
}
  render() {
    console.log(this.state.list_work);
    return(
      <>
        <DivContainer>
          <InputComponent
            change={this.changeNameWork}
            val={this.state.name_work}
          />
          <ButtonComponent
            click={this.addTodoWork}
          > Add </ButtonComponent>
          <ListTodo
            list={this.state.list_work}
            remove={this.removeTodo}
            finish={this.finishTodo}
          />
        </DivContainer>
      </>
    )
  }
}
export default AppTodo;

