<template>
<div id="app">
    <div class="container-fluid">
        <h1 class="mt-4 text-center text-warning">Quantum Travel Time Calculator</h1>
        <p class="small text-center">Data: 3.8.0-LIVE.3917223</p>
        <travel-form @travel:search="calculateTravel" @travel:filter="filterDrives" class="mb-3" />
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
            distance: 57469469000, // distance from Olisar to ArcCorp
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
.theme-header {
    color: #FF9700
}
</style>
