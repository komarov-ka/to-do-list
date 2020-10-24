import React, { useState } from 'react'
import List from "../List";
import Badge from '../Badge'

import closeSvg from '../../assets/img/close.svg'

import "./AddListButton.scss";

function AddList({ colors }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [seletedColor, selectColor] = useState(colors[0].id);

  return (
    <div className="add-list">
      <List
        onClick={() => setVisiblePopup(true)}
        items={[
          {
            className: "list__add-button",
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1V15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: "ADD LIST",
          },
        ]}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <img onClick={() => setVisiblePopup(false)} src={closeSvg} alt="Close button" className="add-list__popup-close-btn"/>
          <input className="field" type="text" placeholder="Name of the list" />
          <div className="add-list_popup-colors">
            {colors.map((color, id) => (
              <Badge
                onClick={() => selectColor(color.id)}
                key={color.id}
                color={color.name}
                className={selectColor === color.id && 'active'}
              />
            ))}
          </div>
          <button className="button">Ok</button>
        </div>
      )}
    </div>
  );
}

export default AddList;