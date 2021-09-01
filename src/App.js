// ../ : 상위폴더
// ./ : 현재폴더
import './App.css';
import TodoHeader from './component/TodoHeader';
import TodoMain from './component/TodoMain';
import TodoList from './component/TodoList';
import TodoItem from './component/TodoItem';

function App() {
  return (
    <>
      <TodoHeader />
      <TodoMain>
        <TodoList>
          <TodoItem />
        </TodoList>
      </TodoMain>
    </>
  );
}

export default App;
