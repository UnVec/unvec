<template>
  <el-switch v-model="isDark">
    <template #active-action>
      <span class="custom-active-action">🌙</span>
    </template>
    <template #inactive-action>
      <span class="custom-inactive-action">☀️</span>
    </template>
  </el-switch>
</template>

<script setup>
// import {  } from "vuepress-theme-hope/client";
</script>

<style lang="scss" scoped></style>
