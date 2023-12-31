import { HeaderConfig, ModalConfig } from './app.model';
import { SocialURLsList } from './auth/auth.model';
import { UserDetailed } from './main/main.model';

export enum APP_ROUTER_NAME {
  Auth = 'auth',
  Main = 'main',
  LogIn = 'log-in',
  SignUp = 'sign-up',
  ResetPassword = 'reset-password',
  NewPassword = 'new-password',
  Contact = 'contact',
  Chat = 'chat',
  MyProfile = 'my-profile',
  ProfileSettings = 'profile-settings',
  Details = 'details',
  ChangePassword = 'change-password',
  Info = 'info',
  Privacy = 'privacy',
  AvatarEdit = 'avatar-edit',
  NotFound = 'not-found'
}

export enum SOCIAL_ICONS {
  Instagram = 'instagram',
  Facebook = 'facebook',
  Skype = 'skype',
  LinkedIn = 'linkedin',
  Telegram = 'telegram',
  none = ''
}

export enum BUTTON_THEMES {
  Primary = 'primary',
  Secondary = 'secondary',
  IconRight = 'icon-right',
  IconOnly = 'icon-only',
  Small = 'small',
  Link = 'link',
  Rounded = 'rounded'
}

export enum TOASTER_ICONS {
  Close = 'close',
  Info = 'info'
}

export enum ICON_NAMES {
  Arrow = 'arrow',
  Close = 'close',
  Chat = 'chat',
  Search = 'search',
  Filter = 'filter',
  Edit = 'edit',
  Checked = 'checked',
  DoubleChecked = 'double-checked',
  CircleCheck = 'circle-check',
  Calendar = 'calendar',
  Shown = 'shown',
  Hidden = 'hidden',
  Info = 'info',
  Link = 'link',
  Reload = 'reload',
  SuccessFilled = 'success-filled',
  WarningFilled = 'warning-filled',
  ErrorFilled = 'error-filled',
  InfoFilled = 'info-filled',
  SendMessage = 'send-message'
}

export enum HEADER_RIGHT_BLOCK {
  LoginButton = 'loginButton',
  Close = 'close',
  StatusBar = 'statusBar',
  Skip = 'skip'
}

export enum HEADER_ICON_TYPE {
  Logo = 'logo',
  Close = 'close',
  Arrow = 'arrow'
}

export const enum HEADER_CONFIG_NAME {
  logIn = 'logIn',
  signUp = 'signUp',
  resetPassword = 'resetPassword',
  newPassword = 'newPassword',
  mainRoot = 'mainRoot',
  contacts = 'contacts',
  chat = 'chat',
  myProfile = 'myProfile',
  profileSettings = 'profileSettings',
  accountDetails = 'accountDetails',
  changePassword = 'changePassword',
  profileDetails = 'profileDetails',
  privacy = 'privacy',
  avatarEdit = 'avatarEdit',
  messages = 'messages'
}

export const HEADER_CONFIG_LIST: { [key in HEADER_CONFIG_NAME]: HeaderConfig } = {
  logIn: {
    title: 'Login',
    right: HEADER_RIGHT_BLOCK.Close
  },
  signUp: {
    title: 'Sign Up',
    right: HEADER_RIGHT_BLOCK.Close
  },
  resetPassword: {
    title: 'Password reset',
    right: HEADER_RIGHT_BLOCK.Close
  },
  newPassword: {
    title: 'Password reset',
    right: HEADER_RIGHT_BLOCK.Close
  },
  mainRoot: {
    leftButton: HEADER_ICON_TYPE.Logo,
    title: '',
    right: HEADER_RIGHT_BLOCK.StatusBar,
    colored: true
  },
  contacts: {
    leftButton: HEADER_ICON_TYPE.Logo,
    title: '',
    right: HEADER_RIGHT_BLOCK.StatusBar,
    colored: true
  },
  messages: {
    leftButton: HEADER_ICON_TYPE.Logo,
    title: '',
    right: HEADER_RIGHT_BLOCK.StatusBar,
    colored: true
  },
  chat: {
    right: HEADER_RIGHT_BLOCK.Close
  },
  myProfile: {
    leftButton: HEADER_ICON_TYPE.Logo,
    title: '',
    right: HEADER_RIGHT_BLOCK.StatusBar,
    colored: true
  },
  profileSettings: {
    leftButton: HEADER_ICON_TYPE.Logo,
    title: '',
    right: HEADER_RIGHT_BLOCK.StatusBar,
    colored: true
  },
  accountDetails: {
    leftButton: HEADER_ICON_TYPE.Logo,
    title: '',
    right: HEADER_RIGHT_BLOCK.StatusBar,
    colored: true
  },
  changePassword: {
    leftButton: HEADER_ICON_TYPE.Logo,
    title: '',
    right: HEADER_RIGHT_BLOCK.StatusBar
  },
  profileDetails: {
    leftButton: HEADER_ICON_TYPE.Logo,
    title: '',
    right: HEADER_RIGHT_BLOCK.StatusBar,
    colored: true
  },
  privacy: {
    leftButton: HEADER_ICON_TYPE.Logo,
    title: '',
    right: HEADER_RIGHT_BLOCK.StatusBar,
    colored: true
  },
  avatarEdit: {
    leftButton: HEADER_ICON_TYPE.Arrow,
    title: 'Edit Photo'
  }
};

