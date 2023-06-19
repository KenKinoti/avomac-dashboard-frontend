<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12>
        <material-card color="green" title="Add New Supplier" text="Complete the form with the new supplier details">
          <v-form id="addSupplier" ref="form" v-model="valid" lazy-validation>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field label="Company Name" class="purple-input" v-model="company" :rules="requiredRules"
                    required />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field v-model="vehicle_type" class="purple-input" label="Vehicle Type" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field v-model="email" label="Phone Number" class="purple-input" :rules="requiredRules"
                    required />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field v-model="driver_f_name" label="Driver First Name" class="purple-input"
                    :rules="requiredRules" required />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field v-model="driver_l_name" label="Driver Last Name" class="purple-input" />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field v-model="address" label="Address" class="purple-input" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field v-model="county" label="County" class="purple-input" :rules="requiredRules" required />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field v-model="country" label="Country" class="purple-input" />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn class="mx-0 font-weight-light" color="success" @click="add_supplier" :disabled="!valid">
                    Add New Supplier
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
    company: '',
    vehicle_type: '',
    email: '',
    driver_f_name: '',
    driver_l_name: '',
    address: '',
    county: '',
    country: '',
    requiredRules: [v => !!v || 'This input is required'],

  }),

  methods: {
    add_supplier() {

      var data = { company: this.company, vehicle_type: this.vehicle_type, email: this.email, driver_f_name: this.driver_f_name, driver_l_name: this.driver_l_name, address: this.address, county: this.county, country: this.country }
      console.log(JSON.stringify(data))

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


    fetch(process.env.VUE_APP_STAGING_ENDPOINT + "supplier_details", requestOptions)
        .then(response => response.json())
        .then(r => {

          this.$store.commit('supplier')
          this.$router.push('/supplier')
          this.$refs.form.reset()

          console.log(r);
          console.log("Bazzu", JSON.stringify(data))

        })
        .catch(error => console.log('error', error));
    }
  }

}
</script>
