<template>
  <div class="container">
    <Breadcrumb :items="['个人中心', '用户信息']" />
    <UserInfoHeader />
  </div>
</template>

<script lang="ts" setup>
  import UserInfoHeader from './components/user-info-header.vue';
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }
</style>
