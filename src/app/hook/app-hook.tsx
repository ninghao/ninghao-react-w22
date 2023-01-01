import { useState, useEffect } from 'react';
import { useEmoji } from './use-emoji';
import './app-hook.css';

/**
 * 属性类型
 */
type AppHookProps = {};

/**
 * 组件
 */
const AppHook = (props: AppHookProps) => {
  const [emoji, setEmoji] = useEmoji();

  const [quantity, setQuantity] = useState(5);

  const onClickIncrease = () => {
    setQuantity((preQuantity) => {
      return preQuantity + 1;
    });
  };

  const onClickDecrease = () => {
    setQuantity((preQuantity) => {
      return preQuantity - 1;
    });
  };

  const onClickEmoji = () => {
    setEmoji(emoji === '🌲' ? '🦖' : '🌲');
  };

  useEffect(() => {
    console.log('useEffect: 初次渲染组件');
  }, []);

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
