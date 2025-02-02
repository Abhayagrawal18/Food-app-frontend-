import React from 'react'
import { Link, Links } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const NotFound = () => {
  return (
    <>
        <section className='notFound'>
          <div className="container">
            <img src='/notFound.svg' alt='notFound' />
            <h1> LOOK'S LIKE YOU'RE LOST</h1>
            <p>We can't seem to find you the page you're looking for</p>
            <Link to={"/"}>
            Back to Home{" "}
            <span>
              <HiOutlineArrowNarrowRight/>
            </span>
            </Link>
          </div>
          
        </section>
    </>
  )
}

export default NotFound