<template>
    <div class="sidebar">
        <div class="sidebar-navbar">
            <h2>Cart</h2>
            <button @click="toggle">Toggle Sidebar</button>
        </div>
        <ol>
            <li>
                <div class="row">
                    <div class="cell">Product</div>
                    <div class="cell">Carrot</div>
                </div>
                <div class="row">
                    <div class="cell">Price</div>
                    <div class="cell">$4.82</div>
                </div>
                <div class="row">
                    <div class="cell">Qty</div>
                    <div class="cell">{{ cart.carrots }}</div>
                </div>
                <div class="row">
                    <div class="cell">Total</div>
                    <div class="cell">${{ cart.carrots * 4.82 }}</div>
                </div>
            </li>
        </ol>
        <div class="row">
            <div class="cell">Total: ${{ cartTotal }}</div>
            <div class="cell">
                <button>Checkout</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidebarVue',
    props: ['toggle', 'cart'],
    computed: {
        cartTotal() {
            return (this.cart.carrots * 4.82).toFixed(2)
        }
    }
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