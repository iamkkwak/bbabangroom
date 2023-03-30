import { useCallback } from 'react';
import { KAKAO_CHANNEL_ID } from '@constants/id.constants';
import {
  faCheck,
  faClipboard,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, CopyButton, MantineTheme } from '@mantine/core';
import { mainColor } from '@styles/colors.styles';

import * as styles from './ReservationButton.styles';

type FlexDirection = 'column' | 'row';

const buttonStyles = (
  theme: MantineTheme,
  payload: {
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    hasContent?: boolean;
    width?: string;
  },
) => {
  const {
    backgroundColor = 'inherit',
    textColor = 'inherit',
    borderColor = 'inherit',
    hasContent = true,
    width = 'auto',
  } = payload;

  return {
    root: {
      color: textColor,
      backgroundColor,
      borderColor,
      height: '3.75rem',
      fontSize: '1.4rem',
      width,
      padding: '0 2rem',
      margin: '0 2rem',
      '&:not([data-disabled])': theme.fn.hover({
        backgroundColor: theme.fn.darken(backgroundColor, 0.05),
      }),
    },
    leftIcon: {
      marginRight: hasContent ? '1rem' : 0,
    },
  };
};

interface BaseButtonProps {
  content?: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  width?: string;
  icon?: JSX.Element;
  onClick: () => void;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  content,
  textColor = '#FFFFFF',
  backgroundColor = mainColor.c01,
  borderColor = mainColor.c01,
  width = 'auto',
  icon,
  onClick,
}) => {
  return (
    <Button
      styles={(theme) =>
        buttonStyles(theme, {
          textColor,
          backgroundColor,
          borderColor,
          width,
          hasContent: !!content,
        })
      }
      leftIcon={icon}
      onClick={onClick}
    >
      {content}
    </Button>
  );
};

interface ReservationButtonProps {
  copyText: string;
  flexDirection?: FlexDirection;
}

const ReservationButton: React.FC<ReservationButtonProps> = ({
  copyText,
  flexDirection = 'column',
}) => {
  const onChat = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Kakao = (window as any)?.Kakao;

    return Kakao.Channel.chat({
      channelPublicId: KAKAO_CHANNEL_ID, // 카카오톡 채널 홈 URL에 명시된 id
    });
  }, []);

  return (
    <div css={styles.reservationButton(flexDirection)}>
      <CopyButton value={copyText}>
        {({ copied, copy }) => (
          <BaseButton
            icon={<FontAwesomeIcon icon={copied ? faCheck : faClipboard} />}
            textColor={copied ? mainColor.c01 : '#FFFFFF'}
            backgroundColor={copied ? '#FFFFFF' : mainColor.c01}
            content={copied ? '복사 완료!' : '예약 양식 복사하기'}
            width={flexDirection === 'row' ? '40rem' : undefined}
            onClick={copy}
          />
        )}
      </CopyButton>
      <BaseButton
        icon={<FontAwesomeIcon icon={faComment} />}
        content="예약 문의하러 가기"
        width={flexDirection === 'row' ? '40rem' : undefined}
        onClick={onChat}
      />
    </div>
  );
};

export default ReservationButton;
