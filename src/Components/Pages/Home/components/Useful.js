import React from 'react'

const Useful = () => {
  return (
    <React.Fragment>
      <section className="useful  mb-25">
        <div className="site-heading text-left">
          <h4>Useful Links</h4>
        </div>

        <div className="section-content">
          <div className="wrapper">
            <h3 className="list">
              <a href="https://nptel.ac.in/">
                Nptel Online courses & certification{' '}
                <i class="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </h3>
            <h3>
              <a href="https://www.edx.org/">
                edX | Free Online Courses by Harvard, MIT, & more{' '}
                <i class="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </h3>
            <h3>
              <a href="https://ndl.iitkgp.ac.in/">
                The National Digital library of India{' '}
                <i class="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </h3>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Useful
