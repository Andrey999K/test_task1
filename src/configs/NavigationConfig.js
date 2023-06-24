import {
  BorderOuterOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  TabletOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const MainNavTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'sidenav.main',
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: 'main-scheduler',
        path: `${APP_PREFIX_PATH}/main/scheduler`,
        title: 'sidenav.main.scheduler',
        icon: BorderOuterOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-dashboards',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: 'sidenav.main.dashboard',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-ecommerce',
        path: `${APP_PREFIX_PATH}/main/ecommerce`,
        title: 'sidenav.main.ecommerce',
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'main-ecommerce-productList',
            path: `${APP_PREFIX_PATH}/main/ecommerce/product-list`,
            title: 'sidenav.main.ecommerce.productList',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'main-ecommerce-categories',
            path: `${APP_PREFIX_PATH}/dashboards/default`,
            title: 'sidenav.main.ecommerce.categories',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'main-ecommerce-collections',
            path: `${APP_PREFIX_PATH}/dashboards/default`,
            title: 'sidenav.main.ecommerce.collections',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'main-ecommerce-combo',
            path: `${APP_PREFIX_PATH}/dashboards/default`,
            title: 'sidenav.main.ecommerce.combo',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      },
      {
        key: 'main-orders',
        path: `${APP_PREFIX_PATH}/main/orders`,
        title: 'sidenav.main.orders',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-clients',
        path: `${APP_PREFIX_PATH}/main/clients`,
        title: 'sidenav.main.clients',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-clients-userList',
            path: `${APP_PREFIX_PATH}/main/clients/user-list`,
            title: 'sidenav.main.clients.userList',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'main-clients-groups',
            path: `${APP_PREFIX_PATH}/dashboards/default`,
            title: 'sidenav.main.clients.groups',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
        ]
      },
      {
        key: 'main-banners',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: 'sidenav.main.banners',
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-promoCodes',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: 'sidenav.main.promoCodes',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-offlinePoints',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: 'sidenav.main.offlinePoints',
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-offlinePoints-addresses',
            path: `${APP_PREFIX_PATH}/dashboards/default`,
            title: 'sidenav.main.offlinePoints.addresses',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-offlinePoints-geofences',
            path: `${APP_PREFIX_PATH}/dashboards/default`,
            title: 'sidenav.main.offlinePoints.geofences',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'main-employees',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: 'sidenav.main.employees',
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-newsletters',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: 'sidenav.main.newsletters',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  }
]

const SystemNavTree = [
  {
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'sidenav.system',
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: 'system-settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: 'sidenav.system.settings',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'system-mobileApp',
        path: `${APP_PREFIX_PATH}/system/mobileApp`,
        title: 'sidenav.system.mobileApp',
        icon: TabletOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'system-logs',
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: 'sidenav.system.logs',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  }
]

const navigationConfig = [
  ...MainNavTree,
  ...SystemNavTree
]

export default navigationConfig;
