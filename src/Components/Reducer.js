export const initialState={
    alltask:[]

};
const reducer=(state,action)=>{
    console.log(action);

    switch(action.type){
      case "ADD_TO_Task":
      return {
        ...state,
        alltask: [...state.alltask, action.item],  
    };
    case "REMOVE_FROM_AllTask":
      const index = state.alltask.findIndex(
        (alltaskItem) => alltaskItem.id === action.id
      );
      let newalltaskItem = [...state.alltask];

      if (index >= 0) {
        newalltaskItem .splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
       default:
        return state;
    } 
  };
  export default reducer;