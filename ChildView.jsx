import React from "react";
import View from "./View";

function ChildView(props) {
  const{node,handleLabelCB, selected} = props;
  return <div>
     {node.children && node.children.length ? 
        <div className="child-ele"> 
          <View 
            rootNode={node.children} 
            handleLabelCB={handleLabelCB} 
            selected={selected}
          />
        </div>
        :
        null}
  </div>;
}

export default ChildView;
