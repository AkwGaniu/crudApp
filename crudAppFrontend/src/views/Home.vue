<template>
  <div id="app" >
    <addTodo v-on:updateTodoRecord="updateTodo" v-on:bindTodo="addTodo" v-bind:update="updateRecord" v-on:emitError="displayError"/>
    <error v-bind:errorMsg="error" v-if="errorStatus" v-on:close="errorStatus= false"/>
    <todoItem v-bind:todos = "todos" v-on:update-todo="setRecordForUpdate" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import todoItem from "../components/Todos"
import error from "../components/error"
import addTodo from "../components/addTodo"
import axios from 'axios'

export default {
  name: 'Home',
  components: { 
    todoItem,
    addTodo,
    error
  },
  data(){
    return {
      updateRecord: {},
      todos: [],
      errorStatus: false,
      error: '',
      // baseUrl: "https://e-todo-api.herokuapp.com/todo",
      baseUrl: "http://localhost:3000"
    }
  },
  methods: {
    deleteTodo(id) {
      axios.delete(`${this.baseUrl}/delete_todo/${id}`)
      .then( () => self.location = '/' )
      .catch(error => console.log(error))
    },

    addTodo(newTodo1) {
      const { title, completed } = newTodo1
      this.errorStatus = false
      axios.post(`${this.baseUrl}/add_todo`,
      {
        title,
        completed: completed
      })
      .then( (res) =>  {
        console.log(res)
        self.location = '/'
      } )
      .catch(error => console.log(error))      
    },

    setRecordForUpdate (todo) {
      this.updateRecord = todo
    },

    updateTodo(todo) {
      console.log(todo)
      const { todoId, title, completed } = todo
      this.errorStatus = false
      axios.put(`${this.baseUrl}/update_todo`,
      {
        title,
        todoId: todoId,
        completed: completed
      })
      .then( (res) =>  {
        console.log(res)
        self.location = '/'
      })
      .catch(error => console.log(error))      
    },

    displayError(errorMsg) {
      this.errorStatus = true
      this.error = errorMsg
    }
  },
  created() {
    axios.get(this.baseUrl)
    .then(res => this.todos = res.data.data)
    .catch((error) =>{
      console.log(error);
    })
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding:0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
} 

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer
}

.btn:hover {
  background: #666;
}

</style>
