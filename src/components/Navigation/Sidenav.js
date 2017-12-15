import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthenticatedUser } from '../../reducers';
import './Sidenav.less';

const isNews = (match, location) => location.pathname.match(/trending/);
const isWallet = (match, location) => location.pathname.match(/wallet/);
const isReplies = (match, location) => location.pathname.match(/replies/);

const Sidenav = ({ username }) => {
  if(username.name !== undefined) {
    return (
      <div>
        <ul className="Sidenav">
          <li>
            <NavLink to={`/@${username}`}>
              <i className="iconfont icon-mine" />
              <FormattedMessage id="my_profile" defaultMessage="My profile" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="Sidenav__item--active" exact>
              <i className="iconfont icon-clock" />
              <FormattedMessage id="feed" defaultMessage="Feed" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/trending" activeClassName="Sidenav__item--active" isActive={isNews}>
              <i className="iconfont icon-headlines" />
              <FormattedMessage id="news" defaultMessage="News" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/replies" activeClassName="Sidenav__item--active" isActive={isReplies}>
              <i className="iconfont icon-message" />
              <FormattedMessage id="replies" defaultMessage="Replies" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/wallet" activeClassName="Sidenav__item--active" isActive={isWallet}>
              <i className="iconfont icon-wallet" />
              <FormattedMessage id="wallet" defaultMessage="Wallet" />
            </NavLink>
          </li>
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <iframe allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" src="https://fast.wistia.com/embed/iframe/gvx5rvmvc9" width="480" height="270"></iframe>
      </div>
    )
  }
}

Sidenav.propTypes = {
  username: PropTypes.shape(),
};

Sidenav.defaultProps = {
  username: undefined,
};

export default connect(
  state => ({
    username: getAuthenticatedUser(state),
  }),
)(Sidenav);
