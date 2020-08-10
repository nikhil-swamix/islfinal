import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import ModalVideo from 'react-modal-video'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }
  render() {
    return (
      <>
        <div className="nptel">
          <a
            href="https://nptel.ac.in/LocalChapter/statistics/500/"
            class="nptel_content nptel_label"
          >
            NPTEL
          </a>
        </div>
        <Container fluid style={{ padding: '0px' }}>
          <Carousel>
            <Carousel.Item>
              <img
                className="carousel-img d-block w-100"
                src="https://i.ibb.co/MVPvtJ9/slider-2.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/MVPvtJ9/slider-2.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/MVPvtJ9/slider-2.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>

        <section className="brand d-none d-sm-block">
          <Container fluid>
            <Row noGutters>
              <Col lg={3}>
                <div className="content">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/2/29/Osmania_University_Logo.png"
                    alt=""
                    width="55"
                    height="50"
                    title="icon-1"
                  />
                </div>
                <div className="">
                  <h3>Affiliated to Osmania university</h3>
                </div>
              </Col>
              <Col lg={4}>
                <div className="content">
                  <img
                    src="https://i.ibb.co/1QYV8p0/icon-2.png"
                    alt=""
                    width="40"
                    height="40"
                    title="icon-1"
                  />
                </div>
                <div className="">
                  <h3>CE | CSE | ECE | EEE | IT | ME | MBA</h3>
                </div>
              </Col>{' '}
              <Col lg={3}>
                <div className="content">
                  <img
                    src="https://i.ibb.co/Sfwm5YT/icon-4.png"
                    alt=""
                    width="40"
                    height="40"
                    title="icon-1"
                  />
                </div>
                <div className="">
                  <h3>Sponsored by Islamia Group</h3>
                </div>
              </Col>
              <Col lg={2}>
                <div className="content">
                  <img
                    src="https://i.ibb.co/x8k5DQy/icon-1.png"
                    alt=""
                    width="40"
                    height="40"
                    title="icon-1"
                  />
                </div>
                <div className="">
                  <h3>2008 Established</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="ner">
          <Container fluid>
            <Row noGutters>
              <Col md={4} sm={6} className="pt-25">
                <section className="news  mb-25">
                  <div className="site-heading text-left">
                    <h4>News & Updates</h4>
                  </div>
                  <div className="section-content">
                    <article>
                      <figure className="date">24-4-2020</figure>
                      <header>
                        <a href="https://islengg.ac.in">
                          Applications invited for Admissions-2020. Apply Now
                        </a>
                      </header>
                    </article>

                    <article>
                      <figure className="date">24-4-2020</figure>
                      <header>
                        <a href="https://islengg.ac.in">
                          Applications invited for Admissions-2020. Apply Now
                        </a>
                      </header>
                    </article>
                    <article>
                      <figure className="date">24-4-2020</figure>
                      <header>
                        <a href="https://islengg.ac.in">
                          Applications invited for Admissions-2020. Apply Now
                        </a>
                      </header>
                    </article>
                  </div>
                </section>
                <div className="stick-bottom">All News →</div>
              </Col>
              <Col md={4} sm={6} className="pt-25">
                <section className="events small  mb-25">
                  <header>
                    <div className="site-heading text-left">
                      <h4>Upcoming Events</h4>
                    </div>
                  </header>
                  <div className="section-content">
                    <article className="event">
                      <figure className="date">
                        <span className="date-month">
                          <div className="day">18</div>
                          <div className="month">jan</div>
                        </span>
                      </figure>
                      <aside>
                        <header>
                          <h3 className="content">
                            <a href="event-detail.html">
                              Online Seminar: Seminar on Cache Memory :
                              Different Mapping Techniques
                            </a>
                          </h3>
                        </header>
                        <div className="additional-info">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>{' '}
                          10:00 am - 3:00 pm
                          <br />
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                          Block - A
                        </div>
                      </aside>
                    </article>

                    <article className="event">
                      <figure className="date">
                        <span className="date-month">
                          <div className="day">18</div>
                          <div className="month">jan</div>
                        </span>
                      </figure>
                      <aside>
                        <header>
                          <h3 className="content">
                            <a href="event-detail.html">
                              Laughter day: The Laughter day will be celebrated
                              in campus
                            </a>
                          </h3>
                        </header>
                        <div className="additional-info">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>{' '}
                          10:00 am - 3:00 pm
                          <br />
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                          Block - A
                        </div>
                      </aside>
                    </article>

                    <article className="event">
                      <figure className="date">
                        <span className="date-month">
                          <div className="day">18</div>
                          <div className="month">jan</div>
                        </span>
                      </figure>
                      <aside>
                        <header>
                          <h3 className="content">
                            <a href="event-detail.html">
                              Laughter day: The Laughter day will be celebrated
                              in campus
                            </a>
                          </h3>
                        </header>
                        <div className="additional-info">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>{' '}
                          10:00 am - 3:00 pm
                          <br />
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                          Block - A
                        </div>
                      </aside>
                    </article>
                  </div>
                </section>
                <div className="stick-bottom">All Events →</div>
              </Col>
              <Col md={4} sm={6} className="pt-25">
                <section className="recents mb-25">
                  <div className="site-heading text-left">
                    <h4>Recents </h4>
                  </div>
                  <Row>
                    <Col lg={6} sm={6}>
                      <div className="single_courses courses_gray">
                        <div className="courses_image">
                          <img
                            src="https://i.ibb.co/XVvcsVD/Espirit.jpg"
                            alt="courses"
                          />
                        </div>
                        <div className="courses_content">
                          <div className="courses_author d-flex">
                            <div className="author_name media-body">
                              <a href="https://islengg.ac.in">ESPIRIT</a>
                            </div>
                          </div>
                          <h4 className="title">
                            <a href="https://islengg.ac.in">
                              Espirit is one of the finest Cultural event of ISL
                              More
                            </a>
                          </h4>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} sm={6}>
                      <div className="single_courses courses_gray ">
                        <div className="courses_image">
                          <img
                            src="https://i.ibb.co/b6mfmDY/enthusiac.jpg"
                            alt="courses"
                          />
                        </div>
                        <div className="courses_content">
                          <div className="courses_author d-flex">
                            <div className="author_name media-body">
                              <a href="https://islengg.ac.in">ESPIRIT</a>
                            </div>
                          </div>
                          <h4 className="title">
                            <a href="https://islengg.ac.in">
                              Espirit is one of the finest Cultural event of ISL
                            </a>
                          </h4>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} sm={6}>
                      <div className="single_courses courses_gray">
                        <div className="courses_image">
                          <img
                            src="https://i.ibb.co/6Rfb82N/eloquence.jpg"
                            alt="courses"
                          />
                        </div>
                        <div className="courses_content">
                          <div className="courses_author d-flex">
                            <div className="author_name media-body">
                              <a href="https://islengg.ac.in">ESPIRIT</a>
                            </div>
                          </div>
                          <h4 className="title">
                            <a href="https://islengg.ac.in">
                              Espirit is one of the finest Cultural event of ISL
                            </a>
                          </h4>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} sm={6}>
                      <div className="single_courses courses_gray">
                        <div className="courses_image">
                          <img
                            src="https://i.ibb.co/XVvcsVD/Espirit.jpg"
                            alt="courses"
                          />
                        </div>
                        <div className="courses_content">
                          <div className="courses_author d-flex">
                            <div className="author_name media-body">
                              <a href="https://islengg.ac.in">ESPIRIT</a>
                            </div>
                          </div>
                          <h4 className="title">
                            <a href="https://islengg.ac.in">
                              Espirit is one of the finest Cultural event of ISL
                            </a>
                          </h4>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </section>{' '}
                {/* <section className="quick-link">
              <div className="top text-center">
                <i className="fa fa-link"></i>
                <h3 className="title">Quick Links</h3>
              </div>

              <div className="wrapper">
                <div className="link-list">
                  <a href="https://india.gov">
                    <h3 className="link">Alumni & Donors</h3>
                  </a>
                </div>
                <div className="link-list">
                  <a href="https://india.gov">
                    <h3 className="link">NPTEL Online Course</h3>
                  </a>
                </div>
                <div className="link-list">
                  <a href="https://india.gov">
                    <h3 className="link">Sports</h3>
                  </a>
                </div>
                <div className="link-list">
                  <a href="https://india.gov">
                    <h3 className="link">NPTEL Online Course</h3>
                  </a>
                </div>
                <div className="link-list">
                  <a href="https://india.gov">
                    <h3 className="link">NPTEL Online Course</h3>
                  </a>
                </div>
              </div>
            </section> */}
                <div className="stick-bottom">All Recents →</div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="courses_area pt-90 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="site-heading text-left">
                  <h2>In-House Events</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 mb-10">
                <div className="single_courses courses_gray">
                  <div className="courses_image">
                    <img
                      src="https://i.ibb.co/XVvcsVD/Espirit.jpg"
                      alt="courses"
                    />
                  </div>
                  <div className="courses_content">
                    <div className="courses_author d-flex">
                      <div className="author_name media-body">
                        <a href="https://islengg.ac.in">ESPIRIT</a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="https://islengg.ac.in">
                        Espirit is one of the finest Cultural event of ISL
                      </a>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 mb-10">
                <div className="single_courses courses_gray">
                  <div className="courses_image">
                    <img
                      src="https://i.ibb.co/b6mfmDY/enthusiac.jpg"
                      alt="courses"
                    />
                  </div>
                  <div className="courses_content">
                    <div className="courses_author d-flex">
                      <div className="author_name media-body">
                        <a href="https://islengg.ac.in">ENTHUSIAC</a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="https://islengg.ac.in">
                        Enthusiac is an Annual Sports Meet of ISL. Scintillating
                        performance creates aura of festivit{' '}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 mb-10">
                <div className="single_courses courses_gray">
                  <div className="courses_image">
                    <img
                      src="https://i.ibb.co/6Rfb82N/eloquence.jpg"
                      alt="courses"
                    />
                  </div>
                  <div className="courses_content">
                    <div className="courses_author d-flex">
                      <div className="author_name media-body">
                        <a href="https://islengg.ac.in">Eloquence</a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="https://islengg.ac.in">
                        Eloquence The English Festival of ISL. With the power of
                        WordsS & Ideas...there comes a be{' '}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-10">
                <div className="single_courses courses_gray">
                  <div className="courses_image">
                    <img
                      src="https://i.ibb.co/F5PjW2c/deptfest.jpg"
                      alt="courses"
                    />
                  </div>
                  <div className="courses_content">
                    <div className="courses_author d-flex">
                      <div className="author_name media-body">
                        <a href="https://islengg.ac.in">Projects</a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="https://islengg.ac.in">
                        Departmental Projects Showcase by the Students in every
                        Semester{' '}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why_choose_area pt-60 pb-130">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="why_choose_content">
                  <div className="section_title pb-20">
                    <h3 className="main_title">Why choose us?</h3>
                    <p>
                      What do you think is better to receive after each lesson:
                      a lovely looking badge or important skills you can
                      immediately put into practice.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 choose_col">
                      <div className="single_choose mt-30">
                        <div className="choose_icon">
                          <img
                            src="https://lh3.googleusercontent.com/UopasBK0MROxPtM_TUdzm7JYICXE9JjsEITRfA9TCnaOsubTyMzJxu8Zj33UxXGbtz3PylJ78CsVRvzM9MCayBM0VC5QN3iL1B3t_v29rpmLH37I12qYXhTRhFf7yPPeX1RM-1a9MQoizqUZbeLMqD2f4S0tG0hCUF2fOVx3RzW6yHEiYovaezHhSd-1IX4HkN-2S5O2acRD-r15xl38-7cCrX8D5-cI0PCGz-EPHDcdTpdeu4UuRZ1s-DRmIDYJ9D5NjC-QjgIEWwNAJYhO3T7vDKmq2cKHFxeNXEG2c6Gc7iCDSfGWNJAHoqHSyeotGrB4-JuR6JJpv6BA1bCtuTjT97rJF8qSpZ3_oZmoAD92smZ7y9ACqzsK5ON7vx4nPEonF6cGKTnfkA5-vzCuuRoa18bZOcwLc0pTVbT3YNxObb4cGe5Y7WcE2MhgJo0WMqotfOLOGqPx_j7cNv_yXWApJgMFLJKnr_2u8czs5r7I5SiGeRaHINxbyrAKRBtp1pVBc46tcC2o4IXTp-aMkfQGHosRM7euiU46Zyr2AUaCtMgjdbudDsk67o730y87pCFhSI4u2-iquMk8ZUyVKiJiF1jpxZP8msgMw8Fq__cMbbeFHleJaLFefhLzBtuXL51nkuLy2VZup6qhsBaDudazrm96yvxAaaDNhjqtfqtZh81CUdxjXnjdgtc2CA=s40-no?authuser=1"
                            alt="Icon"
                          />
                        </div>
                        <div className="choose_content">
                          <h5 className="title">
                            <a href="#/">Big Library</a>
                          </h5>
                          <p>
                            What do you think is better to receive after each
                            lesson: a lovely looking .
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 choose_col">
                      <div className="single_choose mt-30">
                        <div className="choose_icon">
                          <img
                            src="https://lh3.googleusercontent.com/VDn3paKPgUap8_Lx2q6VfQm6j03-mhT_NoDFCr6pWFl4zkMI6SW82O2s2BJZtIvVFcgtHqosb6Mh5VSBnbtULzyk_Moi7QId6RN2ehQX3_SfcNUg169CZDPJttCDgNVFp1PyduvNV2od5_sypenm3KZrBJpXAu0QTi7MEwHyztT_B25KJXPnHdWpMznZ4bcUILbPAqwmBFa1wbMM5f_MfE3Y_DyYGtdeDrUL6T-i1Wdgc5cS-IEYjnDbPaetHXWvLtiotOCxJxJQAeKs0EHUQwrfs51WxtBFyKgF3dciCCpRI3TqS-0cK0ZVxeQ2lN0Ip0Ad-OhT5hyOQHtAHrMxtUT6625mBec-F4WEG6pkSoTZX-VXYM9KlnkFBkWp0DZutkeOmsGMmB5cZm5aT3TW9dhfCWUMkM7PVmPkR2mo0B4k_PFCr6hKsNfp96yjtx_tf-KF1yoZzh_Xt4LBi0ZbLfYdHhIELsxhr1M5TlHeLS02_j9HOx465yu4n1_vTOy2UUrA3BaLhluotbNytfn5DnbIyGu65ok_a8yOcj9CK4NYKr7-treWK26GmxofK8QLhGN0YHrkHGfL6yBOrYK5r-zSx9n4tGgEK_tvNkE1H_tA4xsQQMcvXjM6gLkoS-dbSGfPUyOZ4tySGu5NdH0eDSSpQ3jDAce20fJ7hjBEOKF1-MwOa8sSfWrWTYxUhw=s40-no?authuser=1"
                            alt="Icon"
                          />
                        </div>
                        <div className="choose_content">
                          <h5 className="title">
                            <a href="#/">Certification</a>
                          </h5>
                          <p>
                            What do you think is better to receive after each
                            lesson: a lovely looking .
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 choose_col">
                      <div className="single_choose mt-30">
                        <div className="choose_icon">
                          <img
                            src="https://lh3.googleusercontent.com/6GA-t7YPB92Uz_MG6pdEE7W1nVKYXz6MY5cohlacbHT04JrpWCj-qssVnJzX0Erm_onYj5Oqe0tNxAeKZdyi2njjiYcS1K0lvw0LS7PSD-n6G38JPL7vRFv5AO7kYNsv7OO_JdfYyhWzyTG2HZAxJi7LCkeLuJFC_uNw5wThpQJwgb9A03Zjwi9NCcmG96GifYb0Kz9a-_mqmgHwrhIN40oltPdywZQAWtLsqUMXKhHpF6JRuFXc31O3v_ayib9To06f5uZd84afaaK4awfm_pEXw1Dlpcy2vBEgip8g9A4QxETGYuuwaMpOFAZww0rRBSnfWSLs_FmEZyfmH6mMsWPJy2Aa82V60H2whyKs98okOdfTuTFieJVGMU5uHo7IKDFWIUjrRczRWSLfsl7g9juH9fUqfFpulpRRR78HB1k9zSQ7TvhFOCsTwS5_33jnL_8OZeZXRn12tyn08b_NnfovbH8ku8KRc2nqnaqL5Q5Kv-r7n4NScMXYt_jVJLfDjiGc4mvb-h5hDtZeNRMlNwesjy9Bck2E-pIVcq8r-2FgxOUR8mxm2Re5evLpV0j6NVuKCTfdWW4HUCPFjvluRWPrRMHhLScTgPfP0V8LY0cxRzoH4wzAspeEhEu3K09Cz_hJ6biEU_Stso41Sf4UGnVdKn-t65nDO88uBP53_1MSHRs43ZlJ9pYoNmFoRQ=s40-no?authuser=1"
                            alt="Icon"
                          />
                        </div>
                        <div className="choose_content">
                          <h5 className="title">
                            <a href="#/">Alumnai</a>
                          </h5>
                          <p>
                            What do you think is better to receive after each
                            lesson: a lovely looking .
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 choose_col">
                      <div className="single_choose mt-30">
                        <div className="choose_icon">
                          <img
                            src="https://lh3.googleusercontent.com/VDn3paKPgUap8_Lx2q6VfQm6j03-mhT_NoDFCr6pWFl4zkMI6SW82O2s2BJZtIvVFcgtHqosb6Mh5VSBnbtULzyk_Moi7QId6RN2ehQX3_SfcNUg169CZDPJttCDgNVFp1PyduvNV2od5_sypenm3KZrBJpXAu0QTi7MEwHyztT_B25KJXPnHdWpMznZ4bcUILbPAqwmBFa1wbMM5f_MfE3Y_DyYGtdeDrUL6T-i1Wdgc5cS-IEYjnDbPaetHXWvLtiotOCxJxJQAeKs0EHUQwrfs51WxtBFyKgF3dciCCpRI3TqS-0cK0ZVxeQ2lN0Ip0Ad-OhT5hyOQHtAHrMxtUT6625mBec-F4WEG6pkSoTZX-VXYM9KlnkFBkWp0DZutkeOmsGMmB5cZm5aT3TW9dhfCWUMkM7PVmPkR2mo0B4k_PFCr6hKsNfp96yjtx_tf-KF1yoZzh_Xt4LBi0ZbLfYdHhIELsxhr1M5TlHeLS02_j9HOx465yu4n1_vTOy2UUrA3BaLhluotbNytfn5DnbIyGu65ok_a8yOcj9CK4NYKr7-treWK26GmxofK8QLhGN0YHrkHGfL6yBOrYK5r-zSx9n4tGgEK_tvNkE1H_tA4xsQQMcvXjM6gLkoS-dbSGfPUyOZ4tySGu5NdH0eDSSpQ3jDAce20fJ7hjBEOKF1-MwOa8sSfWrWTYxUhw=s40-no?authuser=1"
                            alt="Icon"
                          />
                        </div>
                        <div className="choose_content">
                          <h5 className="title">
                            <a href="#/">Abroad Student</a>
                          </h5>
                          <p>
                            What do you think is better to receive after each
                            lesson: a lovely looking .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="why_choose_image d-none d-lg-table">
            <div className="image">
              <img
                src="https://lh3.googleusercontent.com/-e3FkBVVyu6izCtUHAFflSvKeHjcrQHkfvcP24e9b1-7BlE0g-oQ41WJHFZcaX4ZmDhqIopoDhULpTMIy3hpc2tNHc2oOrArFPfedBU_h_JFR8vVxagWUOYYwP_tZ3Oc5aaKd-9Aj8FUjwXL2yqyzTqWFHvVE9dvmFXTPR020X0m8dYG40sPvCviihB6RysjXJdPTCtAPkScLz6nNQInPGQQ2JCDYPD7X0uhH7Vdq9DKXXqYTSKvh01v-PBe4N3zFlzte2fsYVdrR0CYDcylXtHTrwQyGgf3FfTjU2AvScUtWm98V5Qigrr1q8fxrEi4xJ-bArERVVJ1Tntt1QwjV86F_g7VAWxYYQvKWI0Ia8gtofJo7s7-_pTtIC_tJoAmu9nmMjaog72fy6Plm3BOrvZoge9yuIbfgfSeWmNqsQBgzklkJzFfWYd8cFvx0RuGmrel9gIzjTGYPRhTYN0AMaIWBBB3-QBY2l3Co5X5-e7fGoLo0B8sdiYqOMNi3BwfojQDL7i7D2kwBw4ios9z82Ne7_d_2nprz5dqg9hOkfVamUe-_M8vym5SVKn84hbGvgOnrbWHsrRvj-TZ25EA6wB8wOXhXTxOqBTWrsgHeTV4vDMlfkpV00sObbJc7KIhRaxNkSZ6LUIXJJGPQvtqrFKjX_5aNJKMP2lR61HH0xx-SE4LhE2AeSqv3u-m-w=w792-h635-no?authuser=1"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="about_area_2 d-flex flex-wrap">
          <div className="about_video bg_cover">
            <div className="video">
              <ModalVideo
                channel="youtube"
                isOpen={this.state.isOpen}
                videoId="CO3CerM4mYQ"
                onClose={() => this.setState({ isOpen: false })}
              />
              <a
                href="#play"
                onClick={this.openModal}
                className="Video-popup video_play"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>

          <div className="about_content_2">
            <div className="single_about_2 d-flex flex-wrap about_color_2">
              <div className="about_2_content">
                <div className="about_2_content_wrapper">
                  <h4 className="title">
                    <a href="#/">Scholarships</a>
                  </h4>
                  <p>
                    What do you think is better to receive after each lesson: a
                    lovely looking
                  </p>
                  <a href="#/" className="main-btn">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="about_2_image a2b1 bg_cover"></div>
            </div>

            <div className="single_about_2 d-flex flex-wrap about_color_2">
              <div className="about_2_content order-md-last">
                <div className="about_2_content_wrapper">
                  <h4 className="title">
                    <a href="#/">Alumnai</a>
                  </h4>
                  <p>
                    What do you think is better to receive after each lesson: a
                    lovely looking
                  </p>
                  <a href="#/" className="main-btn">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="about_2_image a2b2 bg_cover order-md-first"></div>
            </div>
          </div>
        </section>

        <section className="student_work">
          <Container className="pt-60 pb-60">
            <div className="site-heading text-left">
              <h2>
                STUDENT <span className="text-white">LIFE</span>
              </h2>
            </div>
            <abbr className="all-research-btn2">
              <a href="https://islengg.ac.in">
                View All{' '}
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </abbr>
            <Row>
              <Col xl={5} lg={5} md={4} className="mb-20">
                <div className="student_work_overlay1">
                  <span>
                    <img
                      src="https://i.ibb.co/bNjZMsx/ecedeve-1.jpg"
                      id=""
                      alt="Img"
                    />
                  </span>
                  <p>
                    &#8220;
                    <span className="font-weight-bold">
                      Robot that can deliver medicines to patients{' '}
                    </span>
                    &#8221;. ECE Department Students recieved invitation from
                    Chief Secretary Telangana
                  </p>
                </div>
              </Col>

              <Col xl={7} lg={7} md={8}>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6 mb-20">
                    <div className="student_work_overlay student_work_img">
                      <img
                        src="https://i.ibb.co/LDFwDrn/slider5.png"
                        alt="Img"
                      />
                      <h4>360 &#176; Campus & curriculum</h4>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6 mb-20">
                    <div className="student_work_overlay student_work_img">
                      <img
                        src="https://i.ibb.co/3W470k0/events.png"
                        alt="Img"
                      />
                      <h4>Fun-Filled College Events</h4>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6 mb-20">
                    <div className="student_work_overlay student_work_img">
                      <img
                        src="https://i.ibb.co/44qxW1L/outbound.png"
                        alt="Img"
                      />
                      <h4>College Sponsored Out-bound Participations</h4>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-6 col-xl-6 mb-20">
                    <div className="student_work_overlay student_work_img">
                      <img
                        src="https://i.ibb.co/b6mfmDY/enthusiac.jpg"
                        alt="Img"
                      />
                      <h4>Participation in National Level Sporting Events</h4>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* <section className="dvideo-feature pt-60 pb-110">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-center order-last order-lg-first">
                <div className="dvideo pt-50">
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="CO3CerM4mYQ"
                    onClose={() => this.setState({ isOpen: false })}
                  />
                  <a
                    href="#play"
                    onClick={this.openModal}
                    className="Video-popup"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 order-first order-lg-last">
                <div className="vfeature pt-50">
                  <div className="single-feature">
                    <div className="icon">
                      <img
                        src="https://i.ibb.co/yfhVX06/Website-Logo.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                    <div className="content pt-3">
                      <p>
                        <ReadMoreAndLess
                          ref={this.ReadMore}
                          className="read-more-content"
                          charLimit={310}
                          readMoreText="Read more"
                          readLessText="Read less"
                        >
                          ISL Engineering College offers a holistic approach
                          towards teaching &amp; learning. It offers six
                          Undergraduate courses and one Postgraduate course. The
                          Bachelor of Engineering degree equips you with an
                          Enlightened Vision, Steadfast Mission and Focused
                          Objectives which transforms your aspirations into
                          achievements. Our 4-year BE programe provides you with
                          the skills you need to succeed and move on to a career
                          or higher education. The environment in which you
                          learn is also important, so at ISL Engineering college
                          we have the latest technology, well equipped labs and
                          all important library facilities. The campus offers
                          you with buzzing lounges, canteen, basketball court,
                          TT zone, snooker area and lush green lawns.
                        </ReadMoreAndLess>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-bg"></div>
        </section> */}

        <section className="guest pt-60 pb-50">
          <div className="site-heading text-center">
            <h2>Listen to the Best Minds</h2>
          </div>
          <Container>
            <Row noGutters className="text-center">
              <Col lg={6} className="guest_col_1">
                <div className="single_guest d-sm-flex flex-wrap align-items-center">
                  <img
                    className="guest_arrow"
                    src="https://i.ibb.co/25W559r/left.png"
                    alt="left"
                  />
                  <div className="team_image">
                    <img src="https://i.ibb.co/xjXCp00/2.png" alt="team" />
                  </div>
                  <div className="team_content">
                    <div className="team_content_wrapper">
                      <h4 className="title">
                        <a href="https://islengg.ac.in">Ansar Shaikh</a>
                      </h4>
                      <span>Youngest IAS Officer</span>
                    </div>
                  </div>
                </div>

                <div className="single_guest d-sm-flex flex-wrap align-items-center flex-row-reverse">
                  <img
                    className="guest_arrow"
                    src="https://i.ibb.co/hZCCYRn/right.png"
                    alt="left"
                  />
                  <div className="team_image">
                    <img src="https://i.ibb.co/bjVw1CG/1.jpg" alt="team" />
                  </div>
                  <div className="team_content">
                    <div className="team_content_wrapper">
                      <h4 className="title">
                        <a href="https://islengg.ac.in">Javed Jaffrey</a>
                      </h4>
                      <span>Actor, Philanthropist</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="team_col_2">
                <div className="single_guest d-sm-flex flex-wrap align-items-center">
                  <img
                    className="guest_arrow"
                    src="https://i.ibb.co/25W559r/left.png"
                    alt="left"
                  />
                  <div className="team_image">
                    <img
                      src="https://i.ibb.co/3TCsQB6/EUUu-WKGXg-AAe-Pv-V.jpg"
                      alt="team"
                    />
                  </div>
                  <div className="team_content">
                    <div className="team_content_wrapper">
                      <h4 className="title">
                        <a href="https://islengg.ac.in">Simerjeet Singh</a>
                      </h4>
                      <span>International Motivational Speaker</span>
                    </div>
                  </div>
                </div>
                <div className="single_guest d-sm-flex flex-wrap align-items-center flex-row-reverse">
                  <img
                    className="guest_arrow"
                    src="https://i.ibb.co/hZCCYRn/right.png"
                    alt="left"
                  />
                  <div className="team_image">
                    <img
                      src="https://i.ibb.co/K6NwnJv/unnamed.jpg"
                      alt="team"
                    />
                  </div>
                  <div className="team_content">
                    <div className="team_content_wrapper">
                      <h4 className="title">
                        <a href="https://islengg.ac.in">Wali Rehmani</a>
                      </h4>
                      <span>Social Entrepreneur | Social Activist</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    )
  }
}

export default Home
