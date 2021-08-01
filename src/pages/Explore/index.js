import { useRouteMatch } from 'react-router-dom';

function Explore() {
  console.log(useRouteMatch());

  return <h1>Explore</h1>;
}

export default Explore;
