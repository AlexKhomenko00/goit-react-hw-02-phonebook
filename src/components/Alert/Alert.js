import { NotificationManager } from 'react-notifications';

import 'react-notifications/lib/notifications.css';

const Alert = name => {
  return NotificationManager.error(
    `Contact "${name}" already exists!`,
    'Error!',
    3000,
  );
};

export default Alert;
