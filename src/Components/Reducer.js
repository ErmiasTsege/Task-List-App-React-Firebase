export const initialState={
    basket:[],

};
const reducer=(state,action)=>{
    console.log(action);

    switch(action.type){
      case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],  
    };
    case "ADD_TO_DATA":
        return {
          ...state,
          dataContainer: [...state.dataContainer, action.item],  
      };
       default:
        return state;
    } 
  };
  export default reducer;