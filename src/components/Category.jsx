import React from "react";

export const Category = (props) => {
    return (
      <div className="category" id="category">
          <div className="category-item" onClick={() => props.onCategoryClick('Holiday')}>
              <span className="category-color category-holiday-color"></span>
              <span className="category-content">Holiday</span>
          </div>
          <div className="category-item" onClick={() => props.onCategoryClick('Birthday')}>
              <span className="category-color category-birthday-color"></span>
              <span className="category-content">Birthday</span>
          </div>
          <div className="category-item" onClick={() => props.onCategoryClick('Busy')}>
              <span className="category-color category-busy-color"></span>
              <span className="category-content">Busy</span>
          </div>
          <div className="category-item" onClick={() => props.onCategoryClick('Anniversary')}>
              <span className="category-color category-anniversary-color"></span>
              <span className="category-content">Anniversary</span>
          </div>
      </div>
    );
};