import HomeLinkButton from '@components/home-link-button/HomeLinkButton';
import { faCalendarCheck, faCoins } from '@fortawesome/free-solid-svg-icons';
import { useLandscape } from '@hooks/useViewport';

import * as styles from './HomeLayout.styles';

interface HomeLayoutProps {}

const HomeLayout: React.FC<HomeLayoutProps> = () => {
  const isLandscape = useLandscape();

  return (
    <div css={styles.homeLayout}>
      <div css={styles.home(isLandscape)}>
        <HomeLinkButton
          to="/price"
          title="이용 요금"
          icon={faCoins}
          content={
            <>
              원하는 날짜와 시간의
              <br />
              이용 요금을 알려드려요.
            </>
          }
        />
        <HomeLinkButton
          to="/status"
          title="예약 현황"
          icon={faCalendarCheck}
          content={
            <>
              오늘부터 일주일동안
              <br />
              예약 가능한 시간을 볼 수 있어요.
            </>
          }
        />
      </div>
    </div>
  );
};

export default HomeLayout;
