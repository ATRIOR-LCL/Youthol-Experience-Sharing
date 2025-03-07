import { BoxProps } from "../../components/Content/Box";

const sectionOneArray: BoxProps[] = [
  {
    title: "何为进程?",
    detail: (
      <>
        <span>
          程序运行需要有他自己专属的而内存空间,
          可以把这块内存空间简单的理解为进程
        </span>
        <br />
        <br />
        <span>
          每个应用至少有一个进程, 进程之间相互独立, 即使要通信, 也需要双方同意
        </span>
      </>
    ),
  },
  {
    title: "何为线程?",
    detail: (
      <>
        <span>有了进程之后, 就可以运行程序代码了.</span>
        <br />
        <br />
        <span>运行代码的 "人" 称之为 "线程".</span>
        <br />
        <br />
        <span>
          一个进程至少有一个线程, 所以在进程开启后会自动创建一个线程来运行代码,
          该线程称之为主线程
        </span>
        <br />
        <br />
        <span>
          如果程序需要同时执行多行代码, 主线程就会启动更多的线程来执行代码,
          所以一个进程中可以包含多个线程.
        </span>
      </>
    ),
  },
];

export default sectionOneArray;
