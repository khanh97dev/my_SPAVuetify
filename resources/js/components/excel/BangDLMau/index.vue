<template>
  <div>
    <v-tabs
      fixed-tabs
    >
      <v-tab :to="{ name: 'excel.DLmau' }">
        Dữ liệu mẫu
      </v-tab>
      <v-tab :to="{ name: 'excel.BangThuGonDLMau' }">
        Bảng Thu Gọn
      </v-tab>
      <v-tab :to="{ name: 'excel.BangLuuDLMau' }">
        Bảng nhập dữ liệu
      </v-tab>
    </v-tabs>
    <router-view></router-view>
  </div>
</template>
