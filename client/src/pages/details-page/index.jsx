import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.scss";
import { deleteData } from "../../redux/slice/dataSlice";
const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState({});
  const getDataById = async () => {
    const response = await axios.get(`http://localhost:8080/customers/${id}`);
    setCustomer(response.data);
  };
  useEffect(() => {
    getDataById();
  }, []);

  return (
    <div id="details">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{customer.name}</title>
      </Helmet>
      <div className="container">
        <div className="details">
          <div className="img">
            <img src={customer?.image} alt="" />
          </div>
          {console.log(customer)}
          <div className="about">
            <h1>{customer?.name}</h1>
            <div className="department">{customer?.department}</div>
            <p className="description">{customer?.description}</p>
            <div className="btn">
              <button
                onClick={() => {
                  dispatch(deleteData(id));
                  navigate("/");
                }}
              >
                Delete Customer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
