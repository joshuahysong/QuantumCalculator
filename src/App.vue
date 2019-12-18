<template>
<div id="app" class="container">
    <h1 class="mb-5">Quantum Drive Calculator</h1>
    <travel-form class="mb-5" @calculate:travel="calculateTravel" />
    <drives-table :distance="distance" />
</div>
</template>

<script>
import DrivesTable from '@/components/DrivesTable'
import TravelForm from '@/components/TravelForm'

export default {
    name: 'app',
    components: {
        DrivesTable,
        TravelForm
    },
    data() {
        return {
            distance: 0
        }
    },
    methods: {
        calculateTravel(distance) {
            this.distance = distance * 1000;
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
