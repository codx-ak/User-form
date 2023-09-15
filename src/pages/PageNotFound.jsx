import React from 'react'
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="page-404">
    <h1>404</h1>
    <p>Page Not Found !!!</p>
    <Link to="/">Go Back</Link>
    </div>
  )
}

export default PageNotFound