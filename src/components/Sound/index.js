import React from "react";
import { Container } from "./styles";
import { BsPlayFill, BsHeart } from "react-icons/bs";
import { connect } from "react-redux";

export const Sound = () => {
  return (
    <Container>
      <BsPlayFill color='#5C20D1' size='35'></BsPlayFill>
      <div className='content'>
        <div className='content-title'>
          <h4>Ejemplo de titulo numero 1</h4>
          <p>By usuario_1</p>
        </div>
      </div>
      <BsHeart color='#5C20D1' size='25'></BsHeart>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(Sound);
