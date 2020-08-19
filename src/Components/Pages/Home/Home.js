import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ModalVideo from 'react-modal-video'
import Karousel from './components/Karousel'
import Reecent from './components/Reecent'
import News from './components/News'
import Check from './components/Check'
import ReadMoreAndLess from 'react-read-more-less'
import Admission from './Enquiry'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      showComponent: false,
    }
    this.openModal = this.openModal.bind(this)
    this._onButtonClick = this._onButtonClick.bind(this)
  }
  _onButtonClick() {
    this.setState({
      showComponent: true,
    })
  }

  openModal() {
    this.setState({ isOpen: true })
  }
  render() {
    return (
      <>
        <div className="nptel">
          <a href="https://nptel.ac.in/" class="nptel_content nptel_label">
            NPTEL
          </a>
        </div>

        <div className="nptel1">
          <a
            href="#/apply"
            class="nptel_content1 nptel_label1"
            onClick={this._onButtonClick}
          >
            Apply Now
          </a>
          {this.state.showComponent ? <Admission /> : null}
        </div>

        <Container fluid style={{ padding: '0px' }}>
          <Karousel />
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

        <section className="">
          <Container fluid>
            <Row>
              <Col md={4} className="pt-25">
                <News />
                <div className="stick-bottom">All News →</div>
              </Col>
              <Col md={4} className="pt-25">
                <Check />
              </Col>
              <Col md={4} className="pt-25">
                <section className="recents mb-25">
                  <div className="site-heading text-left">
                    <h4>Recents </h4>
                  </div>
                  <Row>
                    <Reecent />
                  </Row>
                </section>

                <div className="stick-bottom">All Recents →</div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="courses_area pt-90 pb-50">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                <div className="site-heading text-left">
                  <h2>In-House Events</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-sm-6 mb-10">
                <div class="card">
                  <img
                    className="card-img-top"
                    src="https://i.ibb.co/XVvcsVD/Espirit.jpg"
                    alt="Card "
                  />
                  <div className="card-body">
                    <h6 className="card-title bold">Espirit</h6>
                    <p className="card-text">
                      <ReadMoreAndLess
                        ref={this.ReadMore}
                        className="read-more-content"
                        charLimit={22}
                        readMoreText="Read more"
                        readLessText="Read less"
                      >
                        Espirit is one of the finest Cultural event of ISL
                      </ReadMoreAndLess>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-sm-6 mb-10">
                <div class="card">
                  <img
                    className="card-img-top"
                    src="https://i.ibb.co/b6mfmDY/enthusiac.jpg"
                    alt="Card "
                  />
                  <div className="card-body">
                    <h6 className="card-title bold">Enthusiac</h6>
                    <p className="card-text">
                      <ReadMoreAndLess
                        ref={this.ReadMore}
                        className="read-more-content"
                        charLimit={22}
                        readMoreText="Read more"
                        readLessText="Read less"
                      >
                        Enthusiac is an Annual Sports Meet of ISL. Scintillating
                        performance creates aura of festivit
                      </ReadMoreAndLess>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-sm-6 mb-10">
                <div class="card">
                  <img
                    className="card-img-top"
                    src="https://i.ibb.co/6Rfb82N/eloquence.jpg"
                    alt="Card "
                  />
                  <div className="card-body">
                    <h6 className="card-title bold">Eloquence</h6>
                    <p className="card-text">
                      <ReadMoreAndLess
                        ref={this.ReadMore}
                        className="read-more-content"
                        charLimit={22}
                        readMoreText="Read more"
                        readLessText="Read less"
                      >
                        Eloquence The English Festival of ISL.
                      </ReadMoreAndLess>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-sm-6 mb-10">
                <div class="card">
                  <img
                    className="card-img-top"
                    src="https://i.ibb.co/F5PjW2c/deptfest.jpg"
                    alt="Card "
                  />
                  <div className="card-body">
                    <h6 className="card-title bold">Departmental Projects</h6>
                    <p className="card-text">
                      <ReadMoreAndLess
                        ref={this.ReadMore}
                        className="read-more-content"
                        charLimit={22}
                        readMoreText="Read more"
                        readLessText="Read less"
                      >
                        Departmental Projects Showcase by the Students in every
                        Semester
                      </ReadMoreAndLess>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-sm-6 mb-10">
                <div class="card">
                  <img
                    className="card-img-top"
                    src="https://islengg.ac.in/gallery/image/engg.jpg"
                    alt="Card "
                  />
                  <div className="card-body">
                    <h6 className="card-title bold">Engineers Day</h6>
                    <p className="card-text">
                      <ReadMoreAndLess
                        ref={this.ReadMore}
                        className="read-more-content"
                        charLimit={22}
                        readMoreText="Read more"
                        readLessText="Read less"
                      >
                        Engineers Day is celebrated with pomp & grace every year
                        in ISL
                      </ReadMoreAndLess>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-sm-6 mb-10">
                <div class="card">
                  <img
                    className="card-img-top"
                    src="https://www.islengg.ac.in/gallery/image/motivatiospeechsas.jpeg"
                    alt="Card "
                  />
                  <div className="card-body">
                    <h6 className="card-title bold">Motivational Sessions</h6>
                    <p className="card-text">
                      <ReadMoreAndLess
                        ref={this.ReadMore}
                        className="read-more-content"
                        charLimit={22}
                        readMoreText="Read more"
                        readLessText="Read less"
                      >
                        Motivational sessions encourage students to make
                        valuable contributions in their student and professional
                        life.
                      </ReadMoreAndLess>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why_choose_area pt-60 pb-230">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
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
                    <div className="col-sm-4 choose_col  col-xs-6">
                      <div className="single_choose mt-30">
                        <div className="choose_content">
                          <h5 className="title">
                            <a href="#/">Research & Publication</a>
                          </h5>
                          <p>
                            <ReadMoreAndLess
                              ref={this.ReadMore}
                              className="read-more-content"
                              charLimit={70}
                              readMoreText="Read more"
                              readLessText="Read less"
                            >
                              Full fledged Research & Publication team guides
                              the students to publish papers in technical
                              Journals. Paper Publication & project development
                              is integral part of our teaching pedagogy.
                            </ReadMoreAndLess>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 choose_col col-xs-6">
                      <div className="single_choose mt-30">
                        <div className="choose_content">
                          <h5 className="title">
                            <a href="#/">Campus Placements</a>
                          </h5>
                          <p>
                            <ReadMoreAndLess
                              ref={this.ReadMore}
                              className="read-more-content"
                              charLimit={70}
                              readMoreText="Read more"
                              readLessText="Read less"
                            >
                              Campus placements assistance is provided to all
                              eligible students. Domain knowledge testing, mock
                              interviews and soft skills training is held to
                              equip the students with required skills.
                            </ReadMoreAndLess>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 choose_col  col-xs-6">
                      <div className="single_choose mt-30">
                        <div className="choose_content">
                          <h5 className="title">
                            <a href="#/">Certification Courses</a>
                          </h5>
                          <p>
                            <ReadMoreAndLess
                              ref={this.ReadMore}
                              className="read-more-content"
                              charLimit={70}
                              readMoreText="Read more"
                              readLessText="Read less"
                            >
                              In collaboration with Govt and Private Institutes,
                              we offers certification courses during the
                              semester break based on technical requirements.
                            </ReadMoreAndLess>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 choose_col  col-xs-6">
                      <div className="single_choose mt-30">
                        <div className="choose_content">
                          <h5 className="title">
                            <a href="#/">Inter-College Sports</a>
                          </h5>
                          <p>
                            <ReadMoreAndLess
                              ref={this.ReadMore}
                              className="read-more-content"
                              charLimit={70}
                              readMoreText="Read more"
                              readLessText="Read less"
                            >
                              We take immense pride in our sports programs. Be
                              it Cricket, Football, Volleyball, Basketball. ISL
                              has a team to compete at highest level.
                            </ReadMoreAndLess>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-4 choose_col  col-xs-6">
                      <div className="single_choose mt-30">
                        <div className="choose_content">
                          <h5 className="title">
                            <a href="#/">Seminars & Workshops</a>
                          </h5>
                          <p>
                            <ReadMoreAndLess
                              ref={this.ReadMore}
                              className="read-more-content"
                              charLimit={70}
                              readMoreText="Read more"
                              readLessText="Read less"
                            >
                              Workshops on Emerging technologies and Tech
                              Seminars by experts from academia and industry is
                              part of the curricullum. It helps in exposing the
                              students to newer perspectives of existing
                              knowledge.
                            </ReadMoreAndLess>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 choose_col  col-xs-6">
                      <div className="single_choose mt-30">
                        <div className="choose_content">
                          <h5 className="title">
                            <a href="#/">In-House Events</a>
                          </h5>
                          <p>
                            <ReadMoreAndLess
                              ref={this.ReadMore}
                              className="read-more-content"
                              charLimit={70}
                              readMoreText="Read more"
                              readLessText="Read less"
                            >
                              ISL is a vibrant campus where every day comes with
                              brighten opportunities. Back to Back in house
                              events demand a holistic approach towards
                              fulfilling the skill gap existing in the students.
                            </ReadMoreAndLess>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 choose_col  col-xs-6">
                      <div className="single_choose mt-30">
                        <div className="choose_content">
                          <h5 className="title">
                            <a href="#/">Out-Bound Visits</a>
                          </h5>
                          <p>
                            <ReadMoreAndLess
                              ref={this.ReadMore}
                              className="read-more-content"
                              charLimit={70}
                              readMoreText="Read more"
                              readLessText="Read less"
                            >
                              Outbound visits to universities / other colleges
                              is promoted at large scale at ISL Students have
                              visited.
                            </ReadMoreAndLess>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-4 choose_col  col-xs-6">
                      <div className="single_choose mt-30">
                        <div className="choose_content">
                          <h5 className="title">
                            <a href="#/">Industrial Visits</a>
                          </h5>
                          <p>
                            <ReadMoreAndLess
                              ref={this.ReadMore}
                              className="read-more-content"
                              charLimit={70}
                              readMoreText="Read more"
                              readLessText="Read less"
                            >
                              Students are taken to various places to expose
                              them to the real time industrial environment.
                            </ReadMoreAndLess>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-4 choose_col  col-xs-6">
                      <div className="single_choose mt-30">
                        <div className="choose_content">
                          <h5 className="title">
                            <a href="#/">Newsletter</a>
                          </h5>
                          <p>
                            <ReadMoreAndLess
                              ref={this.ReadMore}
                              className="read-more-content"
                              charLimit={70}
                              readMoreText="Read more"
                              readLessText="Read less"
                            >
                              College's newsletter 'EPISTEME' is the canvas for
                              bidding writers, poets and columnist of our times.
                              They paint with stories full of thoughtfullness,
                              wit, critical thinking and emerging ideas.
                            </ReadMoreAndLess>
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
                src="https://i.ibb.co/P6r70fF/Whats-App-Image-2020-08-12-at-17-40-39-1.jpg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="about_area_2 d-flex flex-wrap pt-90">
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
                  <a href="/events" className="main-btn">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="about_2_image a2b1 bg_cover"></div>
            </div>

            <div className="single_about_2 d-flex flex-wrap about_color_2">
              <div className="about_2_content order-md-last">
                <div className="about_2_content_wrapper">
                  <a href="/events" className="main-btn">
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
