<template>
  <v-navigation-drawer id="app-drawer" v-model="inputValue" app dark floating persistent mobile-break-point="991"
    width="260">
    <v-img :src="image" height="100%">
      <v-layout class="fill-height" tag="v-list" column>
        <v-list-tile avatar>
          <v-list-tile-avatar color="white">
            <v-img :src="logo" height="34" contain />
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            AVOMAC
          </v-list-tile-title>
        </v-list-tile>
        <v-divider />
        <v-list-tile v-if="responsive">
          <v-text-field class="purple-input search-input" label="Search..." color="success" />
        </v-list-tile>
        <v-list-tile v-for="(link, i) in links" :key="i" :to="link.to" :active-class="color" avatar class="v-list-item">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="link.text" />
          <v-list-tile-action v-if="link.subMenu">
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on">mdi-chevron-down</v-icon>
              </template>
              <v-list>
                <v-list-tile v-for="(subLink, j) in link.subMenu" :key="j" :to="subLink.to" :active-class="color" avatar
                  class="v-list-item" :class="{ 'sub-menu-selected': subLink.selected }">
                  <v-list-tile-action>
                    <v-icon>{{ subLink.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title v-text="subLink.text" />
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-list-tile-action>
        </v-list-tile>

      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  data: () => ({
    logo: './img/download.png',
    links: [
      // {
      //   to: '/dashboard',
      //   icon: 'mdi-view-dashboard',
      //   text: 'Dashboard'
      // },
      {
        to: '/delivery',
        icon: 'mdi-truck',
        text: 'Deliveries/ Orders',
        selected: false,
        subMenu: [
          {
            to: '/add-delivery',
            icon: 'mdi-plus',
            text: 'Add Delivery',
            selected: false
          }
        ]
      }, {
        to: '/production',
        icon: 'mdi-ammunition',
        text: 'Production Management',
        selected: false,
        subMenu: [
          {
            to: '/add-production',
            icon: 'mdi-plus',
            text: 'Add Production',
            selected: false
          }
        ]
      },
      
      {
        to: '/supplier',
        icon: 'mdi-account-plus',
        text: 'Leads/ Suppliers',
        subMenu: [
          {
            to: '/add-supplier',
            icon: 'mdi-plus',
            text: 'Add Supplier',
            selected: false
          },{
            to: '/add-supplier',
            icon: 'mdi-plus',
            text: 'Add Staff',
            selected: false
          }
        ]
      },{
        to: '/quality',
        icon: 'mdi-hammer',
        text: 'Quality Analysis'
      }
    ],
    responsive: false
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get() {
        return this.$store.state.app.drawer
      },
      set(val) {
        this.setDrawer(val)
      }
    },
    items() {
      return this.$t('Layout.View.items')
    }
  },
  mounted() {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }
  }
}
</script>

<style lang="scss">
#app-drawer {
  .v-list__tile {
    border-radius: 4px;

    &--buy {
      margin-top: auto;
      margin-bottom: 17px;
    }
  }

  .v-image__image--contain {
    top: 9px;
    height: 60%;
  }

  .search-input {
    margin-bottom: 30px !important;
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
