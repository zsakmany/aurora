import React from "react";
import PropTypes from "prop-types";

const OverflowIcon = ({ size, color, children, ...props }) => (
  <svg {...props} viewBox="0 0 5 21" width={size} height={size} fill={color}>
    {children}
    <path d="M0 2.5C0 1.81.242 1.22.727.732A2.394 2.394 0 0 1 2.492 0a2.42 2.42 0 0 1 1.773.732C4.755 1.221 5 1.81 5 2.5s-.245 1.28-.735 1.768A2.42 2.42 0 0 1 2.492 5C1.8 5 1.212 4.756.727 4.268A2.418 2.418 0 0 1 0 2.5zm0 8.008c0-.692.242-1.283.727-1.773A2.39 2.39 0 0 1 2.492 8c.692 0 1.283.245 1.773.735S5 9.815 5 10.508a2.39 2.39 0 0 1-.735 1.765A2.43 2.43 0 0 1 2.492 13c-.692 0-1.28-.242-1.765-.727A2.403 2.403 0 0 1 0 10.508zM0 18.5c0-.69.242-1.28.727-1.768A2.394 2.394 0 0 1 2.492 16a2.42 2.42 0 0 1 1.773.732c.49.489.735 1.078.735 1.768s-.245 1.28-.735 1.768A2.42 2.42 0 0 1 2.492 21c-.692 0-1.28-.244-1.765-.732A2.418 2.418 0 0 1 0 18.5z" />
  </svg>
);

OverflowIcon.displayName = "OverflowIcon";

OverflowIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node
};

OverflowIcon.defaultProps = {
  children: null
};

export default OverflowIcon;
