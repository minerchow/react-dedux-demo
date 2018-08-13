
import { fromJS } from 'immutable';
const defaultState =fromJS({
    number:1,list:[]
})
export default function(state = defaultState, action) {
   // console.log(action)
    switch(action.type){
        case 'INCREMENT':
            //没有使用immuatable
            //return {number: state.number + 1};
            //下面是使用immuatable
            return state.set('number',state.get('number') + 1)
        case 'DECREMENT':
            //没有使用immuatable
            //return {number:state.number - 1};
            return state.set('number',state.get('number') -1 )
        case 'GETDATA':
            //没有使用immuatable
           // return {list:action.data}
           return state.set('list',action.data )
        default:
            return state;
    }
}