import React from "react";
import PropTypes from "prop-types";
import { Image } from "antd";
import DraggableBlock from "../DragableBlock";

const GridSheduler = ({ width, height, grid, onDragOver, onDragLeave, onDrop, elements }) => {
  
  const rows = [];
  const cells = [];
  for (let i = 0; i < width; i++) {
    cells.push(
      <div key={i} style={{
        borderTop: "solid 1px #212020",
        borderLeft: "solid 1px #212020",
        borderColor: grid ? "#212020" : "transparent",
        width: `${500 / width}px`,
        height: `${500 / width}px`
      }}></div>
    )
  }
  for (let i = 0; i < height; i++) {
    rows.push(cells)
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    onDragOver();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    onDragLeave();
  };
  
  return (
    <div style={{
      position: "relative",
      display: "inline"
    }}>
      <div
        style={{
          display: "grid",
          width: "500px",
          height: "500px",
          gridTemplateColumns: `repeat(${width}, 1fr)`,
          borderBottom: "solid 1px #212020",
          borderRight: "solid 1px #212020",
          borderColor: grid ? "#212020" : "transparent"
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={onDrop}
      >{rows}</div>
      {elements.map(element =>
        <DraggableBlock
          style={{
            position: "absolute",
            top: `${element.y}px`,
            left: `${element.x}px`
          }}
          key={element.id}
        >
          <Image
            width={100}
            src="/img/scheduler/chair.png"
          />
        </DraggableBlock>
      )}
    </div>
  );
};

GridSheduler.defaultProps = {
  width: 100,
  height: 100,
  grid: true
}

GridSheduler.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  grid: PropTypes.bool,
  onDragOver: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDrop: PropTypes.func
};

export default GridSheduler;
