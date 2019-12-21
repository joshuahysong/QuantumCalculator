<template>
    <div id="travel-form">
        <form @submit.prevent="handleSearchSubmit">
            <div class="row no-gutters-md mb-3">
                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0">
                    <label>From</label>
                    <multiselect v-model="fromLocation" :options="travelOptions" :searchable="false" :close-on-select="true" placeholder="Pick a starting location"></multiselect>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0">
                    <label>To</label>
                    <multiselect v-model="toLocation" :options="travelOptions" :searchable="false" :close-on-select="true" placeholder="Pick a starting location"></multiselect>
                </div>
                <div class="col-12 col-lg mb-3 mb-lg-0">
                    <label>Distance (Km)</label>
                    <input v-model="distance" type="number" class="form-control" :disabled="toLocation !== 'Custom'" />
                </div>
                <div class="col-12 col-lg-auto align-self-end text-left text-lg-right">
                    <button type="submit" class="btn btn-primary" :disabled="toLocation !== 'Custom'">Calculate</button>
                </div>
            </div>
        </form>
        <div class='card'>
            <div class='card-header'>
                Filters
            </div>
            <div class='card-body'>
                <div class="row mb-3">
                    <div class="col-12 col-lg mb-3 mb-lg-0">
                        <label>Name</label>
                        <multiselect v-model="filter.names" 
                            :options="driveNameOptions" 
                            :multiple="true"
                            :close-on-select="false"
                            :limit="1"
                            placeholder="Select a drive name"></multiselect>
                    </div>
                    <div class="col-12 col-md-6 col-lg mb-3 mb-md-0">
                        <label>Size</label>
                        <multiselect v-model="filter.sizes" 
                            :options="driveSizeOptions" 
                            :multiple="true" 
                            :searchable="false"
                            :close-on-select="false"
                            placeholder="Select a drive size"></multiselect>
                    </div>
                    <div class="col-12 col-md-6 col-lg">
                        <label>Class</label>
                        <multiselect v-model="filter.classes" 
                            :options="driveClassOptions" 
                            :multiple="true" 
                            :searchable="false"
                            :close-on-select="false"
                            track-by="key"
                            label="label"
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
            toLocation: 'ArcCorp',
            filter: {
                names: [],
                sizes: [],
                classes: []
            },
            distance: 42287791,
            distances: distancesjson
        }
    },
    created() {
        this.$emit('travel:filter', this.filter);
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
            return this.drives.map(drive => drive.localname).filter(this.getDistinct);
        },
        driveSizeOptions() {
            return this.drives.map(drive => drive.size).filter(this.getDistinct);
        },
        driveClassOptions() {
            return this.drives
                .filter((drive) => drive.class)
                .map(drive => drive.class)
                .filter(this.getDistinct)
                .map(c => { return { "key": c, "label": this.$parent.getVerboseClass(c) } });
        }
    },
    watch: {
        fromLocation: function(newValue) {
            if (newValue === 'Custom' && this.toLocation !== 'Custom') {
                this.toLocation = 'Custom';
            } else {
                this.distance = this.getDistance(this.toLocation, newValue);
            }
            this.$emit('travel:search', this.distance);
        },
        toLocation: function(newValue) {
            if (newValue === 'Custom' && this.fromLocation !== 'Custom') {
                this.fromLocation = 'Custom';
            } else {
                this.distance = this.getDistance(newValue, this.fromLocation);
            }
            this.$emit('travel:search', this.distance);
        }
    }
}
</script>