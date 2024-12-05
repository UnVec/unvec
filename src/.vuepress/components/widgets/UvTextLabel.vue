<template>
  <div class="uv-text-label">
    <el-text size="large"> {{ title }} </el-text>
    <el-text>{{ description }}</el-text>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
});
</script>

<style scoped>
.uv-text-label {
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 0.8em;
  width: 18em;
  line-height: 1.5em;
}
</style>
