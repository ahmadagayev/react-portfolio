import React, { Component } from 'react'
import cat from '../../assets/images/cat.jpg'
class About extends Component {
  render() {
    return (
        <div className=" col-md-12 col-lg-8">
          <article>
            <h2>About Me</h2>
            <div className="context">
              <img src={cat} alt=""/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident fuga, quibusdam totam veritatis
                quis ducimus. Laudantium tempore pariatur eum, labore ad quaerat voluptas quam repellat, vitae hic sunt
                eligendi voluptatibus cupiditate illum laboriosam animi ut temporibus eaque, deleniti molestiae! Iusto
                voluptate minus, sequi neque doloribus ipsum veritatis delectus. Reiciendis, temporibus! <br/>Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Vel provident molestias accusantium quia labore esse
                laborum est voluptate saepe magnam.</p>

            </div>
          </article>
        </div>
    )
  }
}

export default About;