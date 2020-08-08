import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <div className="sidebar-item category">
          <div className="title">
            <h4>Quick Links</h4>
          </div>
          <div className="sidebar-info">
            <ul>
              <li>
                <a href="/admissions">
                  Admissions{" "}
                  <span>
                    <i className="fa fa-file" aria-hidden="true"></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="#/b">
                  Courses Offered{" "}
                  <span>
                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="#/b">
                  Rules & Regulations{" "}
                  <span>
                    <i className="fa fa-list" aria-hidden="true"></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="#/b">
                  College Booklet{" "}
                  <span>
                    <i className="fa fa-list" aria-hidden="true"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Sidebar;
