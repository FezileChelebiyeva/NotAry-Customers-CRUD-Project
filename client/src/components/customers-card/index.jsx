import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/dataSlice";
import { Input } from "antd";
import { Button } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";
import { addCustomer, removeCustomer } from "../../redux/slice/wishlistSlice";
const CustomersCard = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers);
  const customer = useSelector((state) => state.customer);
  useEffect(() => {
    dispatch(fetchData(""));
  }, []);
  const handleAddWishlist = (customer) => {
    dispatch(addCustomer(customer));
  };
  const handleRemoveWishlist = (id) => {
    dispatch(removeCustomer(id));
  };
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
                  <div className="customer">
                    <Link to={`/${element._id}`}>
                      <div className="img">
                        <img src={element.image} alt="" />
                      </div>
                    </Link>
                    <div className="info">
                      <Link to={`/${element._id}`}>
                        <p className="name">{element.name}</p>
                      </Link>
                      <p className="department">{element.department}</p>
                    </div>
                    {customer?.data?.find((elem) => elem?._id === element?._id) ? (
                      <div onClick={() => handleRemoveWishlist(element._id)} className="icon">
                        <i className="fa-solid fa-heart"></i>
                      </div>
                    ) : (
                      <div
                        onClick={() => handleAddWishlist(element)}
                        className="icon"
                      >
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    )}
                  </div>
                  <p className="description">"{element.description}"</p>
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
