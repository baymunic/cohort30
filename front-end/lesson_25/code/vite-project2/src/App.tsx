import './App.css';
import Counter from './features/counter/Counter';
import Sandwich from './features/sandwich/Sandwich';
import Tasks from './features/tasks/Tasks';
import Movies from './features/movies/Movies';
import MovieCreation from './features/movies/MovieCreation';
import DishesList from './features/dishes/DishesList';
import DishForm from './features/dishes/DishForm';
import TaskCreation from './features/tasks/taskCreation';



function App(): JSX.Element {
  return (
    <div>
      <Counter />
      <Sandwich />
      <Tasks />
      <TaskCreation />
      <MovieCreation />
      <Movies />
      <DishForm />
      <DishesList />
      
    </div>
  );
}

export default App;
