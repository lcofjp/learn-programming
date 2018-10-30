/**
 * v-bind:title="message" 绑定数据到attribute
 * v-if="seen" 条件渲染
 * v-for="todo in todos" 循环渲染
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

var vm = new Vue({
    el: '#root1',
    data: {
        a: 1,
        c: 3
    },
    // 计算属性，用于从data计算得到的属性
    // 计算属性是响应求值的，只有它依赖的属性发生变化才会重新求值，否则会使用缓存的值。
    // now没有依赖，只会求值一次，不会刷新；如果不想要缓存，可以做成函数放在methods里。
    computed: {
        cplus1: function(){
            return this.c + 1;
        },
        now: function(){
            return Date.now();
        }
    },
    methods: {
        click: function(){console.log('click'); this.a++;}
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