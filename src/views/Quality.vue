<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md12
      >
        <material-card
          color="green"
          flat
          full-width
          title="Quality analysis"
          text="Under Active Development"
        >
          <v-card-text class="text-xs-center">
            <h4 class="card-title font-weight-light">Quantity/ Quality</h4>
            <p class="card-description font-weight-light">Features Coming Soon!</p>
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
      }
    ],
    items: []
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

    fetch(process.env.VUE_APP_STAGING_ENDPOINT + "suppliers", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.items = result
        })
      .catch(error => console.log('error', error));

  }
}
</script>
