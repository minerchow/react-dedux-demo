import React, { Component } from 'react';
import store from '../store';
import { bindActionCreators } from 'redux';
import {increment,decrement,asyncIncrement,asyncGetData} from '../store/action/counter';
import {connect} from 'react-redux';

class Counter extends Component {
    constructor(props){
        super(props);
        
    }
    
    // componentWillMount(){
    //     this.unsubscribe = store.subscribe(()=>{});
    // }
    // componentWillUnmount(){
    //     this.unsubscribe();//取消订阅
    // }
    render(){
        let list;
        if(this.props.list && this.props.list.length>0){
            list = this.props.list.map((item,index)=>{
                return (
                    <li key={item.id}>
                        {item.title}
                    </li>
                )
                
            })
        }
        return(
            <div style={{ border: '1px solid red' }}>
                <p>{this.props.number}</p>
                
                <ul>
                   {list}
                </ul>
                <button onClick={(id)=>{this.props.increment(1)}}> + </button>
                <button onClick={this.props.decrement}> - </button>
                <button onClick={this.props.asyncIncrement}> 异步的+ </button>
                <button onClick={this.props.asyncGetData}>获取数据</button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    //没有使用immuatable 
    //return {
    //     number: state.counter.number,
    //     list: state.counter.list
    // }
    //下面是使用immuatable
    return {
        number: state.counter.get('number'),
        list: state.counter.get('list')
    }
}

const mapDispatchToProps = (dispatch) =>{
    console.log(dispatch)
    //return dispath
    return bindActionCreators({increment,decrement,asyncIncrement,asyncGetData},dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)