/**
 * v-bind:title="message" 绑定数据到attribute
 * v-if="seen" 条件渲染
 * v-for="todo in todos" 循环渲染; v-for具有比v-if更高的优先级
 * <li v-for="(item, index) in list">
 * <div v-for="(value, key, index) in object"> 这个是按着Object.keys()的顺序遍历的
 * v-on:click="handler" 设置处理事件
 * v-model="message" 表单双向绑定
 * v-html="rawHtml" 渲染原始html字符串
 */

 /**
  * 事件名称：
  * beforeCreate
  * created
  * beforeMount
  * mounted
  * beforeUpdate
  * updated
  * beforeDestroy
  * destroyed
  */

/**
 * 指令:参数.修饰符
 * v-on:submit.prevent="onSubmit"
 * 简写：
 * 1. v-bind:href="url"  ==> :href="url"
 * 2. v-on:click="handler" ==> @click="handler"
 */
var c = 0;
var o = {a: 1, b: 2}
Object.defineProperty(o, "c", {
    get: function(){return c;},
    set: function(val){ c = val; }
})
var vm = new Vue({
    el: '#root1',
    data: {
        a: 1,
        c: 3,
        // 经测试属性不能以下划线开头。。。
        p_num: 0,
        name: '',
        email: '',
        isInputName: true,
        list: [1,2,3,4,5],
        o: o
    },
    // 计算属性，用于从data计算得到的属性
    // 计算属性是响应求值的，只有它依赖的属性发生变化才会重新求值，否则会使用缓存的值。
    // now没有依赖，只会求值一次，不会刷新；如果不想要缓存，可以做成函数放在methods里。
    // 计算属性也可以具有setter和getter
    computed: {
        cplus1: function(){
            return this.c + 1;
        },
        now: function(){
            return Date.now();
        },
        // 具有getter和setter
        num: {
            get: function(){return this.p_num;},
            set: function(val){
                if (typeof val === 'number') {
                    this.p_num = val;
                } else {
                    throw Error('num should be set to number type');
                }
            }
        },
        nums: function(){return [4,5,6,7];}
    },
    // 侦听属性，这个木有缓存，具有副作用的事件应该使用侦听属性
    watch: {
        c: function(){
            // 当属性c改变时，这个函数会被调用
            console.log('c property changed');
        },
        name: function(){
        }
    },
    methods: {
        click: function(){console.log('click'); this.a++;},
        toggleInput: function(){
            this.isInputName = !this.isInputName;
        }
    },
    created: function() {
        // this === vm
        console.log("created, a is: ", this.a);
    },
    mounted: function() {
        console.log('mounted');
    }
})
console.log('end;');