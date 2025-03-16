import { BoxProps } from "../../components/Content/Box";

const sectionSixArray: BoxProps[] = [
    {
        title: '任务没有优先级, 在消息队列中先进先出',
        detail: (
            <>
                <p>但消息队列是有优先级的</p>
                <p>根据 W3C 的最新解释:</p>
                <ul>
                    <li>每个任务都有一个任务类型, 同一个类型的任务必须在一个队列, 不同类型的任务可以分属于不同的队列, 再一次事件循环中, 浏览器可以根据实际情况从不同的队列中取出任务执行.</li>
                    <li>
                    浏览器必须准备好一个微队列 (microtask queue) , 微队列中的任务优先所有的其他任务执行
                    </li><br />
                    <small>随着浏览器的复杂度急剧提升, W3C 不再使用宏队列的说法</small>
                </ul>
            </>
        )
    },
    {
        title: '在目前的 chrome 浏览器中, 至少包含:',
        detail: (
            <>
            <ul>
                <li>延时队列</li>
                <small>用于存放计时器到达后的回调任务, 优先级 [中]</small>
                <li>交互队列</li>
                <small>用于存放用户操作后产生的时间处理任务, 优先级 [高]</small>
                <li>微队列</li>
                <small>用户存放需要最快执行的任务, 优先级 [最高]</small>
                <br />
                <br />
                <p>添加任务到微队列的主要方式是使用 <b>Promise</b>, <b>MutationObserver </b>
                例如:</p>
                <pre>
                    <code className="language-js hljs language-js">
                        {
                            'Promise.resolve().then(函数)'
                        }
                    </code>
                </pre>
            </ul>
            </>
        )
    }
]

export default sectionSixArray;