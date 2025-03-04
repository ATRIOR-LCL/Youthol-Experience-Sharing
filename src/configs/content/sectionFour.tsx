import { BoxProps } from "../../components/Content/Box";

const sectionFourArray: BoxProps[] = [
  {
    title: "何为异步?",
    detail: (
      <>
        <p>代码在执行过程中, 会遇到一些无法立即执行的任务, 比如:</p>
        <ul>
          <li>计时完成后需要执行的任务 — setTimeout , setInterval</li>
          <li>网络通信完成后需要执行的任务 — XHR, Fetch</li>
          <li>用户操作后需要执行的任务 — addEventListener</li>
        </ul>
        <p>同步代码执行过程: </p>
      </>
    ),
  },
  {
    title: "渲染主线程无论如何不能阻塞!",
    detail: (
      <>
        <p>
          如果让渲染主线程等待这些任务的时机到达, 就会导致主线程长期处于<b>阻塞</b>
          的状态, 从而导致浏览器 卡死
        </p><br />
        <p>
          所以, 为了避免这种情况, 就需要让这些任务在主线程之外执行,
          这就是异步的由来
        </p>
      </>
    ),
  },
];

export default sectionFourArray;
