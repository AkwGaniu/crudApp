<template>
    <div id="app">
        <div v-bind:key = "todo._id"  v-for = "todo in todos">
            <displayTodo v-bind:todo = "todo" v-on:update-todo="$emit('update-todo', todo)" v-on:del-todo="$emit('del-todo', todo._id)" />
        </div>
    </div>
</template>

<script>
import displayTodo from "../components/todo_items"
export default {
    name: "todoItem",
    components: {
        displayTodo
    },
    props: ["todos"]
}
</script>

<style lang="scss" scoped>

</style>
