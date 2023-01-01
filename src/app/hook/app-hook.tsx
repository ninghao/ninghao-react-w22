import { useState } from 'react';
import './app-hook.css';

/**
 * 属性类型
 */
type AppHookProps = {};

/**
 * 组件
 */
const AppHook = (props: AppHookProps) => {
  const [emoji, setEmoji] = useState('🦖');
  const [quantity, setQuantity] = useState(5);

  const onClickIncrease = () => {
    setQuantity(quantity + 1);
  };

  const onClickDecrease = () => {
    setQuantity(quantity - 1);
  };

  const onClickEmoji = () => {
    setEmoji(emoji === '🌲' ? '🦖' : '🌲');
  };

  return (
    <div className="app-hook">
      <h1>
        {emoji} <br /> {quantity}
      </h1>
      <button onClick={onClickEmoji}>表情符号</button>
      <div>
        <button onClick={onClickIncrease}>+</button>
        <button onClick={onClickDecrease}>-</button>
      </div>
    </div>
  );
};

export default AppHook;
