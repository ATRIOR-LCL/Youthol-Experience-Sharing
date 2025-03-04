import { BoxProps } from "../../components/Content/Box";

const sectionFiveArray: BoxProps[] = [
  {
    title: "示例代码",
    detail: (
      <pre>
        <code className="language-js">
          {`
<h1>Hello World!</h1>
<button>change</button>
<script>
    var h1 = document.querySelector('h1');
    var button = document.querySelector('button');
    // 死循环指定的时间
    function delay(duration) {
        var start = Date.now();
        while (Date.now() - start < duration) {}
    }
    button.onclick = function() {
        h1.textContent = 'Hello JavaScript!';
        delay(3000);
    }
</script>
                    `}
        </code>
      </pre>
    ),
  },
  {
    title: "为什么会卡死呢?",
    detail: (
      <span>
        当鼠标点击按钮的时候, 事件回调函数会被包装成任务push到消息队列,<br /><br />
        渲染主线程从消息队列中取出任务执行, 首先会对h1的文本进行修改,也确实进行了修改, 但是并没有渲染到页面当中去,渲染这个事情就是另一个任务了, <br /><br />
        所以渲染h1这个任务就会被push进消息队列,
        但是渲染主线程的任务并没有结束, 他需要循环 duration 秒, 当跳出循环时,
        渲染主线程从消息队列中获取渲染任务并执行其中的代码,<br /><br />
        此时页面中的文字才会被更新
      </span>
    ),
  },
];

export default sectionFiveArray;
