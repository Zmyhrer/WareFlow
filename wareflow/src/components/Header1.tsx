"use client";

import React from "react";
import "./Header1.css";
import { MenuProps, Dropdown, message, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const Header1: React.FC = () => {
  const onClick: MenuProps["onClick"] = ({ key }: { key: string }) => {
    message.info(`Click on item ${key}`);
  };

  const firstItems: MenuProps["items"] = [
    { label: "firstItems 1", key: "1" },
    { label: "firstItems 2", key: "2" },
    { label: "firstItems 3", key: "3" },
    { label: "firstItems 4", key: "4" },
  ];

  const secondItems: MenuProps["items"] = [
    { label: "secondItems 1", key: "5" },
    { label: "secondItems 2", key: "6" },
    { label: "secondItems 3", key: "7" },
    { label: "secondItems 4", key: "8" },
  ];

  const thirdItems: MenuProps["items"] = [
    { label: "thirdItems 1", key: "9" },
    { label: "thirdItems 2", key: "10" },
    { label: "thirdItems 3", key: "11" },
    { label: "thirdItems 4", key: "12" },
  ];

  const fourthItems: MenuProps["items"] = [
    { label: "fourthItems 1", key: "13" },
    { label: "fourthItems 2", key: "14" },
    { label: "fourthItems 3", key: "15" },
    { label: "fourthItems 4", key: "16" },
  ];

  return (
    <div className="header-container">
      <div className="header-left-container">
        <FontAwesomeIcon className="icon" icon={faTruck} />
      </div>
      <div className="header-right-container">
        <div className="navbar-container">
          <Dropdown menu={{ items: firstItems, onClick }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Item 1
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown menu={{ items: secondItems, onClick }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Item 2
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown menu={{ items: thirdItems, onClick }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Item 3
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown menu={{ items: fourthItems, onClick }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Item 4
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header1;
