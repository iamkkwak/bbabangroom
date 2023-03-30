import { Button, MantineTheme } from '@mantine/core';
import { mainColor } from '@styles/colors.styles';

const buttonStyles = (
  theme: MantineTheme,
  payload: {
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    hasContent?: boolean;
  },
) => {
  const {
    backgroundColor = 'inherit',
    textColor = 'inherit',
    borderColor = 'inherit',
    hasContent = true,
  } = payload;

  return {
    root: {
      color: textColor,
      backgroundColor,
      borderColor,
      height: '3.6rem',
      fontSize: '1.4rem',
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

interface PriceOutputButtonProps {
  content?: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  icon?: JSX.Element;
  onClick: () => void;
}

const PriceOutputButton: React.FC<PriceOutputButtonProps> = ({
  content,
  textColor = '#FFFFFF',
  backgroundColor = mainColor.c01,
  borderColor = mainColor.c01,
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

export default PriceOutputButton;
