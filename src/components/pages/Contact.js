import React from "react";


function Contact() {
  const styles = {
    header: {
      color: "rgb(21, 196, 154)",
      textAlign: "left"
    }
  }
  return (
    <main className="container">
      <br />
      <br />
      <div className="row">
        <div className="col">
          <form  method="post" action="contact.php" className="formcontainer">
            <header style={styles.header}>
              <h1>Contact</h1>
            </header>
            <hr />
            <div className="form-group">
                <label htmlFor="form_name">Name</label>
                <input id="form_name" type="text" name="name" className="form-control" placeholder="First and Last name" required="required" data-error="Name is required" />
                <br/>

              <label htmlFor="form_email">Email address</label>
    
              <input
              id="form_email"
                type="email"
                name="email"
                className="form-control"
               
                aria-describedby="emailHelp"
                placeholder="example@gmail.com"
                required="required"
                data-error="Valid email is required."
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="mb-3">
                <label form="Message">Message</label>
                {/* <!-- id="validationTextarea" --> */}
                <textarea id="form_message" name="message" className="form-control"  placeholder="Please type your message here..." rows="4" required="required" data-error="Please,leave us a message."/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </main>
  );
}

export default Contact;
