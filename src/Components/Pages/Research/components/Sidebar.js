import React from 'react'

class Sidebar extends React.Component {

  render() {
    return (
        <React.Fragment>
            <div className="sidebar-item category mt-30">
                <div className="title">
                    <h4>important Links</h4>
                </div>
                <div className="sidebar-info">
                    <ul>
                        <li>
                            <a href="https://islec.edu.in/research/activities">
                                R & D Cell Activities and Events
                                <span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://islec.edu.in/research/facilities">
                                Facilities & Research infrastructure
                                <span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/RnD-VisionMission.pdf">
                                Vision & Mission
                                <span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </span>
                            </a>
                        </li>

                        <li>
                            <a href="/RnD-Policy.pdf" target="_blank">
                                Research policy
                                <span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/RnD-External_Sponsorship.pdf" target="_blank">
                                External Sponsorship Policy
                                <span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                MOUs
                                <span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
  }
}

export default Sidebar
