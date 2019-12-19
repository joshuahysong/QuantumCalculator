<template>
    <div id="travel-form">
        <form @submit.prevent="handleSearchSubmit">
            <div class="row no-gutters-md mb-3">
                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0">
                    <label>From</label>
                    <multiselect v-model="fromLocation" :options="travel.locations" :searchable="false" :close-on-select="true" placeholder="Pick a starting location"></multiselect>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0">
                    <label>To</label>
                    <multiselect v-model="toLocation" :options="travel.locations" :searchable="false" :close-on-select="true" placeholder="Pick a starting location"></multiselect>
                </div>
                <div class="col-12 col-lg mb-3 mb-lg-0">
                    <label>Distance</label>
                    <input v-model="travel.distance" type="number" class="form-control" :disabled="toLocation !== 'Custom'" />
                </div>
                <div class="col-12 col-lg-auto align-self-end text-left text-lg-right">
                    <button type="submit" class="btn btn-primary">Calculate</button>
                </div>
            </div>
        </form>
        <div class='card'>
            <div class='card-header'>
                Filters
            </div>
            <div class='card-body'>
                <div class="row mb-3">
                    <div class="col">
                        <label>Size</label>
                        <multiselect v-model="filter.size" :options="filterOptions.size" :multiple="true" :close-on-select="false" placeholder="Select a drive size"></multiselect>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
    name: "travel-form",
    components: {
        Multiselect
    },
    data() {
        return {
            fromLocation: 'Custom',
            toLocation: 'Custom',
            filter: {
                size: []
            },
            filterOptions: {
                size: [1, 2, 3, 4]
            },
            travel: {
                locations: ['Custom'],
                distance: 42287791
            }
        }
    },
    created() {
        this.$emit('travel:filter', this.filter);
    },
    methods: {
        handleSearchSubmit() {
            this.$emit('travel:search', this.travel.distance);
        }
    },
    watch: {
        fromLocation: function(newValue) {
            if (newValue === 'Custom' && this.toLocation !== 'Custom') {
                this.toLocation = 'Custom';
            }
        },
        toLocation: function(newValue) {
            if (newValue === 'Custom' && this.fromLocation !== 'Custom') {
                this.fromLocation = 'Custom';
            }
        }
    }
}
</script>