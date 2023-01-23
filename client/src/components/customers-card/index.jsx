import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/dataSlice";
import { Input } from "antd";
import { Button } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";
const CustomersCard = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers);
  useEffect(() => {
    dispatch(fetchData(""));
  }, []);

  return (
    <div id="customers">
      <div className="container">
        <div className="customers">
          <h1>Happy Customers</h1>
          <div className="form">
            <Input
              onChange={(e) => dispatch(fetchData(e.target.value))}
              placeholder="Search customer..."
            />
          </div>
          <div className="cards">
            {customers?.data?.map((element) => {
              return (
                <div key={element._id} className="card">
                  <Link to={`/${element._id}`}>
                    <div className="customer">
                      <div className="img">
                        <img src={element.image} alt="" />
                      </div>
                      <div className="info">
                        <p className="name">{element.name}</p>
                        <p className="department">{element.department}</p>
                      </div>
                    </div>
                    <p className="description">"{element.description}"</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersCard;
