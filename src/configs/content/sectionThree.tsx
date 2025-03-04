import { BoxProps } from "../../components/Content/Box";

const sectionThreeArray: BoxProps[] = [
  {
    title: "渲染主线程是浏览器中最繁忙的线程",
    detail: (
      <>
        <p>需要他处理的任务包括但不限于:</p>
        <ul>
          <li>解析HTML</li>
          <li>解析CSS</li>
          <li>计算样式</li>
          <li>布局</li>
          <li>处理图层</li>
          <li>每秒把网页画 60 次 (FPS)</li>
          <li>执行全局 JS 代码</li>
          <li>执行事件处理函数</li>
          <li>执行计时器回调函数</li>
          <li>...</li>
        </ul>
        <p>
          主线程要处理这么多的任务, 主线程遇到了一个前所未有的难题:
          如何调度任务?
        </p>
      </>
    ),
  },
  {
    title: "消息队列",
    detail: (
      <ul>
        <li>在最开始的时候, 渲染主线程会进入一个无限循环</li>
        <li>
          每一次循环会检查消息队列中是否有任务存在. 如果有,
          就取出第一个任务执行, 执行完一个后进入下一次循环; 如果没有,
          则进入休眠模式
        </li>
        <li>
          其他所有线程 (包括其他进程的线程) 可以随时向消息队列添加任务.
          新任务会加到消息队列的末尾. 在添加新任务时,如果主线程是休眠状态,
          则会将其唤醒以继续循环拿取任务
        </li>
        <small>这样一来, 就可以让每个任务有条不紊, 持续的进行下去了<br/><br/>整个过程, 被称之为事件循环 (消息循环)</small>
      </ul>
    ),
  },
];

export default sectionThreeArray;
