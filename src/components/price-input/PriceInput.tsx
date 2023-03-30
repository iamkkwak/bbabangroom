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
      <span css={styles.description}>
        요금이 헷갈리는 분들을 위한 단순한 요금 계산기입니다.
        <br />
        실제 예약 가능 여부는 카카오톡 채널로 문의해주세요.
      </span>
      <div>
        <label>
          이용 날짜&nbsp;
          <Tooltip
            label={
              <span>
                오늘로부터 한달 뒤까지만 예약 가능합니다.
                <br />
                (예: 오늘이 1월 15일이라면, 2월 14일까지)
              </span>
            }
            position="bottom"
            events={{ hover: true, focus: true, touch: true }}
          >
            <FontAwesomeIcon icon={faCircleQuestion} />
          </Tooltip>
        </label>
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
            label={
              <span>
                평일부터 시작했더라도 24시를 넘어 주말이 된 경우
                <br />
                해당 시간만큼 주말 요금으로 계산됩니다.
              </span>
            }
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
        <label>인원 수</label>
        <div>
          <PricePersonInput />
        </div>
      </div>
    </div>
  );
};

export default PriceInput;
