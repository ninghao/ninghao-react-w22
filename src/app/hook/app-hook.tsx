import { useEffect, useContext, useReducer } from 'react';
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

  return (
    <div className={`app-hook ${theme}`}>
      <h1>
        {emoji} <br /> {quantity}
      </h1>
      <button onClick={onClickEmoji}>表情符号</button>
      <div>
        <button onClick={onClickIncrease}>+</button>
        <button onClick={onClickDecrease}>-</button>
      </div>
      <div>{theme}</div>
    </div>
  );
};

export default AppHook;
