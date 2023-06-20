<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12>
        <material-card color="green" title="Add New Delivery" text="Complete the form with the new delivery details">
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md6>
                  <v-select v-model="supplier" :items="items" item-text="company" item-value="id"
                    :rules="[v => !!v || 'Supplier name is required']" label="Select Supplier" required></v-select>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field v-model="fruit_type" class="purple-input" label="Fruit Type" />
                </v-flex>
                <v-flex xs12 md3>
                  <v-text-field v-model="amount" label="Amount in Kilograms" class="purple-input"
                    :rules="requiredRules" />
                </v-flex>
                <v-flex xs12 md3>
                  <v-text-field v-model="rate" label="Rate" class="purple-input" :rules="requiredRules" />
                </v-flex>
                <v-flex xs12 md3>
                  <v-text-field v-model="advance" label="Advance" class="purple-input" :rules="requiredRules" />
                </v-flex>
                <v-flex xs12 md3>
                  <v-text-field v-model="created_at" label="Date - Time of Delivery" class="purple-input" />
                </v-flex>
                <!-- <v-flex xs12>
                  <v-textarea v-model="comments" class="purple-input" label="Delivery Notes" />
                </v-flex> -->
                <v-flex xs12 text-xs-right>
                  <v-btn class="mx-0 font-weight-light" color="success" @click="add_delivery">
                    Add New Delivery
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
    supplier: '',
    fruit_type: '',
    advance: '',
    rate: '',
    amount: '',
    price: '',
    comments: '',
    created_at: new Date().toLocaleString(),
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

    fetch(process.env.VUE_APP_STAGING_ENDPOINT + "supplier_details", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.data.map(e => e.company))

        this.items = result.data.map(e => e.company)
      })
      .catch(error => console.log('error', error));

  },

  methods: {
    add_delivery() {

      var data = { supplier: this.supplier, fruit_type: this.fruit_type, amount: this.amount, rate: this.rate, advance: this.advance }
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

      fetch(process.env.VUE_APP_STAGING_ENDPOINT + "deliveries", requestOptions)
        .then(response => response.json())
        .then(r => {

          this.$store.commit('delivery')
          this.$router.push('/delivery')
          this.$refs.form.reset()

          console.log('error here ', r);
          console.log("Bazzu", JSON.stringify(data))

        })
        .catch(error => console.log('error', error));
    }
  }
}
</script>
