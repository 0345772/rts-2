
// import UserList from './components/UserList';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import TrainingPage from './components/TrainingPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <NavLink to="/users">Пользователи</NavLink>
          <div style={{ margin: "0px 15px" }}><NavLink to="/todos">Список дел</NavLink></div>
          <NavLink to="/training">Тренируемся</NavLink>
        </div>
        <Route path="/users" exact >
          <UsersPage />
        </Route>
        <Route path="/todos" exact>
          <TodosPage />
        </Route>
        <Route path="/training" exact>
          <TrainingPage />
        </Route>
        <Route path="/users/:id">
          <UserItemPage />
        </Route>
        <Route path="/todos/:id">
          <TodoItemPage />
        </Route>
      </div>
    </BrowserRouter>

  );
};

export default App;
