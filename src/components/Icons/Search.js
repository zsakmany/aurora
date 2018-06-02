import React from "react";
import { PropTypes } from "prop-types";

const SearchIcon = ({ size, color, children, ...props }) => (
  <svg {...props} viewBox="0 0 16 16" width={size} height={size} fill={color}>
    <title>Search Icon</title>
    <path d="M11.491 6.048c0 .672-.135 1.31-.404 1.897a5.01 5.01 0 0 1-1.102 1.552 5.273 5.273 0 0 1-1.632 1.05 5.39 5.39 0 0 1-3.987 0 5.283 5.283 0 0 1-1.632-1.05 5.01 5.01 0 0 1-1.102-1.552 4.531 4.531 0 0 1-.404-1.897c0-.666.135-1.302.404-1.892.269-.592.64-1.114 1.102-1.552A5.304 5.304 0 0 1 4.366 1.56a5.207 5.207 0 0 1 1.994-.384c.706 0 1.376.13 1.993.384.62.256 1.17.607 1.632 1.045.462.438.833.96 1.102 1.552a4.54 4.54 0 0 1 .404 1.892m4.346 8.977l-4.744-4.93a6.36 6.36 0 0 0 .62-.774 5.913 5.913 0 0 0 .89-2.115 5.893 5.893 0 0 0-.004-2.346 5.543 5.543 0 0 0-.361-1.128 5.98 5.98 0 0 0-.588-1.036 6.49 6.49 0 0 0-.794-.925A6.37 6.37 0 0 0 8.794.461 6.82 6.82 0 0 0 7.61.116a6.742 6.742 0 0 0-2.5 0A6.82 6.82 0 0 0 3.925.46a6.44 6.44 0 0 0-2.064 1.313 6.491 6.491 0 0 0-.793.923 5.98 5.98 0 0 0-.588 1.036c-.16.361-.28.741-.36 1.128a5.954 5.954 0 0 0 0 2.376c.08.388.2.768.36 1.13a6.182 6.182 0 0 0 1.381 1.959c.298.288.624.544.97.764a6.44 6.44 0 0 0 2.279.894 6.77 6.77 0 0 0 3.363-.224 6.296 6.296 0 0 0 1.708-.873l4.749 4.925a.56.56 0 0 0 .215.145.701.701 0 0 0 .453.011.514.514 0 0 0 .2-.114.561.561 0 0 0 .039-.828" />
  </svg>
);

SearchIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node
};

SearchIcon.defaultProps = {
  children: null
};

export default SearchIcon;
