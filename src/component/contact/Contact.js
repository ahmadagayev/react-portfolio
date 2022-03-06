import React, { Component } from 'react'

 class Contact extends Component {
  render() {
    return (
        <div className=" col-md-12 col-lg-8 mb-4">
        <article>
          <h2>Contact</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Smith" />
            <label htmlFor="email">Email</label>
            <input type="email" id="name" placeholder="example@gmail.com" />
            <label htmlFor="message">Message</label>
            <textarea id="message" cols="30" rows="10"></textarea>
            <button>Submit</button>
          </form>
        </article>
      </div>
    )
  }
}

export default Contact;