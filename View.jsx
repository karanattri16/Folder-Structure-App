import React from "react";
import ChildView from "./ChildView";

const FileImg = React.memo(()=> <img width="16" height="16" src="https://img.icons8.com/ios/50/file--v1.png" alt="file--v1"/>);

function View(props) {
  const {rootNode=[], handleLabelCB,selected}= props;
  
  function handleLabelClick(node){
      return function(e){
      handleLabelCB(e,node);
    }
  }

  return <div>
    {rootNode.map(node=>{
      return (
      <div key={node.id}>
        <label  className={selected.id === node.id ? "selected":""}>
          <div>
          {
            node.type ==="folder" ?
            <input 
            type="checkbox" 
            checked={node.isOpen} 
            onChange={handleLabelClick(node)} 
            id={node.id+"-"+node.type}
            /> : null
          }
          {node.type ==="file"? <FileImg/> : null}
          {node.name}
          </div>
        </label>
        {node.isOpen ? <ChildView {...props} expand node={node}/> : null}
      </div>
    )
    })}
</div>;
}

export default React.memo(View);
