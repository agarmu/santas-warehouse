import { InputField } from 'components/form';
import Layout from 'components/layout';
import { Formik, Field } from 'formik';
import * as React from 'react';

const apiEndpoint = `/api/contact`;

interface IProps {
  type?: string;
}

interface IState {
  submitted: boolean;
  errors: string[];
}

class Contact extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      submitted: false,
      errors: [],
    };
  }

  render(): React.ReactNode {
    const { errors, submitted } = this.state;
    return (
      <div>
        {errors.length > 0 && (
          <div className="alert alert-danger">
            <ul className="list-group">
              {errors.map((error: string) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        {submitted ? (
          <h1 className="text-center">
            <span className="badge badge-success">
              Thank you for your input!
            </span>
          </h1>
        ) : (
          <Formik
            onSubmit={(data) => {
              fetch(apiEndpoint, {
                method: `POST`,
                mode: `same-origin`,
                cache: `no-cache`,
                credentials: `same-origin`,
                headers: {
                  'Content-Type': `application/json`,
                },
                body: JSON.stringify(data),
              })
                .then(async (res) => {
                  const { status } = res;
                  const resData = await res.json();
                  if (status === 200) {
                    this.setState({ submitted: true });
                    this.setState({ errors: [] });
                  } else {
                    this.setState({ submitted: false });
                    this.setState({ errors: resData.error.request });
                  }
                })
                .catch((err) => {
                  this.setState({ errors: [`Server error: ${err}`] });
                  this.setState({ submitted: false });
                });
            }}
            initialValues={{
              name: ``,
              email: ``,
              comments: ``,
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="name"
                  component={InputField}
                  label="Name"
                  className="form-control"
                  placeholder="John Doe"
                />
                <Field
                  name="email"
                  component={InputField}
                  label="Email"
                  className="form-control"
                  placeholder="abc@def.com"
                />
                <Field
                  name="comments"
                  component={InputField}
                  label="Comments"
                  className="form-control"
                  placeholder="Whatever you'd like to say."
                />
                <button className="form-control btn btn-primary" type="submit">
                  Submit
                </button>
              </form>
            )}
          </Formik>
        )}
      </div>
    );
  }
}

export default function ContactForm() {
  return (
    <Layout title="Contact Us">
      <Contact />
    </Layout>
  );
}
