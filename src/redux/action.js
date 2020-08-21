export const add_post = (data = {}) =>{
    return ({
        type:'ADD_POST',
        payload: data
    })
}

export const edit_post = (identifier=0)=>{
    return ({
        type:'EDIT_POST',
        payload: identifier
    })
}

export const del_post = (identifier=0)=>{
    return ({
        type:'DELETE_POST',
        payload: identifier
    })
}

export const update_post = ({id=0, data={}})=>{
    return ({
        type:'UPDATE',
        payload: {id,data}
    })
}