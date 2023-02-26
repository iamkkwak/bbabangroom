import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import HeaderLinkButton from '@components/header-link-button/HeaderLinkButton';
import { faArrowUpRightFromSquare, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogoWhite } from '@icons';
import { useMediaQuery } from '@mantine/hooks';
import { mainColor } from '@styles/colors.styles';

import * as styles from './Header.styles';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const isSmall = useMediaQuery('(max-width: 365px)');
  const isMedium = useMediaQuery('(max-width: 505px)');

  const getContent = useCallback(
    (medium: string, large: string) => {
      if (isSmall) return '';
      if (isMedium) return medium;
      return large;
    },
    [isSmall, isMedium],
  );

  return (
    <header css={styles.header}>
      <Link to="/">
        <div css={styles.title}>
          <LogoWhite height={isMedium ? '2rem' : '3rem'} />
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
          content={getContent('홈페이지', '빠방 웹 바로가기')}
        />
        <HeaderLinkButton
          backgroundColor="#FFE500"
          color={'#3F1D1D'}
          icon={<FontAwesomeIcon icon={faComment} />}
          radius="xl"
          href="http://pf.kakao.com/_imxlxixj"
          content={getContent('빠방룸', '빠방룸 카카오톡 채널')}
        />
      </div>
    </header>
  );
};

export default Header;
