import StatusContainer from '@containers/status-container/StatusContainer';
import { useLandscape } from '@hooks/useViewport';

import * as styles from './StatusLayout.styles';

interface StatusLayoutProps {}

const StatusLayout: React.FC<StatusLayoutProps> = () => {
  const isLandscape = useLandscape();

  return (
    <div css={styles.statusLayout}>
      <div css={styles.status(isLandscape)}>
        <StatusContainer />
      </div>
    </div>
  );
};

export default StatusLayout;
