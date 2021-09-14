<template>
  <div>
    <div class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/past-orders">Past Orders</router-link></li>
      </ul>
      <button @click="toggleSidebar">Cart ({{ totalQuantity }})</button>
    </div>
    <sidebarVue 
      v-if="showSidebar" 
      :toggle="toggleSidebar"
      :cart="cart"
      :inventory="inventory"
      :removeItem="removeItem"
    />
    <router-view />
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
  computed: {
    totalQuantity() {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
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
    },
    removeItem(name) {
      delete this.cart[name]
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
</style>
