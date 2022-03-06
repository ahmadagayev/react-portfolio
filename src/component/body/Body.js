import React, { Component } from "react";
import Sidebar from "../sidebar/Sidebar";
import About from "../about/About";
import Project from "../project/Project";
import Contact from "../contact/Contact";
import background from "../../assets/images/concrete_seamless.png";

class Body extends Component {
  render() {
    if(this.props.page==='About'){
      return (
        <section style={{ backgroundImage: `url(${background})` }}>
          <div className="container background">
            <div className="row mb-5 ">
              <About />
              <Sidebar />
            </div>
          </div>
        </section>
      );
    }else if(this.props.page==='Projects'){
      return (
        <section style={{ backgroundImage: `url(${background})` }}>
          <div className="container background">
            <div className="row mb-5 ">
              <Project/>
              <Sidebar />
            </div>
          </div>
        </section>
      );
    }else{
      return (
        <section style={{ backgroundImage: `url(${background})` }}>
          <div className="container background">
            <div className="row mb-5 ">
              <Contact />
              <Sidebar />
            </div>
          </div>
        </section>
      );
    }
  }
}

export default Body;


