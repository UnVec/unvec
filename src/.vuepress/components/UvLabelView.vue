<template>
  <el-row :gutter="20" style="margin: 2em 0">
    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" align="center">
      <UVTextLabel
        title="资源整合"
        description="只做高质量大而全的干货教程分享推荐。面对分类众多且良莠不济的资源，通过专业测试甄选最适合和最佳的解决方案，去糟粕而取精华，在兼其广度的同时也把握深度。"
      />
    </el-col>
    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" align="center">
      <UVTextLabel
        title="零阶起手"
        description="不懂计算机，怕踩坑，看说明如看天书？采用图文+视频编撰文档，通过简洁朴素的内容赢得人心，还有技术咨询社区讨论，让工作者们更专注于自己的领域问题。"
      />
    </el-col>
    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" align="center">
      <UVTextLabel
        title="开源共建"
        description="不仅是搬运工，更是从无到有的创建者。从入门到精通，从小白到开拓者，自己也可以分享和维护自己领域技术圈的内容。在信息茧房的时代，打破壁垒，洞若观火。"
      />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import UVTextLabel from "./widgets/UvTextLabel.vue";
</script>

<style scoped></style>
