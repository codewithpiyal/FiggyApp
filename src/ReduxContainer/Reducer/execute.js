  const initialState={
    carts:[]
  }

  export const actionToCart=(state=initialState,action)=>{
    switch(action.type){
        case "Add_Cart": return {
            ...state,
            carts:[...state.carts,action.payload]
        }
         default: return state
    }
  }