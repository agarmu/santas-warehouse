import React from 'react';
import Layout from 'components/layout';

export default function Feedback() {
  return (
    <Layout>
      <p> Hello, World! </p>
      <form action>
        <div className="form-group">
          <label htmlFor="fname">
            First Name
            <br />
            <input id="fname" type="text" placeholder="Enter your Name" />
          </label>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="ftel">
            Mobile:
            <br />
            <input
              id="ftel"
              type="tel"
              placeholder="Enter your Mobile Number"
            />
          </label>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="fmail">
            Email Address:
            <br />
            <input
              id="fmail"
              type="email"
              placeholder="Enter your Email Address"
            />
          </label>
        </div>

        <br />
        <div className="form-group">
          <label htmlFor="fname">Queries</label>
          <br />
          <input type="long" placeholder="please tell us your queries" />
        </div>
        <input type="submit" />
      </form>
    </Layout>
  );
}
