import PriceDatePicker from '@components/price-date-picker/PriceDatePicker';
import PriceDurationInput from '@components/price-duration-input/PriceDurationInput';
import PricePersonInput from '@components/price-person-input/PricePersonInput';
import PriceTimeSelect from '@components/price-time-select/PriceTimeSelect';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@mantine/core';

import * as styles from './PriceInput.styles';

interface PriceInputProps {}

const PriceInput: React.FC<PriceInputProps> = () => {
  return (
    <div css={styles.priceInput}>
      <h3>빠방룸 요금 계산기</h3>
      <div>
        <label>이용 날짜</label>
        <div>
          <PriceDatePicker />
        </div>
      </div>
      <div>
        <label>시작 시간</label>
        <div>
          <PriceTimeSelect />
        </div>
      </div>
      <div>
        <label>
          이용 시간&nbsp;
          <Tooltip
            label={<span>주말(금~일) 및 공휴일은 최소 4시간</span>}
            position="bottom"
            events={{ hover: true, focus: true, touch: true }}
          >
            <FontAwesomeIcon icon={faCircleQuestion} />
          </Tooltip>
        </label>
        <div>
          <PriceDurationInput />
        </div>
      </div>
      <div>
        <label>
          인원 수&nbsp;
          <Tooltip
            label={
              <span>
                기본 인원은 1~6인
                <br />
                인원 추가 시 최대 10명까지 가능
              </span>
            }
            position="bottom"
            events={{ hover: true, focus: true, touch: true }}
          >
            <FontAwesomeIcon icon={faCircleQuestion} />
          </Tooltip>
        </label>
        <div>
          <PricePersonInput />
        </div>
      </div>
    </div>
  );
};

export default PriceInput;
