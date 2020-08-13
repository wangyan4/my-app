import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
const Shop = function (props) {
  let [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log(count)
    }, 3000)
  })
  function ct() {
    setCount(++count);
  }
  return (
    <div>
      <Button shape='round' onClick={ct}>Click me !</Button>
      <p>click {count} 次</p>
    </div>
  );
}
export default Shop;
