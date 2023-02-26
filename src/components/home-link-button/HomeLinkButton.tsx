import { Link, To } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as styles from './HomeLinkButton.styles';

interface HomeLinkButtonProps {
  title: React.ReactNode;
  content: React.ReactNode;
  to: To;
  icon: IconProp;
}

const HomeLinkButton: React.FC<HomeLinkButtonProps> = ({ title, content, icon, to }) => {
  return (
    <Link to={to} css={styles.homeLinkButton}>
      <div>
        <h1>
          <FontAwesomeIcon icon={icon} />
          {title}
        </h1>
        <p>{content}</p>
      </div>
    </Link>
  );
};

export default HomeLinkButton;
