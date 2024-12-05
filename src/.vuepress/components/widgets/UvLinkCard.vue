<template>
  <el-card shadow="hover" :body-style="uvLinkCardStyle">
    <el-image :src="img" fit="fill" :lazy="true"></el-image>
    <div class="uv-link-info">
      <el-link class="title" :underline="false" :href="link" target="_blank">{{
        name
      }}</el-link>
      <el-text class="description hidden-xs-only" truncated line-clamp="1">{{
        desc
      }}</el-text>
    </div>
  </el-card>
</template>

<script setup lang="ts">
const uvLinkCardStyle = {
  padding: "8px",
  display: "flex",
  height: "3em",
  justifyContent: "flex-start",
  alignItems: "center",
  overflow: "hidden",
};
defineProps({
  img: String,
  name: String,
  desc: String,
  link: String,
});
</script>

<style scoped>
.el-card {
  margin: 8px 0;
  .el-image {
    height: 2.6em;
    width: 2.6em;
    border-radius: 6px;
  }
}
.uv-link-info {
  /* width: auto; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 8px;

  .title {
    font-size: 1em;
  }
  .description {
    font-size: 0.7em;
  }
}
</style>
