import logo from './logo.svg';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import { Helmet } from 'react-helmet';
import Home from './views/Home';
import About from './views/About';
import NotFound from './views/NotFound';
import styled from 'styled-components'

const CustomLink = styled.div`
  a {
    transition: color 0.2s, border-bottom-color 0.2s;
    color: ${props => props.active ? '#0000ff' : '#666'};
    text-decoration: none;
    border-bottom: 2px solid;
    border-bottom-color: ${props => props.active ? 'rgba(0, 0, 255, 0.1)' : 'transparent'};
    &:hover, &:active, &:focus {
      color: ${props => props.active ? '#0000ff' : '#222'};
    }
  }
`

const NavLink = ({path, exact, ...props}) => (
  <Route path={path} exact={exact} children={({match}) => (
    <CustomLink active={match}>
      <Link to={path}>{props.title}</Link>
    </CustomLink>
  )} />
)

const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true
  }, {
    title: 'About',
    path: '/about',
    component: About
  }
]

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet titleTemplate={`%s - My awesome website`} />
        <header>
          <img src={logo} className="App-logo" alt="logo" />

          {routes.map((route, i) => (
            <NavLink key={i} {...route} />
          ))}
        </header>

        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
