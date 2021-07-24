<template>
    <div>
        <form>
            <input v-model="update.title" type="text" name="title" placeholder="Add Todo..." >
            <input
                v-if="update.hasOwnProperty('_id')"
                class="btn"
                type="submit" value="Update"
                @click="updateTodo"
            >
            <input
                v-else class="btn"
                type="submit"
                value="Add"
                @click="addTodo"
            >
        </form>
    </div>    
</template>

<script>
    // import {uuid} from 'vue-uuid'
export default {
    name: "addTodo",
    props: [
        'update'
    ],
    data() {
        return {
            title: '',
            errorMsg: ''
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault()
            if (this.update.title === '') {
               this.errorMsg= "Please Enter a Todo"
                this.$emit('emitError', this.errorMsg)
            } else if (!isNaN(this.update.title)) {
                this.errorMsg= "Your Todo cannot be a number"
                this.$emit('emitError', this.errorMsg)
            }  else {
                 const newTodo = {
                    title: this.update.title,
                    completed: false
                }
                // SEND TO PARENT COMPONENT
                this.$emit('bindTodo', newTodo)
                this.update = {}
            }
        },
        updateTodo(e) {
            e.preventDefault()
            if (this.update.title === '') {
               this.errorMsg= "Please Enter a Todo"
                this.$emit('emitError', this.errorMsg)
            } else if (!isNaN(this.update.title)) {
                this.errorMsg= "Your Todo cannot be a number"
                this.$emit('emitError', this.errorMsg)
            }  else {
                 const updatedTodo = {
                    title: this.update.title,
                    completed: this.update.completed,
                    todoId: this.update._id
                }
                // SEND TO PARENT COMPONENT
                this.$emit('updateTodoRecord', updatedTodo)
                this.update = {}
            }












            // if (this.update) {
            //    this.errorMsg= "Please Enter a Todo"
            //     this.$emit('emitError', this.errorMsg)
            // } else if (!isNaN(this.update.title)) {
            //     this.errorMsg= "Your Todo cannot be a number"
            //     this.$emit('emitError', this.errorMsg)
            // }  else {
            //      const newTodo = {
            //         title: this.update.title,
            //         completed: false
            //     }
            //     // SEND TO PARENT COMPONENT
            //     this.$emit('updateTodoRecord', update)
            //     this.update = {}
            // }
        }
    }
}
</script>

<style scoped>
    form {
        display: flex
    }
    input[type="text"] {
        padding:5px;
        flex: 10;
    }
    
    input[type="text"] {
        flex: 2;
    }
</style>