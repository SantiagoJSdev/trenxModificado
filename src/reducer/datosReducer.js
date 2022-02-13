
import { types } from "../types/types";



const initialState = {
    data:[]
}

export const datosReducer = (state= initialState, action) => {

        switch (action.type) {
            case types.newData:
                
                return{

                    ...state,
                    data:action.payload


                }
        
            default:
                return state;
        }



}