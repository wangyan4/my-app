import React, { Component } from 'react';
import { Input, Button, Popover } from 'antd';
import './index.less'
import { connect } from 'react-redux';
import { addItem, delItem, delAllItem, iptchange } from '@/store/actionCreators';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visable: false
    }
  }
  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  render() {
    let { list, iptv, place, addItem, delItem, iptchange, delAllItem, keyAddItem } = this.props
    return (
      <div className='home'>
        <div className="headeript">
          <Input placeholder={place} value={iptv} onChange={iptchange} onKeyUp={keyAddItem}/>
          <Button type='primary' shape='round' onClick={ ()=> addItem(iptv) }>添加</Button>
          <Popover
            content={<div>
              <p>确定全部删除吗?</p>
              <a className='cancle' onClick={this.hide}>取消</a>
              <a onClick={ ()=>{delAllItem();this.hide() }}>确定</a>
              </div>
              }
            title="Tip"
            trigger="click"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
          >
          <Button type='primary' shape='round'>全部删除</Button>
          </Popover>
        </div>
        <div className='itemlist'>
          <ul>
            {
              list.map((item, idx) => <li key={idx}>{`${idx+1}. `}{item}
                <span className='my icondelete' onClick={()=>{delItem(idx)}}></span>  
              </li>)
            }
          </ul>
          <p>共{list.length}条</p>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  // ... 从state中处理的一些数据，以及可选的ownProps
  return {
    // iptv: state.iptv,
    // list: state.list
    ...state
  }

};

const mapDispatchToProps = (dispatch) => {
  // ... 通常是action creators构成的对象
  return {
    addItem(val) { 
      dispatch(addItem(val))
    },
    keyAddItem(e){
      if(e.keyCode == 13){
        dispatch(addItem(e.target.value))
      }
    },
    iptchange(e) {
      dispatch(iptchange(e.target.value))
    },
    delItem(val) {
      dispatch(delItem(val))
    },
    delAllItem() {
      dispatch(delAllItem());
    }
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
