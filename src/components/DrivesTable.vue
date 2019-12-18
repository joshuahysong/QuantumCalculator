<template>
    <div id='drives-table'>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Speed</th>
                    <th>Acceleration</th>
                    <th>Travel Time</th>                        
                </tr>
            </thead>
            <tbody>
                <tr v-for="drive in drives" :key="drive.id">
                    <td>{{ drive.name }}</td>
                    <td>{{ drive.size }}</td>
                    <td>{{ drive.speed }}</td>
                    <td>{{ drive.acceleration }}</td>
                    <td>{{ calculateTravelTime(drive.speed, drive.acceleration) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'drives-table',
    props: {
        distance: Number
    },
    data() {
        return {
            drives: [
                {
                    "size": 1,
                    "name": "Vulcan",
                    "speed": 80444770,
                    "acceleration": 1862147
                },
                {
                    "size": 1,
                    "name": "LightFire",
                    "speed": 89383080,
                    "acceleration": 2110434
                },
                {
                    "size": 1,
                    "name": "Goliath",
                    "speed": 89383080,
                    "acceleration": 1986290
                },
                {
                    "size": 1,
                    "name": "Colossus",
                    "speed": 92362510,
                    "acceleration": 2110434
                },
                {
                    "size": 1,
                    "name": "FoxFire",
                    "speed": 104280300,
                    "acceleration": 2234577
                },
                {
                    "size": 1,
                    "name": "Eos",
                    "speed": 138543800,
                    "acceleration": 2284234
                },
                {
                    "size": 1,
                    "name": "Wayfare",
                    "speed": 140033500,
                    "acceleration": 2383549
                },
                {
                    "size": 1,
                    "name": "Hyperion",
                    "speed": 145992400,
                    "acceleration": 2333891
                },
                {
                    "size": 1,
                    "name": "Expedition",
                    "speed": 148971800,
                    "acceleration": 2482863
                },
                {
                    "size": 1,
                    "name": "Flood",
                    "speed": 151951200,
                    "acceleration": 2681492
                },
                {
                    "size": 1,
                    "name": "Atlas",
                    "speed": 151951200,
                    "acceleration": 2433206
                },
                {
                    "size": 1,
                    "name": "Voyage",
                    "speed": 157910100,
                    "acceleration": 2631835
                },
                {
                    "size": 1,
                    "name": "Rush",
                    "speed": 159399800,
                    "acceleration": 2731149
                },
                {
                    "size": 1,
                    "name": "Burst",
                    "speed": 169827800,
                    "acceleration": 2780807
                },
                {
                    "size": 1,
                    "name": "Drift",
                    "speed": 171317600,
                    "acceleration": 3351865
                },
                {
                    "size": 1,
                    "name": "Zephyr",
                    "speed": 186214700,
                    "acceleration": 3401522
                },
                {
                    "size": 1,
                    "name": "Spectre",
                    "speed": 201111900,
                    "acceleration": 3426351
                },
                {
                    "size": 1,
                    "name": "Beacon",
                    "speed": 283046400,
                    "acceleration": 3575323
                },
                {
                    "size": 1,
                    "name": "Siren",
                    "speed": 297943600,
                    "acceleration": 3649809
                },
                {
                    "size": 1,
                    "name": "VK-00",
                    "speed": 300000000,
                    "acceleration": 372430
                },
                {
                    "size": 2,
                    "name": "Yaluk",
                    "speed": 67037310,
                    "acceleration": 7222744
                },
                {
                    "size": 2,
                    "name": "Spark Fire",
                    "speed": 74485900,
                    "acceleration": 8185776
                },
                {
                    "size": 2,
                    "name": "Bolon",
                    "speed": 74485900,
                    "acceleration": 7704260
                },
                {
                    "size": 2,
                    "name": "Huracan",
                    "speed": 76968760,
                    "acceleration": 8185776
                },
                {
                    "size": 2,
                    "name": "Sun Fire",
                    "speed": 86900220,
                    "acceleration": 8667292
                },
                {
                    "size": 2,
                    "name": "Khaos",
                    "speed": 115453100,
                    "acceleration": 8859899
                },
                {
                    "size": 2,
                    "name": "Quest",
                    "speed": 116694600,
                    "acceleration": 9245112
                },
                {
                    "size": 2,
                    "name": "Aither",
                    "speed": 121660300,
                    "acceleration": 9052506
                },
                {
                    "size": 2,
                    "name": "Odyssey",
                    "speed": 124143200,
                    "acceleration": 9630325
                },
                {
                    "size": 2,
                    "name": "Cascade",
                    "speed": 126626000,
                    "acceleration": 10400750
                },
                {
                    "size": 2,
                    "name": "Hemera",
                    "speed": 126626000,
                    "acceleration": 9437718
                },
                {
                    "size": 2,
                    "name": "Sojourn",
                    "speed": 131591800,
                    "acceleration": 10208140
                },
                {
                    "size": 2,
                    "name": "Torrent",
                    "speed": 132833200,
                    "acceleration": 10593360
                },
                {
                    "size": 2,
                    "name": "Flash",
                    "speed": 141523200,
                    "acceleration": 10785960
                },
                {
                    "size": 2,
                    "name": "Nova",
                    "speed": 142764600,
                    "acceleration": 1300094
                },
                {
                    "size": 2,
                    "name": "Bolt",
                    "speed": 155179000,
                    "acceleration": 1319355
                },
                {
                    "size": 2,
                    "name": "Spicule",
                    "speed": 167593300,
                    "acceleration": 1328985
                },
                {
                    "size": 2,
                    "name": "Crossfield",
                    "speed": 235872000,
                    "acceleration": 13867670
                },
                {
                    "size": 2,
                    "name": "Yeager",
                    "speed": 248286300,
                    "acceleration": 14156580
                },
                {
                    "size": 2,
                    "name": "XL1",
                    "speed": 260700600,
                    "acceleration": 14445490
                },
                {
                    "size": 3,
                    "name": "Vesta",
                    "speed": 53629850,
                    "acceleration": 4345010
                },
                {
                    "size": 3,
                    "name": "Kama",
                    "speed": 59588720,
                    "acceleration": 4634678
                },
                {
                    "size": 3,
                    "name": "Agni",
                    "speed": 61575010,
                    "acceleration": 4924345
                },
                {
                    "size": 3,
                    "name": "Metis",
                    "speed": 92362510,
                    "acceleration": 5329879
                },
                {
                    "size": 3,
                    "name": "Drifter",
                    "speed": 93355660,
                    "acceleration": 5561613
                },
                {
                    "size": 3,
                    "name": "Tyche",
                    "speed": 97328240,
                    "acceleration": 5445746
                },
                {
                    "size": 3,
                    "name": "Wanderer",
                    "speed": 99314530,
                    "acceleration": 5793347
                },
                {
                    "size": 3,
                    "name": "Echo",
                    "speed": 101300800,
                    "acceleration": 6256815
                },
                {
                    "size": 3,
                    "name": "Erebos",
                    "speed": 101300800,
                    "acceleration": 5677480
                },
                {
                    "size": 3,
                    "name": "Ranger",
                    "speed": 105273400,
                    "acceleration": 6140948
                },
                {
                    "size": 3,
                    "name": "Fissure",
                    "speed": 106266500,
                    "acceleration": 6372682
                },
                {
                    "size": 3,
                    "name": "Impulse",
                    "speed": 113218600,
                    "acceleration": 6488549
                },
                {
                    "size": 3,
                    "name": "Pontes",
                    "speed": 188697600,
                    "acceleration": 8342420
                },
                {
                    "size": 3,
                    "name": "Balandin",
                    "speed": 198629100,
                    "acceleration": 8516220
                },
                {
                    "size": 3,
                    "name": "TS-2",
                    "speed": 208560500,
                    "acceleration": 8690020
                },
                {
                    "size": 4,
                    "name": "Idris",
                    "speed": 133904700,
                    "acceleration": 25897050
                },
                {
                    "size": 4,
                    "name": "Allegro",
                    "speed": 117653700,
                    "acceleration": 46502030
                }
            ]
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
            return new Date(travelTime * 1000).toISOString().substr(14, 5);
        }
    }
}
</script>