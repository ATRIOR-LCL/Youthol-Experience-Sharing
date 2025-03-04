import { BoxProps } from "../../components/Content/Box";

const sectionTwoArray: BoxProps[] = [
  {
    title: "浏览器是一个多进程多线程的应用程序",
    detail: (
      <>
        <span>浏览器的内部工作十分复杂</span><br /><br />
        <span>为了避免相互影响, 为了减少连环崩溃的几率没, 当启动浏览器后, 他会自动启动多个进程</span>
      </>
    )
  },
  {
    title: "其中, 最主要的进程有:",
    detail: (
      <ul>
        <li>浏览器进程</li>
        <small>主要负责界面展示, 用户交互, 子进程管理等. 浏览器进程内部会启动多个线程处理不同的任务</small>
        <li>网络进程</li>a
        <small>负责加载网络资源. 网络进程内部会启动多个线程来处理不同的网络任务.</small>
        <li>渲染进程</li>
        <small>渲染进程启动后, 会开启一个 渲染主线程  , 主线程负责执行HTML, CSS, JS代码</small><br />
        <small>默认情况下, 浏览器会为每个标签页开始一个新的渲染进程, 以保证不同的标签页之间不会相互影响</small><br /><br />
        <p>可以在浏览器的任务管理器中查看当前的所有进程</p>
      </ul>
    )
  },
];

export default sectionTwoArray;
