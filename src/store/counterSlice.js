import { createSlice} from "@reduxjs/toolkit"

const counterslice=createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        increase:(state,action)=>{state.value+=1},
        decrease:(state,action)=>{state.value-=1},
    },
})

export default counterslice.reducer;
export const {increase,decrease}=counterslice.actions;


// const reducer=(state=initState,action)=>{
//     if(action.type==='increase'){
//         return {counter:state.counter+action.payload}
//     }

//     if(action.type==='decrease'){
//         return {counter:state.counter-1}
//     }

//     return state;

// }

// const store=createStore(reducer);




















    // const dispatch=useDispatch()
    // const state = useSelector((state) => {
    //     if (state.counter < 1) {
    //         return "No Number";
    //     }
    //     return state.counter;
    // });
    // const increase=()=>{
    //     const action ={type:'increase',payload:5};
    //     dispatch(action)
    // }

    // const decrease=()=>{
    // const action ={type:'decrease'};
    //     dispatch(action)
    // }