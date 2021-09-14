<template>
    <div class="sidebar">
        <div class="sidebar-navbar">
            <h2>Cart</h2>
            <button @click="toggle">Toggle Sidebar</button>
        </div>
        <p v-if="!Object.keys(cart).length">No items in cart</p>
        <ol v-else>
            <li v-for="(quantity, key, i) in cart" :key="i">
                <div class="row">
                    <div class="cell">Product</div>
                    <div class="cell">{{ key }}</div>
                </div>
                <div class="row">
                    <div class="cell">Price</div>
                    <div class="cell">${{ getPrice(key) }}</div>
                </div>
                <div class="row">
                    <div class="cell">Qty</div>
                    <div class="cell">{{ quantity }}</div>
                </div>
                <div class="row">
                    <div class="cell">Total</div>
                    <div class="cell">${{ quantity * getPrice(key) }}</div>
                </div>
                <div class="row">
                    <div class="cell"></div>
                    <div class="cell">
                        <button @click="removeItem(key)">Delete</button>
                    </div>
                </div>
            </li>
        </ol>
        <div class="row">
            <div class="cell">Total: ${{ calculateTotal() }}</div>
            <div class="cell">
                <button>Checkout</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidebarVue',
    props: ['toggle', 'cart', 'inventory', 'removeItem'],
    methods: {
        getPrice(name) {
            const product = this.inventory.find((p) => {
                return p.name == name
            })
            return product.price.USD
        },
        calculateTotal() {
            const total = Object.entries(this.cart).reduce((acc, curr) => {
                return acc + (curr[1] * this.getPrice(curr[0]))
            }, 0)
            return total.toFixed(2)
        }
    },
}
</script>

<style>
    .sidebar {
        width: 600px;
        height: 100%;
        background: purple;
        position: fixed;
        top: 0;
        right: 0;
        padding: 16px;
    }

    .sidebar-navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    ol {
        color: white;
    }
</style>