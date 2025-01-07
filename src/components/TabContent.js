import React, { forwardRef } from "react";
import PropTypes from "prop-types";

// Forward ref to allow parent component to access DOM node
const TabContent = forwardRef(({ tabId, children }, ref) => {
  return (
    <div id={tabId} className="tab-section" ref={ref} style={{ margin: "20px 0" }}>
      {children}
    </div>
  );
});

// Define expected prop types
TabContent.propTypes = {
  tabId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default TabContent;