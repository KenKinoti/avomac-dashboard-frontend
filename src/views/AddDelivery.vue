<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
      >
        <material-card
          color="green"
          title="Add New Delivery"
          text="Complete the form with the new delivery details"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  md6
                >
                <v-select
                    v-model="supplier"
                    :items="items"
                    item-text="company"
                    item-value="id"
                    :rules="[v => !!v || 'Supplier name is required']"
                    label="Select Supplier"
                    required
                    ></v-select>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    v-model="source"
                    class="purple-input"
                    label="Source"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    v-model="amount"
                    label="Amount in Kilograms"
                    class="purple-input"
                    :rules="requiredRules"/>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    v-model="price"
                    label="Price"
                    class="purple-input"
                    :rules="requiredRules"/>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    v-model="created_at"
                    label="Date - Time of Delivery"
                    class="purple-input"/>
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    v-model="comments"
                    class="purple-input"
                    label="Delivery Notes"
                  />
                </v-flex>
                <v-flex
                  xs12
                  text-xs-right
                >
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="success"
                    @click="add_delivery"
                  >
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
      supplier:'',
      source:'',
      amount:'',
      price:'',
      comments:'',
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

      fetch(process.env.VUE_APP_STAGING_ENDPOINT + "suppliers-name", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result)
          this.items = result
          })
        .catch(error => console.log('error', error));

    },

    methods: {
      add_delivery() {

        var data = { supplier: this.supplier, source: this.source, amount: this.amount, price:this.price, comments:this.comments, created_at: this.created_at }
        console.log(data)

        var requestOptions = {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            Accept: "application/json",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        };

        fetch(process.env.VUE_APP_STAGING_ENDPOINT + "create-delivery", requestOptions)
          .then(response => response.json())
          .then(r => {
            if (r.status == '200') {

              this.$store.commit('delivery')  
              this.$router.push('/delivery')
              this.$refs.form.reset()
              this.supplier = ""
              this.source = ""
              this.amount = ""
              this.price = ""
              this.comments  = ""
              this.created_at
              
            } else {
              alert("Error, Kindly contact developer")
              this.$router.push('/delivery')
              this.$store.commit('delivery')
            }
            
            })
          .catch(error => console.log('error', error));

      }
    }
}
</script>
