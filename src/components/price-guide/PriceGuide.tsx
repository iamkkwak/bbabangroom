import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as styles from './PriceGuide.styles';

interface PriceGuideProps {}

const PriceGuide: React.FC<PriceGuideProps> = () => {
  return (
    <div css={styles.priceGuide}>
      <h3>빠방룸 가격 안내</h3>
      <h4>
        <FontAwesomeIcon icon={faPencil} />
        &nbsp;
        <span>인원</span>
      </h4>
      <p>
        <span>기본 인원은 1~6인</span>
        <span>인원 추가 시 최대 10인까지 가능</span>
      </p>
      <h4>
        <FontAwesomeIcon icon={faPencil} />
        &nbsp;
        <span>가격</span>
      </h4>
      <p>
        <span>평일(월~목): 시간당 5,000원</span>
        <span>주말(금~일) 및 공휴일: 시간당 6,000원</span>
        <span>1인 추가 시 시간당 1,000원</span>
      </p>
      <h4>
        <FontAwesomeIcon icon={faPencil} />
        &nbsp;
        <span>최소 예약 시간</span>
      </h4>
      <p>
        <span>주말(금~일) 및 공휴일에만 최소 4시간 예약 필요</span>
      </p>
      <h4>
        <FontAwesomeIcon icon={faPencil} />
        &nbsp;
        <span>장시간 할인</span>
      </h4>
      <p>
        <span>10시간 이상 예약 시 10% 할인!</span>
        <span css={styles.tip}>Tip. 9시간과 10시간 가격을 비교해보세요.</span>
      </p>
    </div>
  );
};

export default PriceGuide;
