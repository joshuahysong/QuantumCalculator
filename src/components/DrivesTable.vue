<template>
    <div id='drives-table'>
        <b-table small striped hover dark :items="filteredDrives" :fields="fields" responsive="lg"></b-table>
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
                    key: 'name',
                    label: 'Drive Name',
                    sortable: true
                },
                {
                    key: 'size',
                    sortable: true
                },
                {
                    key: 'class',
                    formatter: (value, key, item) => {
                        if (value && key === 'class') {
                            return this.$parent.getVerboseClass(item.class);
                        }
                    },
                    sortable: true,
                    sortByFormatted: true,
                },
                {
                    key: 'grade',
                    sortable: true
                },
                {
                    key: 'manufacturer',
                    sortable: true
                },               
                {
                    key: 'stage2Speed',
                    label: 'Speed (m/s)',
                    class: 'text-right',
                    formatter: (value, key, item) => {
                        if (value && key === 'stage2Speed') {
                            return item.stage2Speed.toLocaleString();
                        }
                    },
                    sortable: true,
                    sortByFormatted: true,
                },               
                {
                    key: 'stage2Acceleration',
                    label: 'Acceleration (m/s)',
                    class: 'text-right',
                    formatter: (value, key, item) => {
                        if (value && key === 'stage2Acceleration') {
                            return item.stage2Acceleration.toLocaleString();
                        }
                    },
                    sortable: true,
                    sortByFormatted: true,
                },
                {
                    key: 'fuelUsage',
                    label: 'Fuel Used',
                    class: 'text-right',
                    formatter: (value, key, item) => {
                        if (value && key === 'fuelUsage') {
                            return (this.distance / 1000000 * item.fuelUsage).toFixed(2);
                        }
                    },
                    sortable: true,
                    sortByFormatted: true,
                }, 
                {
                    key: 'time',
                    label: 'Travel Time (Minutes) *',
                    class: 'text-right',
                    formatter: (value, key, item) => {
                        if (!value && key === 'time') {
                            return new Date(this.calculateTravelTime(item.stage2Speed, item.stage2Acceleration) * 1000).toISOString().substr(14, 5)
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
        // Sort by size then by name both ascending
        this.drives = this.drives.sort((a,b) => a.size > b.size ? 1 : (a.size === b.size) ? ((a.name > b.name) ? 1 : -1) : -1);
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
                if (this.filter.names.length > 0) {
                    filteredData = filteredData.filter((drive) => this.filter.names.includes(drive.name));
                }
                if (this.filter.sizes.length > 0) {
                    filteredData = filteredData.filter((drive) => this.filter.sizes.includes(drive.size));
                }
                if (this.filter.classes.length > 0) {
                    filteredData = filteredData.filter((drive) => this.filter.classes.includes(drive.class));
                }
                if (this.filter.grades.length > 0) {
                    filteredData = filteredData.filter((drive) => this.filter.grades.includes(drive.grade));
                }
            }
            return filteredData;
        }
    }
}
</script>