<template>
    <div id="travel-form">
        <form @submit.prevent="handleSubmit">
            <div class="row">
                <div class="col-4 offset-3">                    
                    <label>Distance in kilometers</label>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <multiselect v-model="fromLocation" :options="travel.locations" :searchable="false" :close-on-select="true" placeholder="Pick a starting location"></multiselect>
                </div>
                <div class="col">
                    <multiselect v-model="toLocation" :options="travel.locations" :searchable="false" :close-on-select="true" placeholder="Pick a starting location"></multiselect>
                </div>
                <div class="col">
                    <input v-model="travel.distance" type="number" class="form-control" :disabled="toLocation !== 'Custom'" />
                </div>
                <div class="col-2">
                    <button type="submit" class="btn btn-primary">Calculate</button>
                </div>
            </div>
        </form>
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
            travel: {
                locations: ['Custom'],
                distance: 42287791
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('calculate:travel', this.travel.distance);
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