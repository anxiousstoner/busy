import Wrapper from '../Wrapper';

import About from '../statics/About';
import Team from '../statics/Team';
import Donors from '../statics/Donors';
import Help from '../statics/Help';

import Bookmarks from '../bookmarks/Bookmarks';
import Drafts from '../post/Write/Drafts';
import Replies from '../replies/Replies';
import Activity from '../activity/Activity';
import Wallet from '../wallet/Wallet';
import Editor from '../post/Write/Write';
import Settings from '../settings/Settings';
import ProfileSettings from '../app/ProfileSettings';
import User from '../user/User';
import UserProfile from '../user/UserProfile';
import UserComments from '../user/UserComments';
import UserFollowers from '../user/UserFollowers';
import UserFollowing from '../user/UserFollowing';
import UserReblogs from '../user/UserReblogs';
import UserFeed from '../user/UserFeed';
import UserWallet from '../user/UserWallet';
import UserActivity from '../activity/UserActivity';
import Post from '../post/Post';
import Page from '../feed/Page';
import Discover from '../discover/Discover';

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
        routes: [
          {
            path: '/@:name',
            exact: true,
            component: UserProfile,
          },
          {
            path: '/@:name/comments',
            exact: true,
            component: UserComments,
          },
          {
            path: '/@:name/followers',
            exact: true,
            component: UserFollowers,
          },
          {
            path: '/@:name/followed',
            exact: true,
            component: UserFollowing,
          },
          {
            path: '/@:name/reblogs',
            exact: true,
            component: UserReblogs,
          },
          {
            path: '/@:name/feed',
            exact: true,
            component: UserFeed,
          },
          {
            path: '/@:name/transfers',
            exact: true,
            component: UserWallet,
          },
          {
            path: '/@:name/activity',
            exact: true,
            component: UserActivity,
          },
        ],
      },
      {
        path: '/discover',
        exact: true,
        component: Discover,
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
