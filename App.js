import React from 'react';
      import ReactDOM from 'react-dom';
     import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

     const App = () => {
       const[items,setItems]=React.useState([]);
       useEffect(()=>{
         setItems(pokemonData)
       },[])

       const reorder =(list, startIndex, endIndex)=>{
         const result= array.from(list);
          const [removed] = result.splice(startIndex,1);
          result.splice(endIndex, 0 , removed);
          return result;

       }

        const getListStyle =(isDraggingOver)=>{
          background: isDraggingOver ?'blue': 'red';
        }

        const getItemsStyle = (isDragging, draggableStyle) => {
  return {
    userSelect: 'none',
    background: isDragging ? 'yellow' : 'pink',
    ...draggableStyle,
  };
};






       const onDragEnd =(result)=>{
         if(!result.destination){
           return;
         }
         const reorderedItems=reorder(items,result.source.index,result.destination.index);
         setItems(reorderedItems);

       }

      
  return (
    <div>
      <div className="headingSection">
        <div className="heading">All Pokemons</div>
        <div className="heading">My Pokemons</div>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
      
      
        <div className="pokemonContainer">
          <div className="listContainer">
            <AllPokemon />
          </div>
       <Droppable id='droppable'>
       {(provided, snapshot)=>{
         <div{ ...provided.droppableProps} ref= {provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}> 

         {items.map((item,index)=>{
           <Draggable key="item.id" draggableId={item.id}  index={index}>
           {
             (provided, snapshot)=>{
               <div ref={provided.innerRef} {...provided.draggableProps} {...provided.handleDrapProps} styele={getItemsStyle}>{item.name}
               </div>
             }
           } </Draggable>

         })}
         </div>
       }}











          <div className="listContainer">
            <MyPokemon />
          </div>
          </Droppable>
        </div>
      

        </DragDropContext>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

