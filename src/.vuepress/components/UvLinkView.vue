<template>
  <el-col align="center" style="margin: 2em 0">
    <span style="font-size: 2em">🌈资源站点导航</span>
  </el-col>
  <el-row :gutter="16">
    <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
      <uv-link-card
        name="Github"
        desc="代码仓库管理 开源社区"
        img="/assets/logo/github.svg"
        link="https://github.com"
      />
    </el-col>
    <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
      <uv-link-card
        name="Stack Overflow"
        desc="编程开发者讨论问答社区"
        img="/assets/logo/stackoverflow.svg"
        link="https://stackoverflow.com"
      />
    </el-col>
    <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
      <uv-link-card
        name="WikiPedia"
        desc="维基百科 顾名思义，包罗万象"
        img="/assets/logo/wikipedia.svg"
        link="https://www.wikipedia.org/"
      />
    </el-col>
    <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
      <uv-link-card
        name="Reddit"
        desc="红迪 老外的百度贴吧，活跃度高"
        img="/assets/logo/reddit.svg"
        link="https://www.reddit.com/"
      />
    </el-col>
    <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
      <uv-link-card
        name="QuickRef"
        desc="备忘清单 速查手册"
        img="/assets/logo/quickref.svg"
        link="https://quickref.me/zh-CN/"
      />
    </el-col>
    <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
      <uv-link-card
        name="稀土掘金"
        desc="国内编程技术社区"
        img="/assets/logo/juejin.svg"
        link="https://juejin.cn"
      />
    </el-col>
    <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
      <uv-link-card
        name="V2EX"
        desc="中文技术论坛"
        img="/assets/logo/v2ex.svg"
        link="https://www.v2ex.com/"
      />
    </el-col>
    <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
      <uv-link-card
        name="菜鸟教程"
        desc="教程还是比较全的，新人推荐"
        img="/assets/logo/runoob.png"
        link="https://www.runoob.com"
      />
    </el-col>
    <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
      <uv-link-card
        name="GitCode"
        desc="国内git仓库管理 by 腾讯"
        img="/assets/logo/gitcode.png"
        link="https://gitcode.com"
      />
    </el-col>
    <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
      <uv-link-card
        name="Z-library"
        desc="古希腊掌管电子书的神"
        img="/assets/logo/zlibrary.png"
        link="https://z-library.sk"
      />
    </el-col>
    <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
      <uv-link-card
        name="Coursera"
        desc="真正的大学没有围墙"
        img="/assets/logo/coursera.png"
        link="https://www.coursera.org"
      />
    </el-col>
    <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
      <uv-link-card
        name="HelloGithub"
        desc="发现和分享有趣、入门级开源项目"
        img="/assets/logo/hellogithub.png"
        link="https://hellogithub.com"
      />
    </el-col>
    <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
      <uv-link-card
        name="果核剥壳"
        desc="互联网的净土 资源分享"
        img="/assets/logo/ghxi.png"
        link="https://www.ghxi.com"
      />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import UvLinkCard from "./widgets/UvLinkCard.vue";
</script>
<style scoped></style>
