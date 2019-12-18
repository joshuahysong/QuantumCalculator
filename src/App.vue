<template>
<main id="app" class="container">
    <h1 class="mb-5">Quantum Drive Calculator</h1>
    <travel-form @calculate:travel="calculateTravel" class="mb-3" />
    <p class="mb-3 small"><em>Travel times are estimations and may not be 100% accurate to actual travel time in game until the underlying calculations are better understood.</em></p>
    <drives-table :distance="distance" />
</main>
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
            distance: 42287791000 // distance from Olisar to ArcCorp
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
