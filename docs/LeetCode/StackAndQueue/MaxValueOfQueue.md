# 队列\_剑指Offer59题\_队列的最大值问题

## 题目描述如下：

请定义一个队列并实现函数max\_value得到队列里的最大值，要求函数max\_value、push\_back和pop\_front的均摊时间复杂度都是O(1)。若队列为空，pop\_front和max\_value需要返回-1。

示例1:

~~~shell
输入: 
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
~~~

示例2:

```shell
输入: 
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]
```

限制：

- `1 <= push_back,pop_front,max_value的总操作数 <= 10000`
- `1 <= value <= 10^5`

代码：

~~~java
class MaxQueue {

    public MaxQueue() {
         
    }
    
    public int max_value() {
         
    }
    
    public void push_back(int value) {
         
    }
    
    public int pop_front() {
         
    }
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * MaxQueue obj = new MaxQueue();
 * int param_1 = obj.max_value();
 * obj.push_back(value);
 * int param_3 = obj.pop_front();
 */
~~~

## 思考思路

题目的描述中提到了3个方法，其中max\_value是求最大值的，**提到最大值，首先想到这里应该是用到了某种排序的手段**。剩下的两个方法分别是push和pop操作，这明显是栈、队列这块的操作。因此不难想象，这道题用到的数据结构包含某种队列，然后涉及到某种排序方法。

本着先实现，后优化的原则，最容易想到的解决方案是这样的：

<span style="color:blue">用一个队列保存所有的数据，这样保证了push和pop操作是正常执行的。然后将这个队列从大到小排列到另一个数据结构中，这样执行max_value方法时输出数组第一项即可。删除队列中数据的时候，用来排序的数据结构中的对应数据也应该删掉。</span>

于是乎很容易写出这样的代码：

~~~java
class MaxQueue {
    
    private Queue datas;
    
    // TODO:排序后的数据暂时用队列保存
    private Queue sortedDatas;

    public MaxQueue() {
        this.datas = new LinkedList<Integer>;
        this.sortedDatas = new LinkedList<Integer>;
    }
    
    public int max_value() {
        if (sortedDatas.isEmpty()) {
            return -1;
        }
        return sortedDatas.peekFirst();
    }
    
    public void push_back(int value) {
        datas.offer(value);
        sortedDatas = addNewDataAndSortDatas();
    }
    
    public int pop_front() {
        if (datas.isEmpty()) {
			return -1;
        }
        int ans = datas.pool();
        deleteDataFromSortedDatas(ans);
        return ans;
    }
    
    private Queue addNewDataAndSortDatas() {
        // TODO: 将所有数据排序，然后覆盖原先的sortedDatas
    }
    
    private void deleteDataFromSortedDatas(int ans) {
        // TODO: 将ans从sortedDatas队列中删除
    }
}
~~~

接下来考虑着三个TODO项如何去解决。首先要确定的是<span style="color:red">用什么数据结构保存sortedDatas</span>。

| 数据结构 | 优劣分析                                                     | 结论       |
| -------- | ------------------------------------------------------------ | ---------- |
| 数组     | 队列中元素个数能达到10000，定义10000长度的数组浪费内存，不定义这么长要考虑扩容，浪费性能。 | :no_entry: |
| 链表     | 不可能用这货排序。                                           | :no_entry: |
| 栈       | 将数据由小到大存入，能直接取到最大值。删除数据时要再用一个栈倒数据。**正常的排序方法难以实现均摊时间复杂度O(1)**。所以能实现但是时间复杂度不符合要求。 |            |
| 队列     | 单调递减的队列。遇到的问题和栈一致。                         |            |
| 树       | 最大二叉树能实现，但是树在内存中也是以数组的形式保存的，问题和数组一致。 | :no_entry: |

所以说，要么用栈，要么用数组来保存sortedDatas中的数据。所以决定采用双端队列来处理sortedDatas，因为**双端队列能同时满足栈、队列的所有操作**。下一个问题便是……<span style="color:red">如何给这个双端队列进行排序</span>。

堆排序、快速排序的时间复杂度是O(n lg n)；其他的线性排序算法时间复杂度是O(n)。这些都不太满足题目的要求。所以这里我想到了一种可能性：**有些数是不是没有参与排序**？如果队列中有n个数字，参与排序的数字小于n，那么排序的时间复杂度会更小的。那么，**什么样的数字可能不用参与排序呢**？max\_value方法要输出的是最大的数，所以最大的数字是一定参与排序的，即比较小的数字可以不用参与排序——我只管最大的数，其他的数字顺序对与否甚至数据的有无，都不会影响到最后的结果。

所以进一步的解决方案是这样的：

<span style="color:red">每次有新的数据插入的时候，将sortedDatas中的数据从后往前跟入参比较，如果小于入参，就直接舍弃掉，直到遇到比入参大的数字时再将入参存入队列中。</span>

这样的好处显而易见：小于入参的数字不会影响到最大值的输出。另一方面，队列中的数据来得比现在这个入参早，所以小于入参的数字会比这个入参更早的被删除掉。即，小于入参的数字永远不可能作为最大值背输出出来。

所以优化后的代码是这个样子的：

~~~java
class MaxQueue {
    Queue<Integer> datas;
    Deque<Integer> sortedDatas;

    public MaxQueue() {
        datas = new LinkedList<Integer>();
        sortedDatas = new LinkedList<Integer>();
    }
    
    public int max_value() {
        if (sortedDatas.isEmpty()) {
            return -1;
        }
        return sortedDatas.peekFirst();
    }
    
    public void push_back(int value) {
        while (!sortedDatas.isEmpty() && sortedDatas.peekLast() < value) {
            sortedDatas.pollLast();
        }
        sortedDatas.offerLast(value);
        datas.offer(value);
    }
    
    public int pop_front() {
        if (datas.isEmpty()) {
            return -1;
        }
        int ans = datas.poll();
        if (ans == sortedDatas.peekFirst()) {
            sortedDatas.pollFirst();
        }
        return ans;
    }
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * MaxQueue obj = new MaxQueue();
 * int param_1 = obj.max_value();
 * obj.push_back(value);
 * int param_3 = obj.pop_front();
 */
~~~

此题得解。