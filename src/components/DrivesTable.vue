<template>
    <div id='drives-table'>
        <b-table striped hover :items="filteredDrives" :fields="fields" responsive="md"></b-table>
    </div>
</template>

<script>
import axios from 'axios';
import drivesjson from '../../public/assets/json/drives.json'

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
                    label: 'Name',
                    sortable: true
                },
                {
                    key: 'size',
                    sortable: true
                },
                {
                    key: 'class',
                    sortable: true,
                },
                {
                    key: 'fuelUsage',
                    label: 'Fuel Usage',
                    sortable: true
                },                
                {
                    key: 'stage2Speed',
                    label: 'Speed (m/s)',
                    sortable: true
                },               
                {
                    key: 'stage2Acceleration',
                    label: 'Acceleration (m/s)',
                    sortable: true
                },
                {
                    key: 'time',
                    label: 'Travel Time (Minutes)',
                    formatter: (value, key, item) => {
                        if (!value && key === 'time') {
                            return new Date(this.calculateTravelTime(item.stage2Speed, item.stage2Acceleration) * 1000).toISOString().substr(14, 5)
                        }
                    },
                    sortable: true,
                    sortByFormatted: true,
                }
            ],
            drivesDb: drivesjson,
            drives: []
        }
    },
    created() {
        axios.get('./assets/json/QuantumDrives')
            .then((res) => {
                // Surely there's a better way...
                var trackIndex = 0;
                for (var i = 0; i < res.data.length; i++) {
                    var driveData = [];
                    axios.get(`./assets/json/QuantumDrives/${res.data[i]}`)
                        .then((driveResponse)=> {
                            if (driveResponse 
                                && driveResponse.data
                                && driveResponse.data.Raw
                                && driveResponse.data.Raw.Entity
                                && driveResponse.data.Raw.Entity.Components
                                ) {
                                var drive = new Object();
                                var driveName = driveResponse.data.Raw.Entity.Components.SAttachableComponentParams.AttachDef.Localization.Name;
                                driveName = driveName.replace('_SCItem', '').replace('@item_name_', '').replace('@item_Name_', '').replace('@item_name', '').replace('@item_Name', '')

                                var matchingDriveDb = this.drivesDb.filter(x => x.name === driveName)
                                if (matchingDriveDb && matchingDriveDb.length > 0) {
                                    drive.localname = matchingDriveDb[0].localname.substring(matchingDriveDb[0].localname.lastIndexOf('_') + 1);
                                    drive.class = this.$parent.getVerboseClass(matchingDriveDb[0].class)
                                } else {
                                    drive.localname = driveName.substring(driveName.lastIndexOf('_') + 1)
                                }
                                drive.size = driveResponse.data.Raw.Entity.Components.SAttachableComponentParams.AttachDef.Size;
                                drive.fuelUsage = driveResponse.data.Raw.Entity.Components.SCItemQuantumDriveParams.quantumFuelRequirement;
                                drive.stage2Speed = driveResponse.data.Raw.Entity.Components.SCItemQuantumDriveParams.params.driveSpeed;
                                drive.stage2Acceleration = driveResponse.data.Raw.Entity.Components.SCItemQuantumDriveParams.params.stageTwoAccelRate;

                                driveData.push(drive);
                                trackIndex++;
                                // If we are on the last record finish processing
                                if (trackIndex === res.data.length) {
                                    this.drives = driveData;
                                    // Sort by Size then by Localname both ascending
                                    this.drives = this.drives.sort((a,b) => a.size > b.size ? 1 : (a.size === b.size) ? ((a.localname > b.localname) ? 1 : -1) : -1);
                                }
                            }
                        })
                        .catch((driveError) => {
                            console.log(driveError);
                        });
                }
            }).catch((err) => {
                console.log(err);
            });
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
                    filteredData = filteredData.filter((drive) => this.filter.names.includes(drive.localname));
                }
                if (this.filter.sizes.length > 0) {
                    filteredData = filteredData.filter((drive) => this.filter.sizes.includes(drive.size));
                }
                if (this.filter.classes.length > 0) {
                    filteredData = filteredData.filter((drive) => this.filter.classes.map(c => c.key).includes(drive.class));
                }
            }
            return filteredData;
        }
    }
}
</script>