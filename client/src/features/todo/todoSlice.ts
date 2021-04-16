import { createAsyncThunk, createEntityAdapter, createSlice, EntityState } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ITodo, TodoCreateRequest, TodosClient } from "../../app/api";
import createApiClient from "../../app/create-api-client";

const name = 'todos';

export const addRequest = createAsyncThunk<ITodo, TodoCreateRequest>(
  `${name}/addTodoRequest`,
  async (todo: TodoCreateRequest) => {
    const result = await createApiClient(TodosClient).create(todo);
    return {
      ...result
    };
  }
);

export const loadList = createAsyncThunk<ITodo[]>(
  `${name}/loadList`,
  async () => {
    const todos = await createApiClient(TodosClient).getAll();
    return todos.map(todo => ({
      ...todo
    }));
  }
);

const adapter = createEntityAdapter<ITodo>({
  selectId: entity => entity.id!,
});

export const todosSlice = createSlice({
  name,
  initialState: adapter.getInitialState(),
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(addRequest.fulfilled, (state: EntityState<ITodo>, { payload }) => adapter.addOne(state, payload));
    builder.addCase(loadList.fulfilled, (state: EntityState<ITodo>, { payload }) => adapter.upsertMany(state, payload));
  })
});

export const { selectAll: getAllTodos } = adapter.getSelectors<RootState>(state => state.todos);

export default todosSlice.reducer;
