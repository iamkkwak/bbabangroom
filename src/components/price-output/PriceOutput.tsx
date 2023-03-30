import { useContext } from 'react';
import ReservationButton from '@components/reservation-button/ReservationButton';
import { EXTRA_DISCOUNT_DURATION } from '@constants/price.constants';
import { PriceContext } from '@containers/price-container/PriceContainer';
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

  return (
    <div css={styles.priceOutput}>
      {isValid && (
        <>
          <p css={styles.priceResult}>
            이용 요금은{' '}
            <span className="price">
              총{' '}
              {calculatePrice(form)
                .toString()
                // 콤마 넣기
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </span>{' '}
            입니다.
            {duration >= EXTRA_DISCOUNT_DURATION && (
              <span className="info">장시간 할인 10%가 적용되었습니다.</span>
            )}
          </p>
          <ReservationButton copyText={getCopyText(form)} />
        </>
      )}
    </div>
  );
};

export default PriceOutput;
