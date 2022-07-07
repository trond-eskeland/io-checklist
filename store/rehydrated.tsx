import { useStoreRehydrated } from 'easy-peasy';

type RehydrationProps = {
  children: JSX.Element;
};

const WaitForStateRehydration = (props: RehydrationProps): JSX.Element | null => {
  const isRehydrated = useStoreRehydrated();

  return isRehydrated ? props.children : null;
};

export default WaitForStateRehydration;
