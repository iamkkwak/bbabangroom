import { Link } from 'react-router-dom';
import HeaderLinkButton from '@components/header-link-button/HeaderLinkButton';
import { VIEWPORT_SIZE } from '@constants/viewport.constants';
import {
  faArrowUpRightFromSquare,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogoWhite } from '@icons';
import { mainColor } from '@styles/colors.styles';

import * as styles from './Header.styles';

export type DataPayload = Partial<{
  [VIEWPORT_SIZE.SMALL]: string;
  [VIEWPORT_SIZE.MEDIUM]: string;
  [VIEWPORT_SIZE.LARGE]: string;
}>;

interface HeaderProps {
  getDataByViewport: (payload: DataPayload) => string | undefined;
}

const Header: React.FC<HeaderProps> = ({ getDataByViewport }) => (
  <header css={styles.header}>
    <Link to="/">
      <div css={styles.title}>
        <LogoWhite
          height={getDataByViewport({
            small: '2rem',
            medium: '2rem',
            large: '3rem',
          })}
        />
        <span>빠방룸</span>
      </div>
    </Link>
    <div css={styles.link}>
      <HeaderLinkButton
        backgroundColor="#FFF"
        color={mainColor.c01}
        icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
        radius="xl"
        href="https://bbabang.net"
        content={getDataByViewport({
          medium: '홈페이지',
          large: '빠방 웹 바로가기',
        })}
      />
      <HeaderLinkButton
        backgroundColor="#FFE500"
        color={'#3F1D1D'}
        icon={<FontAwesomeIcon icon={faComment} />}
        radius="xl"
        href="http://pf.kakao.com/_imxlxixj"
        content={getDataByViewport({
          medium: '빠방룸',
          large: '빠방룸 카카오톡 채널',
        })}
      />
    </div>
  </header>
);

export default Header;
