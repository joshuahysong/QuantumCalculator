<template>
    <div id='drives-table'>
        <b-table striped hover :items="drives" :fields="fields" ></b-table>
    </div>
</template>

<script>
import drivesjson from '../../content/drives.json'
export default {
    name: 'drives-table',
    props: {
        distance: Number
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
        },
        mySortCompare(a, b, key) {
            if (key === 'time') {
                // Assuming the date field is a `Date` object, subtraction
                // works on the date serial number (epoch value)
                return a[key] - b[key]
            } else {
                // Let b-table handle sorting other fields (other than `date` field)
                return false
            }
        }
    }
}
</script>