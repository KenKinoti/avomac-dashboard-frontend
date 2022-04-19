<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md9>
        <material-card
          color="green"
          title="Previous Deliveries"
          text="Summary of previous deliveries"
        >
          <v-data-table :headers="headers" :items="items" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template slot="items" slot-scope="{ item }">
              <td>{{ item.supplier }}</td>
              <td>{{ item.source }}</td>
              <td>{{ item.amount }}</td>
              <td class="text-xs-right">{{ item.price }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex xs12 md3>
        <material-card
          color="brown"
          flat
          full-width
          title="Add new delivery"
          text="Add a new delivery received"
        >
          <v-card-text class="text-xs-center">
            <h4 class="card-title font-weight-light">Delivery Particulars</h4>
            <p class="card-description font-weight-light">
              Add particulars of a new delivery to enable better insights and
              more information
            </p>
            <v-btn
              color="brown"
              round
              class="font-weight-light"
              to="/add-delivery"
              >Add New Delivery</v-btn
            >
          </v-card-text>
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
        text: "Supplier Name",
        value: "name",
      },
      {
        sortable: false,
        text: "Source",
        value: "source",
      },
      {
        sortable: true,
        text: "Amount (kgs)",
        value: "amount",
      },
      {
        sortable: true,
        text: "Price",
        value: "price",
        align: "right",
      },
    ],
    items: [],
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

    fetch(process.env.VUE_APP_STAGING_ENDPOINT + "deliveries", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.items = result
        })
      .catch(error => console.log('error', error));

  },
};
</script>
