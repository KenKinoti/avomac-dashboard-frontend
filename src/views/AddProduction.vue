<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12>
        <material-card color="green" title="Add New Production" text="Complete the form with the new delivery details">
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md12>
                  <v-select 
                  v-model="staff" 
                  :items="items" 
                  item-text="staff" 
                  item-value="id"
                  :rules="[v => !!v || 'Staff name is required']"
                  label="Select Staff" 
                  multiple
                  chips
                  required></v-select>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field v-model="time_start" class="purple-input" label="Time Start" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field v-model="time_stop" label="Time Stop" disabled class="purple-input"/>
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field v-model="oil_weight" label="Oil Weight" class="purple-input" :rules="requiredRules" />
                </v-flex>
                <!-- <v-flex xs12>
                  <v-textarea v-model="comments" class="purple-input" label="Delivery Notes" />
                </v-flex> -->
                <v-flex xs12 text-xs-right>
                  <v-btn class="mx-0 font-weight-light" color="success" @click="add_delivery">
                    Add Production
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    items: [],
    staff: '',
    oil_weight: '',
    time_start: new Date().toLocaleString(),
    time_stop: '',
    requiredRules: [v => !!v || 'This input is required'],
  }),

  mounted() {
    var requestOptions = {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        Accept: "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    };

    fetch(process.env.VUE_APP_STAGING_ENDPOINT + "staffs", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.data.map(e => e.first_name + ' ' + e.last_name)); // Print staff names
        this.items = result.data.map(e => e.first_name + ' ' + e.last_name);
      })
      .catch(error => console.log('error', error));

  },

  methods: {
    add_delivery() {

      var data = { staff: this.staff, time_start: this.time_start, time_stop:this.time_stop, oil_weight:this.oil_weight }
      console.log(data)

      var requestOptions = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json'
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      };

      fetch(process.env.VUE_APP_STAGING_ENDPOINT + "productions", requestOptions)
        .then(response => response.json())
        .then(r => {

          this.$store.commit('production')
          this.$router.push('/production')
          this.$refs.form.reset()

          console.log('error here ', r);
          console.log("Bazzu", JSON.stringify(data))

        })
        .catch(error => console.log('error', error));
    }
  }
}
</script>
