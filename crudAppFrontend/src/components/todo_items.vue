<template>
    <div class="todo" v-bind:class = "{'is-completed': todo.completed}">
        <p> 
            <input type="checkbox" v-on:change="markComplete">
            {{todo.title}}
            <button class="del" @click="$emit('del-todo', todo)">x</button>
            <button class="edit" @click="$emit('update-todo', todo)">/</button>
        </p>
    </div>
</template>

<script>
export default {
    name: "displayTodo",
    props: ['todo'],
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed;
        }
    }
}
</script>

<style scoped>
    .todo {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px dotted #ccc;
        font-weight: 600;
    }
    .is-completed {
        text-decoration: line-through;
    }

    .del {
        background: red;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
    .edit {
        background: rgb(0, 195, 255);
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
        margin-right: 5px;
        font-weight: bold;
    }
</style>