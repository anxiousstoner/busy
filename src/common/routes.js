import Wrapper from '../Wrapper';
import Settings from '../settings/Settings';
import ProfileSettings from '../app/ProfileSettings';
import Activity from '../activity/Activity';

import Page from '../feed/Page';
import Replies from '../replies/Replies';
import User from '../user/User';
import Tags from '../tags/Tags';
import Donors from '../statics/Donors';
import Post from '../post/Post';
import Bookmarks from '../bookmarks/Bookmarks';
import About from '../statics/About';
import Help from '../statics/Help';
import Team from '../statics/Team';
import Write from '../post/Write/Write';
import Drafts from '../post/Write/Drafts';
import RequireLogin from '../auth/RequireLogin';
import Wallet from '../wallet/Wallet';
import Discover from '../discover/Discover';
import Editor from '../post/Write/Write';

const routes = [
  {
    component: Wrapper,
    routes: [
      {
        path: '/about',
        exact: true,
        component: About,
      },
      {
        path: '/team',
        exact: true,
        component: Team,
      },
      {
        path: '/donors',
        exact: true,
        component: Donors,
      },
      {
        path: '/help',
        exact: true,
        component: Help,
      },
      {
        path: '/bookmarks',
        exact: true,
        component: Bookmarks,
      },
      {
        path: '/drafts',
        exact: true,
        component: Drafts,
      },
      {
        path: '/replies',
        exact: true,
        component: Replies,
      },
      {
        path: '/activity',
        exact: true,
        component: Activity,
      },
      {
        path: '/wallet',
        exact: true,
        component: Wallet,
      },
      {
        path: '/editor',
        component: Editor,
      },
      {
        path: '/settings',
        exact: true,
        component: Settings,
      },
      {
        path: '/edit-profile',
        exact: true,
        component: ProfileSettings,
      },
      {
        path: '/@:name',
        component: User,
      },
      {
        path: '/:category/@:author/:permlink',
        component: Post,
      },
      {
        path: '/',
        component: Page,
      },
    ],
  },
];

export default routes;
