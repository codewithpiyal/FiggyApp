export const ADD=(item)=>{
    return {
        type: "Add_Cart",
        payload: item
    }
}

export const Remove=(id)=>{
    return {
        type: "RMV_Cart",
        payload: id
    }
}