<template>
<div id="app">
    <div class="container">
        <h1 class="my-5 text-center">Quantum Travel Time Calculator</h1>
        <travel-form @travel:search="calculateTravel" @travel:filter="filterDrives" class="mb-3" />
        <p class="mb-5 small text-center"><em>Travel times are estimations and may not be 100% accurate to actual travel time in game until the underlying calculations are better understood.</em></p>
    </div>
    <div class="container-fluid">  
        <drives-table :distance="distance" :filter="filter" />
    </div>
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
            distance: 42287791000, // distance from Olisar to ArcCorp
            filter: {}
        }
    },
    methods: {
        calculateTravel(distance) {
            // kilometers to meters
            this.distance = distance * 1000; 
        },
        filterDrives(filter) {
            this.filter = filter;
        },
        getVerboseClass(driveClass) {
            switch(driveClass) {
                case 'ind':
                    return 'Industrial';
                case 'mil':
                    return 'Military';
                case 'civ':
                    return 'Civilian';
                case 'stl':
                    return 'Stealth';
                default:
                    return driveClass;
            }
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
