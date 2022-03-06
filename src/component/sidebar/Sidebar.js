import React, { Component } from "react";
import github from '../../assets/images/github.png'
import stackoverflow from '../../assets/images/stackoverflow.png'
import linkedin from '../../assets/images/linkedin.png'

class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-12 col-lg-4">
        <div className="sidebar">
          <div id="connect">
            <h2>Connect with Me</h2>

            <a href="#">
              <img
                src={github}
                className="social"
                alt="GitHub"
              />
            </a>
            <a href="#">
              <img
                src={linkedin}
                className="social"
                alt="LinkedIn"
              />
            </a>
            <a href="#">
              <img
                src={stackoverflow}
                className="social"
                alt="Stackoverflow"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
