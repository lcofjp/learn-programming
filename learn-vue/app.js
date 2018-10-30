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

var vm = new Vue({
    el: '#root1',
    data: {
        a: 1
    },
    methods: {
        'click': function(){console.log('click'); this.a++;}
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