<template>
    <div id="travel-form">
        <form @submit.prevent="handleSearchSubmit" class="container">
            <div class="row no-gutters-md mb-3">
                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0">
                    <label>From</label>
                    <multiselect v-model="fromLocation" :options="fromLocationOptions" :searchable="false" placeholder="Pick a starting location"></multiselect>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0">
                    <label>To</label>
                    <multiselect v-model="toLocation" :options="toLocationOptions" :searchable="false" placeholder="Pick an ending location" :disabled="fromLocation === 'Custom'"></multiselect>
                </div>
                <div class="col-12 col-lg mb-3 mb-lg-0">
                    <label>Distance (Km)</label>
                    <div class="input-group">
                        <input v-model="distance" type="number" class="form-control" :disabled="fromLocation !== 'Custom'" placeholder="Enter custom distance" aria-label="Custom Distance" aria-describedby="calculate-travel">
                        <div class="input-group-append">
                            <button class="btn btn-warning" type="submit" id="calculate-travel" :disabled="fromLocation !== 'Custom'">></button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div class='card text-white bg-dark'>
            <div class='card-header'>
                Filters
            </div>
            <div class='card-body'>
                <div class="row mb-3">
                    <div class="col-12 col-md-6 col-lg mb-3 mb-lg-0">
                        <label>Name</label>
                        <multiselect v-model="filter.names" 
                            :options="driveNameOptions" 
                            :multiple="true"
                            :limit="1"
                            placeholder="Select a drive name"></multiselect>
                    </div>
                    <div class="col-12 col-md-6 col-lg mb-3 mb-lg-0">
                        <label>Size</label>
                        <multiselect v-model="filter.sizes" 
                            :options="driveSizeOptions" 
                            :multiple="true" 
                            :searchable="false"
                            placeholder="Select a drive size"></multiselect>
                    </div>
                    <div class="col-12 col-md-6 col-lg mb-3 mb-md-0">
                        <label>Grade</label>
                        <multiselect v-model="filter.grades" 
                            :options="driveGradeOptions" 
                            :multiple="true" 
                            :searchable="false"
                            placeholder="Select a drive grade"></multiselect>
                    </div>
                    <div class="col-12 col-md-6 col-lg">
                        <label>Class</label>
                        <multiselect v-model="filter.classes" 
                            :options="driveClassOptions" 
                            :multiple="true" 
                            :searchable="false"
                            placeholder="Select a drive class"></multiselect>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import drivesjson from '../../content/drives.json'
import distancesjson from '../../content/distances.json'
import Multiselect from 'vue-multiselect'
export default {
    name: "travel-form",
    components: {
        Multiselect
    },
    data() {
        return {
            drives: drivesjson,
            fromLocation: 'Port Olisar',
            toLocation: 'Microtech',
            fromLocationOptions: [],
            toLocationOptions: [],
            filter: {
                names: [],
                sizes: [],
                classes: [],
                grades: []
            },
            distance: 57469469,
            distances: distancesjson
        }
    },
    created() {
        this.$emit('travel:filter', this.filter);
        var travelArray = this.distances.map(distance => distance.to)
            .concat(this.distances.map(distance => distance.from))
            .filter(this.getDistinct)
            .sort();
        travelArray.unshift("Custom");
        this.fromLocationOptions = travelArray;
        this.fromLocation = 'Port Olisar';
        this.setToLocationOptions();
    },
    mounted() {
        this.toLocation = 'Microtech'
    },
    methods: {
        handleSearchSubmit() {
            this.$emit('travel:search', this.distance);
        },
        getDistinct(value, index, self) {
            return self.indexOf(value) === index;
        },
        getDistance(from, to) {
            if (from && to && from !== 'Custom' && to !== 'Custom') {
                var matchedDistances = this.distances
                    .filter(distance => (distance.from === from && distance.to === to)
                        ||  (distance.from === to && distance.to === from))
                if (matchedDistances.length > 0) {
                    return matchedDistances[0].kilometers;
                }
            }
            return 0;
        },
        setToLocationOptions() {
            this.toLocationOptions = this.distances
                .filter(distance => distance.to === this.fromLocation
                    || distance.from === this.fromLocation)
                .map(distance => distance.to)
                .concat(this.distances
                .filter(distance => distance.to === this.fromLocation
                    || distance.from === this.fromLocation)
                .map(distance => distance.from))
                .filter(this.getDistinct)
                .filter(d => d !== this.fromLocation)
                .sort();
            
            if (this.toLocationOptions.length > 0) {
                this.toLocation = this.toLocationOptions[0];
            }
        }
    },
    computed: {
        travelOptions() {
            var travelArray = this.distances.map(distance => distance.to)
                .concat(this.distances.map(distance => distance.from))
                .filter(this.getDistinct)
                .sort();
            travelArray.unshift("Custom");
            return travelArray;
        },
        driveNameOptions() {
            var names = this.drives.map(drive => drive.name).filter(this.getDistinct);
            return names.sort();
        },
        driveSizeOptions() {
            var sizes = this.drives.map(drive => drive.size).filter(this.getDistinct);
            return sizes.sort();
        },
        driveClassOptions() {
            var classes = this.drives
                .filter((drive) => drive.class)
                .map(drive => drive.class)
                .filter(this.getDistinct);
            return classes.sort();
        },
        driveGradeOptions() {
            var grades = this.drives
                .filter((drive) => drive.class)
                .map(drive => drive.grade)
                .filter(this.getDistinct);
            return grades.sort();
        },
    },
    watch: {
        fromLocation: function(newValue) {
            if (newValue === 'Custom' && this.toLocation !== 'Custom') {
                this.toLocation = 'Custom';
            } else {
                this.setToLocationOptions();
                this.distance = this.getDistance(newValue, this.toLocation);
            }
            this.$emit('travel:search', this.distance);
        },
        toLocation: function(newValue) {
            if (newValue === 'Custom' && this.fromLocation !== 'Custom') {
                this.fromLocation = 'Custom';
            } else {
                this.distance = this.getDistance(this.fromLocation, newValue);
            }
            this.$emit('travel:search', this.distance);
        }
    }
}
</script>