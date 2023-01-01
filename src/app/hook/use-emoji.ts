import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export const useEmoji = (): [string, Dispatch<SetStateAction<string>>] => {
  const [emoji, setEmoji] = useState(() => {
    console.log('useState：设置 emoji 状态的初始值');
    return '🦖';
  });

  useEffect(() => {
    console.log('useEffect: ', emoji);

    return () => {
      console.log('useEffect: 清理 effect ~~');
    };
  }, [emoji]);

  return [emoji, setEmoji];
};
