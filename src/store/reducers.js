import * as actions from './actionTypes';

var loacl = window.localStorage;
console.log()
let defaultState = localStorage.getItem('itemlist')?JSON.parse(localStorage.getItem('itemlist')):{
  place:'record something',
  iptv:'',
  list:[]
};

export default (state = defaultState, action) => {
  var tmp = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actions.INPUTVAL:
      tmp.iptv = action.text;
      loacl.setItem('itemlist',JSON.stringify(tmp));
      return tmp;
    case actions.ADD_ITEM:
      if(action.text){
        tmp.list.push(action.text);
      }
      tmp.iptv = ''
      loacl.setItem('itemlist',JSON.stringify(tmp));
      return tmp;
    case actions.DEL_ITEM:
      var idx = Number(action.text);
      tmp.list.splice(idx, 1);
      tmp.iptv='';
      loacl.setItem('itemlist',JSON.stringify(tmp));
      return tmp;
    case actions.DEL_ALL_ITEM:
      tmp.list =[];
      tmp.iptv = ''
      loacl.setItem('itemlist',JSON.stringify(tmp));
      return tmp;
    default:
      loacl.setItem('itemlist',JSON.stringify(tmp));
      return state;
  }
}