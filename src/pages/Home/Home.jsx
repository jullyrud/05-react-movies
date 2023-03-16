import { Title } from './Home.styled'
import { FilmsList } from '../../components/FilmsList/FilmsList'
export const Home = ({ films }) => {
  return (
    <main>
        <Title>Trending today</Title>
        <FilmsList films={ films } />
    </main>
  );
};



