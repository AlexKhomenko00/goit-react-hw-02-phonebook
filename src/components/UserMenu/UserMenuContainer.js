import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import defaultAvatar from './default-avatar.png';

import UserMenu from './UserMenu';

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
