import { Links, Title } from './Home.styled'
export const Home = ({ trendsFilms }) => {
  return (
    <main>
          <Title>Trending today</Title>
             <ul>
                {trendsFilms.map(({ id, original_title, name }) =>
                        <Links to={`/movies/:${id}`} key={id}>{original_title ?? name}</Links>)}
            </ul>
    </main>
  );
};



