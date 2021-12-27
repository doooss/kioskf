import { observer } from 'mobx-react';
import { currentManager } from 'store/Manager';

const Manager = observer(() => {
  return (
    <div>
      <p>{currentManager.email}</p>
    </div>
  );
});

export default Manager;
