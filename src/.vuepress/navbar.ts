import { navbar } from "vuepress-theme-hope";

export default navbar([
  // {
  //   text: "🙋‍♂️摇人",
  //   link: "/help/",
  // },
  {
    text: "💻计算机",
    prefix: "/computer/",
    children: [
      {
        text: "操作系统",
        prefix: "platform/",
        children: [
          {
            text: "Windows",
            link: "windows/",
          },
          "linux/",
          "macos/",
          "harmonyos/",
          "android/",
        ],
      },
      {
        text: "计算机通识",
        children: ["file/", "network/", "program/", "device/"],
      },
    ],
  },
  // {
  //   text: "🚀软件",
  //   link: "/software/",
  // },
  // {
  //   text: "⌨️开发",
  //   link: "/development/",
  // },
  // {
  //   text: "🔨工程",
  //   link: "/engineering/",
  // },
  // {
  //   text: "🌈部署",
  //   link: "/deploy/",
  // },
  // {
  //   text: "✨CMD",
  //   link: "/command/",
  // },
]);
