import React from "react";
import classNames from "classnames";

const TabNavigation = ({ tabs, activeTab,setActiveTab,onTabChange }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <>
      <nav className="invoice-tab">
        {tabs.map((tab) => (
          <span
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={classNames(
              "tab-container",
              activeTab === tab ? "active" : ""
            )}
          >
            <span className="tab-label">{tab}</span>
            
          </span>
        ))}
      </nav>
      </>
  );
};



export default TabNavigation;
