import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Formik Submitted:", values);
      }}
    >
      {() => (
        <Form className="registration-form">
          <div>
            <label htmlFor="username">Username:</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
          </div>

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}
