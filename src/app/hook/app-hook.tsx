import { useState, useEffect } from 'react';
import './app-hook.css';

/**
 * 属性类型
 */
type AppHookProps = {};

/**
 * 组件
 */
const AppHook = (props: AppHookProps) => {
  const [emoji, setEmoji] = useState(() => {
    console.log('useState：设置 emoji 状态的初始值');
    return '🦖';
  });

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
    console.log('useEffect: ', emoji);

    return () => {
      console.log('useEffect: 清理 effect ~~');
    };
  }, [emoji]);

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
