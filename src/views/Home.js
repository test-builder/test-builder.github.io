  
import React from 'react'
import Helmet from 'react-helmet'

const Home = () => (
  <div>
    <h1>This is the <strong>Home</strong> view.</h1>
    <p>home stuff here</p><Helmet title='Home' />
  </div>
)

export default Home