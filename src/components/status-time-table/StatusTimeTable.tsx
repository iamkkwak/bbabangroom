import { memo } from 'react';
import { Time } from '@components/status/Status.types';
import { useLandscape } from '@hooks/useViewport';
import { Badge, ColorSwatch } from '@mantine/core';
import { mainColor } from '@styles/colors.styles';
import { isEmpty, map } from 'lodash';

import * as styles from './StatusTimeTable.styles';

interface StatusTimeBadgesProps {
  reservedTime: Time;
}

const StatusTimeBadges: React.FC<StatusTimeBadgesProps> = ({
  reservedTime,
}) => {
  const isLandscape = useLandscape();

  return (
    <div css={styles.timeTableWrap(isLandscape)}>
      {!isEmpty(reservedTime) && (
        <>
          <div css={styles.colorLegend}>
            <ColorSwatch color={mainColor.c01} size="2rem" />
            <span>예약 가능</span>
            <ColorSwatch color="white" size="2rem" />
            <span>예약 마감</span>
          </div>
          <dl>
            {map(reservedTime, (reserved, time) => (
              <Badge
                key={time}
                size="xl"
                variant={reserved ? 'outline' : 'gradient'}
                color="gray"
                gradient={{ from: mainColor.c01, to: mainColor.c01 }}
              >
                {time}
              </Badge>
            ))}
          </dl>
        </>
      )}
    </div>
  );
};

export default memo(StatusTimeBadges);
