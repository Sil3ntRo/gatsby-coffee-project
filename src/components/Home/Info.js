import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title';

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story">

        </Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum ducimus ea et exercitationem expedita illum ipsum laboriosam modi necessitatibus nulla pariatur, porro quasi quia quod sapiente sint tenetur! Quae.

            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}