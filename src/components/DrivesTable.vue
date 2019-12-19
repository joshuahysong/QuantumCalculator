<template>
    <div id='drives-table'>
        <b-table striped hover :items="filteredDrives" :fields="fields" ></b-table>
    </div>
</template>

<script>
import drivesjson from '../../content/drives.json'
export default {
    name: 'drives-table',
    props: {
        distance: Number,
        filter: {}
    },
    data() {
        return {
            fields: [
                {
                    key: 'localname',
                    sortable: true
                },                
                {
                    key: 'size',
                    sortable: true
                },                
                {
                    key: 'qdSpeedms',
                    label: 'Speed (m/s)',
                    sortable: true
                },               
                {
                    key: 'qdAccelstage2ms',
                    label: 'Acceleration (m/s)',
                    sortable: true
                },
                {
                    key: 'time',
                    label: 'Travel Time (Minutes)',
                    formatter: (value, key, item) => {
                        if (!value && key === 'time') {
                            return new Date(this.calculateTravelTime(item.qdSpeedms, item.qdAccelstage2ms) * 1000).toISOString().substr(14, 5)
                        }
                    },
                    sortable: true,
                    sortByFormatted: true,
                }
            ],
            drives: drivesjson
        }
    },
    created() {
        // Sort by Size then by Localname both ascending
        this.drives = this.drives.sort((a,b) => a.size > b.size ? 1 : (a.size === b.size) ? ((a.localname > b.localname) ? 1 : -1) : -1);
    },
    methods: {
        calculateTravelTime(speed, acceleration) {
            var accelerationDistance = Math.pow(speed, 2) / (2 * acceleration);
            var travelTime = 0;
            if (this.distance < accelerationDistance) {
                travelTime = 4 * Math.sqrt(this.distance / (2 * acceleration));
            } else {
                travelTime = speed / acceleration + this.distance / speed;
            }
            return travelTime;
        }
    },
    computed: {
        filteredDrives() {
            var filteredData = this.drives;
            if (this.filter && Object.entries(this.filter).length > 0) {   
                if (this.filter.size.length > 0) {
                    filteredData = filteredData.filter((drive) => this.filter.size.includes(drive.size));
                }
            }
            return filteredData;
        }
    }
}
</script>