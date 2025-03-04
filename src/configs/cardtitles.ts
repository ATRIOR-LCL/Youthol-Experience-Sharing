interface cardObject {
  id: number;
  title: string;
  description: string;
}

const cards: cardObject[] = [
  {
    id: 1,
    title: "浏览器的进程模型",
    description: "何为进程 / 何为线程",
  },
  {
    id: 2,
    title: "浏览器有哪些进程和线程?",
    description: "浏览器是一个多进程多线程的应用程序",
  },
  {
    id: 3,
    title: "渲染主线程是如何工作的?",
    description: "最繁忙的线程 / 渲染主线程工作原理",
  },
  {
    id: 4,
    title: "何为异步?",
    description: "使用异步的方式, 渲染主线程永不阻塞",
  },
  {
    id: 5,
    title: "JS为何会阻塞渲染?",
    description: "模拟浏览器阻塞时的场景",
  },
  {
    id: 6,
    title: "任务有优先级吗?",
    description: "任务没有优先级, 在消息队列中先进先出但消息队列是有优先级的",
  },
];

class cardsArrayIterator {
  public arr: cardObject[];
  constructor(arr: cardObject[]) {
    this.arr = arr;
  }

  [Symbol.iterator]() {
    this.arr.sort((a, b) => a.id - b.id);

    let index = 0;
    return {
      next: () => {
        if (index < this.arr.length) {
          return {
            value: this.arr[index++],
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  }
}

const cardsArray = new cardsArrayIterator(cards);

export default cardsArray;
