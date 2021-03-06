    import axios from 'axios';
    export const increment=(id)=>{
       // console.log(id)
        return {type:'INCREMENT',id:id}
    }
    export const decrement=()=>{
        return {type:'DECREMENT'}
    }

    export const getData=(data)=>{
        return {type:'GETDATA',data}
    }

    export const asyncIncrement=()=>{
        return dispatch=>{
            setTimeout(()=>{
                dispatch(increment());
            },2000)
        }
    }

    export const asyncGetData=()=>{
        return dispatch=>{
            axios.get('https://cnodejs.org/api/v1/topics').then((res)=>{
                if(res.data.success){
                    dispatch(getData(res.data.data))
                }
               
                
            })
        }
    }