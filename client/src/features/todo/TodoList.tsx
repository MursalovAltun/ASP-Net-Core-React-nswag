import { Formik } from 'formik';
import { useAppDispatch } from "../../app/hooks";
import * as fromTodos from './todoSlice';
import { useSelector } from "react-redux";
import useFetching from "../../app/use-fetching";
import { TodoCreateRequest } from "../../app/api";
import { Button, TextField } from "@material-ui/core";

const TodoList = () => {
  useFetching(fromTodos.loadList);
  const todos = useSelector(fromTodos.getAllTodos);

  const dispatch = useAppDispatch();

  return (
    <div>
      <ul>
        {todos.map(todo => <li key={todo.name}>{todo.name}</li>)}
      </ul>

      <Formik initialValues={{ name: '' }} onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(fromTodos.addRequest(new TodoCreateRequest({name: values.name})));
          setSubmitting(false);
        }, 400);
      }}>
        {({
            values,
            handleBlur,
            handleChange,
            handleSubmit
          }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <Button color="primary" type="submit">Create</Button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default TodoList;
