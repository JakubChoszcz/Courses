<template>
    <div>
        <h1>PastOrders</h1>

        
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
                <div class="cell"></div>
                <div class="cell">
                  <button @click="addToCart(product.name, i)">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
export default {
    name: 'PastOrders'
}
</script>