export enum INPUT_TYPES {
  Checkbox = 'checkbox',
  Date = 'date',
  Email = 'email',
  File = 'file',
  Password = 'password',
  Range = 'range',
  Search = 'search',
  Text = 'text',
  Url = 'url'
}

export enum INPUT_PLACEHOLDERS {
  Linkedin = 'http://linkedin.com',
  Instagram = 'http://instagram.com',
  Telegram = 'http://telegram.com',
  Facebook = 'http://facebook.com',
  Skype = 'nickname',
  None = '',
  Chat = 'Start typing...',
  MaskedCode = '______'
}

export enum ERROR_MESSAGES {
  required = 'This field cannot be empty',
  minlength = 'Short passwords are easy to guess. Try the one with at least 8 characters.',
  hasUpperAndLowerCases = 'Make sure to use both upper-case and lower-case letters.',
  passwordHasNumeric = 'Make sure to use at least 1 digit for your password.',
  passwordHasNonAlphaNumeric = 'Make sure to use at least 1 special character for your password.',
  samePasswordsValue = 'Passwords don’t match.',
  passwordWithoutSpace = 'Spaces are not allowed',
  passwordAllowedCharacters = 'Passwords contains not allowed characters',
  userNameAllowedCharacters = 'Make sure to use only Cyrillic or Latin symbols, including apostrophe and dash',
  email = 'Make sure to enter your email',
  emailWrong = 'Login is incorrect',
  passwordWrong = 'Password is incorrect'
}

export const REGEXP_PATTERNS = {
  passwordAllowedCharacters: /^([A-Za-z0-9!"§$%&/\\(){}[\]=?+*#'^°,;.:<>|@~\-_´`])*$/,
  hasUpperAndLowerCases: /(?=.*[a-z])(?=.*[A-Z])/,
  hasNumeric: /\d+/,
  hasNonAlphaNumeric: /[!"§$%&/\\(){}[\]=?+*#'^°,;.:<>|@~\-_´`]+/,
  hasSpace: /\s/,
  userNameAllowedCharacters: /^[A-Za-zА-Яа-яІіЇїЄє'-\s]+$/
};

export const INTEREST_CHIPS_NAMES: string[] = [
  'Education',
  'Dining',
  'Promotions',
  'Office',
  'Attractions',
  'Family',
  'Health',
  'Sports',
  'Travel'
];

const getSocialPlaceholder = (socialName: string, suffix = ''): string => `${socialName} URL${suffix}`;

export const SOCIAL_PLACEHOLDERS_CONFIG_OPTIONAL: SocialURLsList = {
  linkedin: getSocialPlaceholder('LinkedIn', ' (Optional)'),
  instagram: getSocialPlaceholder('Instagram', ' (Optional)'),
  facebook: getSocialPlaceholder('Facebook', ' (Optional)'),
  skype: getSocialPlaceholder('Skype', ' (Optional)'),
  telegram: getSocialPlaceholder('Telegram', ' (Optional)')
};

export const SOCIAL_PLACEHOLDERS_CONFIG: SocialURLsList = {
  linkedin: getSocialPlaceholder('LinkedIn'),
  instagram: getSocialPlaceholder('Instagram'),
  facebook: getSocialPlaceholder('Facebook'),
  skype: getSocialPlaceholder('Skype'),
  telegram: getSocialPlaceholder('Telegram')
};

export const MODAL_LOGIN: ModalConfig = {
  titleText: 'Sorry, you are not login yet',
  supportText: 'You need to be logged in to message other users.',
  primaryButtonText: 'Log in',
  secondaryButtonText: 'Cancel'
};

export const MODAL_SIGNUP: ModalConfig = {
  titleText: 'Leaving already?',
  supportText: 'You havenʼt finished sign up yet. If you leave now, all the information will be lost.',
  primaryButtonText: 'Continue to sign up',
  secondaryButtonText: 'Leave'
};

export const MODAL_EDIT_INFO: ModalConfig = {
  titleText: 'Unsaved changes will be lost',
  supportText: 'If you leave now, all the unsaved information will be lost.',
  primaryButtonText: 'Continue editing',
  secondaryButtonText: 'Leave without saving'
};

export const DEFAULT_AVATAR: string = '/assets/images/default-avatar.svg';

export const enum STORAGE_KEY {
  userEmail = 'userEmail',
  accessToken = 'accessToken'
}

export const INITIAL_USER_DATA: UserDetailed = {
  name: '',
  email: '',
  birthday: null,
  registration: new Date().getTime(),
  about: '',
  interests: [],
  location: '',
  avatar: '',
  socialMedia: {
    instagram: '',
    linkedin: '',
    facebook: '',
    skype: '',
    telegram: ''
  },
  privacy: {
    description: false,
    location: false,
    account: true,
    age: false
  }
};
