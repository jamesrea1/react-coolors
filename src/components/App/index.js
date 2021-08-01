import { Route, Switch, Redirect } from 'react-router-dom';
import chroma from 'chroma-js';
import GlobalStyle from 'styles/GlobalStyle';
import PageLayout from 'components/layout/PageLayout';
import Generator from 'components/Generator';
import Explore from 'pages/Explore';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageLayout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/generate" />
          </Route>
          <Route path="/generate">
            <Generate />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/:colors">
            <Generator />
          </Route>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </PageLayout>
    </>
  );
}

function Generate() {
  const randomPalette = (size = 5) =>
    Array.from({ length: size })
      .map(() => chroma.random().hex().slice(1))
      .join('-');
  const path = randomPalette();

  if (!path) {
    return <h1>404</h1>;
  }

  return <Redirect to={`/${path}`} />;
}

export default App;
