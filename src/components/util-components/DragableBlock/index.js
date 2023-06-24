import React from "react";
import PropTypes from "prop-types";

const DraggableBlock = ({ children, onDragStart, onDragEnd, onDrop, item, ...attr }) => {

  return (
    <div style={{ background: "#000000", borderRadius: "10px" }} {...attr}>
      <div
        draggable={true}
        className="cursor-grab"
        onDragStart={e => onDragStart(e, item)}
        onDragEnd={e => onDragEnd(e, item)}
        onDrop={e => onDrop(e, item)}
      >{children}</div>
    </div>
  );
};

DraggableBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDrop: PropTypes.func,
  item: PropTypes.object
};

export default DraggableBlock;
