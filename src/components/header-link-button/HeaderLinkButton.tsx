import { Button, MantineNumberSize, MantineTheme } from '@mantine/core';

const buttonStyles = (
  theme: MantineTheme,
  payload: {
    backgroundColor?: string;
    color?: string;
    hasContent?: boolean;
  },
) => {
  const {
    backgroundColor = 'inherit',
    color = 'inherit',
    hasContent = true,
  } = payload;

  return {
    root: {
      backgroundColor,
      color,
      height: '3.4rem',
      fontSize: '1.4rem',
      padding: '0 1.8rem',
      '&:not([data-disabled])': theme.fn.hover({
        backgroundColor: theme.fn.darken(backgroundColor, 0.05),
      }),
    },
    leftIcon: {
      marginRight: hasContent ? '1rem' : 0,
    },
  };
};

interface HeaderLinkButtonProps {
  content?: string;
  backgroundColor?: string;
  color?: string;
  icon?: JSX.Element;
  radius?: MantineNumberSize;
  href?: string;
}

const HeaderLinkButton: React.FC<HeaderLinkButtonProps> = ({
  content,
  backgroundColor,
  color,
  icon,
  radius,
  href,
}) => {
  return (
    <Button
      styles={(theme) =>
        buttonStyles(theme, {
          backgroundColor,
          color,
          hasContent: !!content,
        })
      }
      radius={radius}
      leftIcon={icon}
      component={href ? 'a' : 'button'}
      target={href ? '_blank' : undefined}
      rel={href ? 'external' : undefined}
      href={href}
    >
      {content}
    </Button>
  );
};

export default HeaderLinkButton;
