<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <!-- <v-flex xs12 md3>
        <material-card color="brown" flat full-width title="Add new production" text="Add a production details">
          <v-card-text class="text-xs-center">
            <h4 class="card-title font-weight-light">Production Particulars</h4>
            <p class="card-description font-weight-light">
              Add particulars of oil production to enable better insights 
            </p>
            <v-btn color="brown" round class="font-weight-light" to="/add-production">Add A Production</v-btn>
          </v-card-text>
        </material-card>
      </v-flex> -->

      <v-flex xs12>
        <material-card color="green" title="Previous Productions" text="Summary of previous productions">
          
          <v-data-table 
            :headers="headers" 
            :items="items" 
            hide-actions
            :pagination.sync="pagination">
            <template slot="headerCell" slot-scope="{ header }">
              <span class="subheading font-weight-light text-success text--darken-3" v-text="header.text" />
            </template>
            <template slot="items" slot-scope="{ item }">
              <td>{{ item.staff }}</td>
              <td>{{ item.time_start }}</td>
              <td>{{ item.time_stop }}</td>
              <td>{{ item.oil_weight }}</td>
              <td>
                <v-btn color="blue" class="font-weight-light" @click="update_delivery(item.ID)">UPDATE</v-btn>

                ||

                <v-btn color="danger" class="font-weight-light" dark @click.stop="dialog = true">DELETE</v-btn>

                <!-- Modal setup -->
                <v-dialog v-model="dialog" max-width="290">
                  <v-card>
                    <v-card-title class="text-h5">
                      Delete a delivery
                    </v-card-title>

                    <v-card-text>
                      You are about to delete a delivery from {{item.supplier_id}} of {{item.amount}} KGS
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn color="green darken-1" text @click="dialog = false">
                        Disagree
                      </v-btn>

                      <v-btn color="red darken-1" text @click="delete_production(item.ID)">
                        Agree
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog> 
                <!-- Modal setup -->

              </td>
            </template>
          </v-data-table>

          <!-- Add pagination -->
          <v-pagination 
            v-model="pagination.page" 
            :length="Math.ceil(items.length / pagination.itemsPerPage)">
          </v-pagination>
          <!-- End of Add Pagination -->

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
        sortable: false,
        text: "Staff",
        value: "staff",
      },
      {
        sortable: false,
        text: "Time Start",
        value: "time_start",
      },
      {
        sortable: false,
        text: "Time Stop",
        value: "time_stop",
      },
      {
        sortable: false,
        text: "Oil Weight",
        value: "oil_weight",
      },
      {
        sortable: false,
        text: "Manage",
        value: "manage"
      }
    ],
    items: [],
    dialog: false,
    pagination: {
      rowsPerPageOptions: [5, 10, 25],
      itemsPerPage: 7,
      page: 1
    },
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

    fetch(process.env.VUE_APP_STAGING_ENDPOINT + "productions", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.data)
        this.items = result.data
      })
      .catch(error => console.log('error', error));

  },

  methods: {
    update_delivery(id) {

      alert("Here we are updating the delivery " + id + " coming soon")

    },

    delete_delivery(id) {

      alert("You are about to delete delivery " + id)

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

      fetch(process.env.VUE_APP_STAGING_ENDPOINT + "productions/" + id, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result)
          // this.items = result.data
          window.location.reload();
        })
        .catch(error => console.log('error', error));

    }
  }
};
</script>
