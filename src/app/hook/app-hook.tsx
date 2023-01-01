import { useEffect, useContext, useReducer, useMemo, useRef } from 'react';
import { AppContext } from 'app/app';
import { useEmoji } from './use-emoji';
import './app-hook.css';

/**
 * 属性类型
 */
type AppHookProps = {};

/**
 * 状态类型
 */
type AppHookState = {
  quantity: number;
};

enum AppHookActionType {
  Increase = 'increase',
  Decrease = 'decrease',
}

type AppHookAction = {
  type: AppHookActionType;
  payload: number;
};

const appHookInitialState: AppHookState = { quantity: 5 };

const appHookReducer = (state: AppHookState, action: AppHookAction) => {
  const { type, payload } = action;

  switch (type) {
    case AppHookActionType.Increase:
      return {
        ...state,
        quantity: state.quantity + payload,
      };
    case AppHookActionType.Decrease:
      return {
        ...state,
        quantity: state.quantity - payload,
      };
    default:
      return state;
  }
};

/**
 * 组件
 */
const AppHook = (props: AppHookProps) => {
  const [emoji, setEmoji] = useEmoji();

  // const [quantity, setQuantity] = useState(5);
  const [state, dispatch] = useReducer(appHookReducer, appHookInitialState);
  const { quantity } = state;

  const onClickIncrease = () => {
    dispatch({ type: AppHookActionType.Increase, payload: 2 });
  };

  const onClickDecrease = () => {
    dispatch({ type: AppHookActionType.Decrease, payload: 2 });
  };

  const onClickEmoji = () => {
    setEmoji(emoji === '🌲' ? '🦖' : '🌲');
  };

  useEffect(() => {
    console.log('useEffect: 初次渲染组件');
  }, []);

  const { theme } = useContext(AppContext);

  const makeEmojiView = (emoji: string) => {
    const weather = ['🌤', '🌧', '🌨'];
    const randomWeather = weather[Math.floor(Math.random() * weather.length)];

    console.log('makeEmojiView', randomWeather, emoji);

    return (
      <>
        <div style={{ fontSize: '32px' }}>{randomWeather}</div>
        {emoji}
      </>
    );
  };

  const emojiView = useMemo(() => makeEmojiView(emoji), [emoji]);

  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  return (
    <div className={`app-hook ${theme}`}>
      <h1>
        {emojiView} <br /> {quantity}
      </h1>
      <button onClick={onClickEmoji}>表情符号</button>
      <div>
        <button onClick={onClickIncrease}>+</button>
        <button onClick={onClickDecrease}>-</button>
      </div>
      <div>
        {theme}
        <p>
          <small>共渲染 {renderCount.current} 次</small>
        </p>
      </div>
    </div>
  );
};

export default AppHook;
