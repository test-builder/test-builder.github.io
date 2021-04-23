import { BrowserRouter as Router, Link, Route, Switch, useLocation } from 'react-router-dom'
import Site1 from './sites/Site1'

const routes = [
  {
    path: '/',
    render: () => <div>Home :D</div>,
    exact: true,
  },
  {
    path: '/site-1',
    render: () => <Site1 disabled={process.env.NODE_ENV !== 'development'} />,
    exact: true
  }
]

const NavLink = ({ path, exact, ...props }) => (
  <Route path={path} exact={exact} children={({ match }) => (
    <div active={match}>
      <Link to={path}>{path}</Link>
    </div>
  )} />
)

function Header() {
  const location = useLocation()
  if (location.pathname !== '/') return null
  console.log('here')
  return (
    <header>
      header
      {routes.map((route, i) => (
        <NavLink key={i} {...route} />
      ))}
    </header>
  )
}

function App() {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
