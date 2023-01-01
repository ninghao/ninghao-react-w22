import { forwardRef } from 'react';
import type { ForwardedRef } from 'react';

/**
 * 属性类型
 */
type AppInputProps = {};

/**
 * 组件
 */
const AppInput = forwardRef(
  (props: AppInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <input type="text" ref={ref} />;
  },
);

export default AppInput;
