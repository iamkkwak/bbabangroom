import * as styles from './Footer.styles';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer css={styles.footer}>
      <span>Copyright 2023. EunJeong Kwak All rights reserved.</span>
    </footer>
  );
};

export default Footer;
