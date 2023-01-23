import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import "./index.scss";
import { customersSchema } from "../../schema";
import { postData } from "../../redux/slice/dataSlice";
const AddCustomers = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        image: "",
        name: "",
        department: "",
        description: "",
      },
      validationSchema: customersSchema,
      onSubmit: (values) => {
        dispatch(postData(values));
        resetForm();
      },
    });
  return (
    <div id="add-page">
      <div className="container">
        <div className="add-page">
          <h1>Add New Customers</h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input">
                <input
                  id="image"
                  name="image"
                  type="text"
                  onChange={handleChange}
                  value={values.image}
                  placeholder="Image"
                />
                {errors.image && touched.image && (
                  <p
                    style={{ color: "red", fontSize: "14px", margin: "5px 0" }}
                  >
                    {errors.image}
                  </p>
                )}
              </div>
              <div className="input">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Name"
                />
                {errors.name && touched.name && (
                  <p
                    style={{ color: "red", fontSize: "14px", margin: "5px 0" }}
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="input">
                <input
                  id="department"
                  name="department"
                  type="text"
                  onChange={handleChange}
                  value={values.department}
                  placeholder="Department"
                />
                {errors.department && touched.department && (
                  <p
                    style={{ color: "red", fontSize: "14px", margin: "5px 0" }}
                  >
                    {errors.department}
                  </p>
                )}
              </div>

              <div className="input">
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  onChange={handleChange}
                  value={values.description}
                  placeholder="Description"
                />
                {errors.description && touched.description && (
                  <p
                    style={{ color: "red", fontSize: "14px", margin: "5px 0" }}
                  >
                    {errors.description}
                  </p>
                )}
              </div>
              <div className="btn">
                <button type="submit">Add Customer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomers;
