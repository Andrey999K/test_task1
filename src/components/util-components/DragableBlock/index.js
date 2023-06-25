import React from "react";
import PropTypes from "prop-types";

const DraggableBlock = ({ children, onDragStart, onDragEnd, item, onMap, ...attr }) => {

  return (
    <div style={{ background: "#000000", borderRadius: "10px" }} {...attr}>
      <div
        draggable={true}
        className="cursor-grab"
        onDragStart={e => onDragStart(e, item, onMap)}
        onDragEnd={e => onDragEnd(e, item)}
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
  item: PropTypes.object,
  onMap: PropTypes.bool
};

export default DraggableBlock;
