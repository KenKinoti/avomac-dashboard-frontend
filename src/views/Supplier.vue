<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>

      <v-flex xs12 md3>
        <material-card color="brown" flat full-width title="Add new supplier"
          text="Add a new supplier details to enable better management">
          <v-card-text class="text-xs-center">
            <h4 class="card-title font-weight-light">Supplier Particulars</h4>
            <p class="card-description font-weight-light">Add particulars of a new supplier to enable management</p>
            <v-btn color="brown" round class="font-weight-light" to="/add-supplier">Add New Supplier</v-btn>
          </v-card-text>
        </material-card>
      </v-flex>

      <v-flex xs12 md9>
        <material-card color="green" title="Suppliers" text="Summary of all suppliers">
          <v-data-table :headers="headers" :items="items" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span class="subheading font-weight-light text-success text--darken-3" v-text="header.text" />
            </template>
            <template slot="items" slot-scope="{ item }">
              <td>{{ item.company }}</td>
              <td>{{ item.driver_f_name }}</td>
              <td>{{ item.driver_l_name }}</td>
              <td>{{ item.vehicle_type }}</td>
              <td>{{ item.county }}</td>
              <td>
                <v-btn color="blue" class="font-weight-light" @click="update_supply(item.ID)">UPDATE</v-btn>

                ||


                <v-btn color="danger" class="font-weight-light" dark @click.stop="dialog = true">DELETE</v-btn>

                <!-- Modal setup -->
                <v-dialog v-model="dialog" max-width="290">
                  <v-card>
                    <v-card-title class="text-h5">
                      Delete a supplier
                    </v-card-title>

                    <v-card-text>
                      You are about to delete a supplier {{item.company}} 
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn class="text-right" color="green darken-1" text @click="dialog = false">
                        Disagree
                      </v-btn>

                      <v-btn color="red darken-1" text @click="delete_delivery(item.ID)">
                        Agree
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!-- Modal setup -->
              </td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        sortable: true,
        text: 'Company Name',
        value: 'company'
      },
      {
        sortable: false,
        text: 'Driver F Name',
        value: 'driver_f_name'
      },
      {
        sortable: false,
        text: 'Driver L Name',
        value: 'driver_l_name'
      },
      {
        sortable: false,
        text: 'Vehicle Type',
        value: 'vehicle_type'
      },
      {
        sortable: false,
        text: 'Source',
        value: 'county',
      }, {
        sortable: false,
        text: "Manage",
        value: "manage"
      }
    ],
    items: [],
    dialog: false,
  }),

  mounted() {
    var requestOptions = {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        // 'Authorization': JSON.parse(localStorage.getItem('token')).token,
        Accept: "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    };

    fetch(process.env.VUE_APP_STAGING_ENDPOINT + "supplies", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.data)
        this.items = result.data
      })
      .catch(error => console.log('error', error));

  },

  methods: {
    update_supply(id) {

      alert("Here we are updating the supply " + id + " coming soon")

    },

    delete_supply(id) {

      alert("You are about to delete supply " + id)

      var requestOptions = {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          // 'Authorization': JSON.parse(localStorage.getItem('token')).token,
          Accept: "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        // body: JSON.stringify(data) // body data type must match "Content-Type" header
      };

      fetch(process.env.VUE_APP_STAGING_ENDPOINT + "supplies/" + id, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result)
          // this.items = result.data
          window.location.reload();
        })
        .catch(error => console.log('error', error));

    }
  }
}
</script>
