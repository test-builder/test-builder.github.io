import { Helmet } from "react-helmet";
import 'normalize.css'
import './Portfolio.css'


export default function Portfolio({ children }) {
  return (
    <>
      <Helmet>
        <link
          as="style"
          rel="stylesheet preload prefetch"
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400&display=swap"
          type="text/css"
          crossorigin="anonymous" />
        <link
          as="style"
          rel="stylesheet preload prefetch"
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100;1,700&display=swap"
          type="text/css"
          crossorigin="anonymous" />
      </Helmet>
      {children}
    </>

  )
}