const initialValue=0;
const changeNumber=(state=initialValue,action)=>{
    switch(action.type){
        case "inc": return state+action.payLoad;
        case "dec": return state-1;
        default: return state;
    }
}
export default changeNumber