import generateUniqueId from "generate-unique-id";
import React, { useEffect } from "react";
import { node } from "../store/artists.store";
import ErrorBoundary from "./ErrorBoundary";
import View from "./View";

function Folder() {
  const [root, setRoot] = React.useState(node ?? []);
  const [selected, setSelected] = React.useState({});
  const nameRef = React.createRef();

  useEffect(()=>{
    nameRef.current.value="";
  },[root])

  const handleLabelClick = React.useCallback(
    function(e,node){
      e.stopPropagation();

      if(e.target.checked){
        const [id,type] = e.target.id.split("-");
        node.isOpen = true;
        setSelected({id,type, node});
      }else{
        node.isOpen = false
        setSelected({});
      }
  },[root])

  function createFolder(){
    if(selected.type === 'file'){
      return;
    }
    if(!nameRef.current.value.trim()) {
      alert("PLease add a name to the folder");
      return;
    }
    if(!selected.id && root.length){
      alert("PLease Select a folder first");
      return;
    }

    // when root is not there just add an root node.
    if(!root.length) {
      setRoot(prev=> {
        return [{name:nameRef.current.value, id:generateUniqueId(), type:"folder", children:[], isOpen:false}]});
      return
    }
    
    if(selected.id && selected.node){
          selected.node.children.push({name:nameRef.current.value, id:generateUniqueId(), type:"folder", children:[], isOpen:false});
          setRoot(prev=>[...prev]);
    }
  }


  function createFile(){
    if(selected.type==='file'){
      return;
    }
    if(!nameRef.current.value) alert("Please add a name to the file");
    if(!root.length) {
      alert("Please add a a root folder");
    }
    if(selected.id && selected.node && nameRef.current.value){
      selected.node.children.push({name:nameRef.current.value, id: generateUniqueId(), type:"file"});
      setRoot(prev=>[...prev])
    }
  }
  return <div>
    <h3>Folder Structure</h3>
    <input ref={nameRef} type="text"/>
    <button className="btn-action" onClick={createFolder}>Create a folder </button>
    <button className="btn-action" onClick={createFile}>Create a file </button>
    <ErrorBoundary>
      <View rootNode={root} handleLabelCB={handleLabelClick} selected={selected}/>
    </ErrorBoundary>
    {console.log(selected)
    }
  </div>;
}

export default Folder;
