  const initialState={
    carts:[]
  }

  export const actionToCart=(state=initialState,action)=>{
    switch(action.type){
        case "Add_Cart": return {
            ...state,
            carts:[...state.carts,action.payload]
        }
        case "RMV_Cart": 
          const rmvData= state.carts.filter((cElem)=> cElem.id !== action.payload)

        return {
          ...state,
          carts:rmvData
      }
         default: return state
    }
  }