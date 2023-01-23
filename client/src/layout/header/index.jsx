import React from "react";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "./index.scss"
const Header = () => {
  const items = [
    {
      key: "1",
      label: <Link>Bankruptcy Law</Link>,
    },
    {
      key: "2",
      label: <Link>Business Law</Link>,
    },
    {
      key: "3",
      label: <Link>Civil Rights Law</Link>,
    },
    {
      key: "4",
      label: <Link>Criminal Law</Link>,
    },
    {
      key: "5",
      label: <Link>Immigration Law</Link>,
    },
    {
      key: "6",
      label: <Link>Family Law</Link>,
    },
  ];

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <h2>Notary</h2>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <Link
                    to={"/practice-areas"}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      Practice Areas
                      <DownOutlined />
                    </Space>
                  </Link>
                </Dropdown>
              </li>
              <li>
                <Link to={"/wishlist"}>Wishlist</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/add-customers"}>Add Customers</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
