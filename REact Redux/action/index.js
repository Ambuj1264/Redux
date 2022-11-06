export const increment=(num)=>{
    return {
        type:"inc",
        payLoad:num
    }
}
export const decrement=()=>{
    return {type:"dec"}
}
