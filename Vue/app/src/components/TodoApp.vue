<template>
    <div>
      <div class="item">
        <input type="text" placeholder="Todo" v-model="newItem">
        <button @click="addItem">Dodaj</button>
      </div>
  
      <TodoItem 
        v-for="item in items" 
        :key="item.id" 
        :item="item"
        @removeClicked="removeItem"
      />
    </div>
  </template>
  
  <script>
    import TodoItem from './TodoItem.vue'

  export default {
    components: {
        TodoItem 
    },
    data() {
      return {
        newItem: 'x',
        items: [
          { title: 'Swimming', completed: false, id: 1 },
          { title: 'Running', completed: true, id: 2 },
        ]
      }
    },
    methods: {
      addItem() {
        this.items.push({ 
          title: this.newItem, 
          completed: false, 
          id: this.items.length + 1
        })
        this.newItem = ''
      },
      removeItem(id) {
        const index = this.items.findIndex(e => e.id === id)
        this.items[index].completed = true
      }
    }
  }
  </script>
  
  <style scoped>
    .item {
      border: 1px solid #cdcdcd;
      margin: 8px;
      padding: 10px;
    }
  
    .completed {
      opacity: .5;
    }
  </style>
  