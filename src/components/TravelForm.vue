<template>
    <div id="travel-form">
        <form @submit.prevent="handleSubmit">
            <div class="row">
                <div class="col-4 offset-3">                    
                    <label>Distance in kilometers</label>
                </div>
            </div>
            <div class="row">
                <div class="col-4 offset-3">
                    <input v-model="travel.distance" type="number" class="form-control" />
                </div>
                <div class="col-2">
                    <button type="submit" class="btn btn-primary">Calculate</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "travel-form",
    data() {
        return {
            travel: {
                distance: 42287791
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('calculate:travel', this.travel.distance);
        }
    }
}
</script>