<template>
  <div>
    <div class="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Past Orders</a></li>
      </ul>
      <button @click="toggleSidebar">Toggle Sidebar</button>
    </div>
    <sidebarVue 
      v-if="showSidebar" 
      :toggle="toggleSidebar"
      :cart="cart" 
    />
    <h2>Recommend</h2>
    <div class="cards">
      <div v-for="(product, i) in inventory.slice(0,3)" v-bind:key="product.id" class="card">
        <h2>{{ product.name }}:</h2>
        <div class="row">
          <div class="cell"><label>Type:</label></div>
          <div class="cell"><p>{{ product.type }}</p></div>
        </div>
        <div class="row">
          <div class="cell"><label>Price:</label></div>
          <div class="cell"><p>${{ product.price.USD }}</p></div>
        </div>
        <form>
          <div class="row">        
            <div class="cell">
              <label>Quantity:</label>
            </div>
            <div class="cell">
              <input type="number" v-model.number="product.quantity">
            </div>
          </div>
        </form>
        <div class="row">
          <div class="cell">
            <button @click="addToCart(product.name, i)">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebarVue from './components/sidebarVue.vue'

export default {
  name: 'App',
  components: {
    sidebarVue
  },
  data() {
    return {
      showSidebar: false,
      inventory: [],
      cart: {}
    }
  },
  methods: {
    addToCart(name, index) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += this.inventory[index].quantity
      console.log(this.cart);
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    }
  },
  async mounted() {
    const res = await fetch('./food.json')
    const data = await res.json()
    this.inventory = data
  }
}
</script>

<style>
p {
  margin: 0;
}

.navbar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: greenyellow;
}

.navbar ul {
  display: flex;
  flex-direction: row;
  gap: 28px;
}

.cards {
  display: flex;
  flex-direction: row;
  gap: 32px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  padding: 8px;
  border-bottom: 1px solid gray;
}
</style>
