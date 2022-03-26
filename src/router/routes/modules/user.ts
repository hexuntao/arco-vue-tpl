export default {
  path: 'user',
  name: 'user',
  component: () => import('@/views/user/index.vue'),
  meta: {
    locale: 'menu.user',
    icon: 'icon-user',
    requiresAuth: true,
    order: 7,
  },
  children: [
    {
      path: 'info',
      name: 'info',
      component: () => import('@/views/user/info/index.vue'),
      meta: {
        locale: 'menu.user.info',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};
