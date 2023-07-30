import styles from './index.module.scss';
import { create } from 'zustand';
import { shallow } from 'zustand/shallow';

const useBear = create((set) => {
  return {
    bears: 0,
    inc: () => {
      return set((s: any) => ({ bears: s.bears + 1 }));
    },
  };
});

export function Index() {
  const { bears, inc } = useBear(
    (s: any) => ({
      bears: s.bears,
      inc: s.inc,
    }),
    shallow
  );
  return (
    <div className={styles.page}>
      <button onClick={inc}>{bears}</button>
    </div>
  );
}

export default Index;
