import { useCallback, useContext } from 'react';
import PriceOutputButton from '@components/price-output-button/PriceOutputButton';
import { KAKAO_CHANNEL_ID } from '@constants/id.constants';
import { PriceContext } from '@containers/price-container/PriceContainer';
import { faClipboard, faComment } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyButton } from '@mantine/core';
import { mainColor } from '@styles/colors.styles';
import { formatDate } from '@utils/dayjs.utils';
import { every } from 'lodash';

import * as styles from './PriceOutput.styles';
import { calculatePrice, getCopyText } from './PriceOutput.utils';

interface PriceOutputProps {}

const PriceOutput: React.FC<PriceOutputProps> = () => {
  const { date, time, duration, person } = useContext(PriceContext);
  const form = {
    date: formatDate(date),
    time: time ?? '',
    duration: Number(duration),
    person: Number(person),
  };

  const isValid = every([date, time, duration, person]);

  const onChat = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Kakao = (window as any)?.Kakao;

    return Kakao.Channel.chat({
      channelPublicId: KAKAO_CHANNEL_ID, // 카카오톡 채널 홈 URL에 명시된 id
    });
  }, []);

  return (
    <div css={styles.priceOutput}>
      {isValid && (
        <>
          <p css={styles.priceResult}>
            이용 요금은{' '}
            <span>
              총{' '}
              {calculatePrice(form)
                .toString()
                // 콤마 넣기
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </span>{' '}
            입니다.
          </p>
          <CopyButton value={getCopyText(form)}>
            {({ copied, copy }) => (
              <PriceOutputButton
                icon={<FontAwesomeIcon icon={copied ? faCheck : faClipboard} />}
                textColor={copied ? mainColor.c01 : '#FFFFFF'}
                backgroundColor={copied ? '#FFFFFF' : mainColor.c01}
                content={copied ? '복사 완료!' : '예약 양식 복사하기'}
                onClick={copy}
              />
            )}
          </CopyButton>
          <PriceOutputButton
            icon={<FontAwesomeIcon icon={faComment} />}
            content="예약 문의하러 가기"
            onClick={onChat}
          />
        </>
      )}
    </div>
  );
};

export default PriceOutput;
