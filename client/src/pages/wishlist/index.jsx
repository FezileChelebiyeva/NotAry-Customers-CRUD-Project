import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCustomer } from "../../redux/slice/wishlistSlice";
import "./index.scss";
const WishList = () => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer);

  return (
    <div id="wishlist">
      <div className="container">
        <div className="wishlist">
          <div className="cards">
            {customer?.data?.map((element) => {
              return (
                <div key={element._id} className="card">
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
                  <div className="btn">
                    <button
                      onClick={() => dispatch(removeCustomer(element._id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
