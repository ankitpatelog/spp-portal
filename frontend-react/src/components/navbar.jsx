import React from 'react'
import Button from './button'
const navbar = () => {
  return (
    <>
        <nav class="navbar container pt-3 pb-3 align-items-start">
    
    <a class="navbar-brand text-light" href="/">Stock Prediction Portal</a>

    <div>

        {/* <!-- When user is logged in --> */}
        <a href="/dashboard" class="btn btn-info">Dashboard</a>
        &nbsp;
        <button class="btn btn-danger">Logout</button>

        {/* <!-- When user is NOT logged in -->
        <!-- */}
        <a href="/login" class="btn btn-outline-info">Login</a>
        &nbsp;
        <a href="/register" class="btn btn-info">Register</a>
        {/* --> */}

    </div>

</nav>
    </>
  )
}

export default navbar