<template>
  <v-footer
    id="core-footer"
    absolute
    height="82"
  >
    <div class="footer-items">
      <span
        v-for="link in links"
        :key="link.name"
      >
        <a
          :href="link.Link"
          class="tertiary--text footer-links">{{ link.name }}</a>
      </span>
    </div>
    <v-spacer/>
    <span class="font-weight-light copyright">
      &copy;
      {{ (new Date()).getFullYear() }}
      <a
        href="https://avomac.co.ke/"
        target="_blank">AVOMAC</a>, made with
      <v-icon
        color="tertiary"
        size="17">mdi-heart</v-icon>
      by DASYIN
    </span>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'dashboard', Link: '/dashboard' },
      { name: 'AVOMAC WEBSITE', Link: 'https://avomac.co.ke/' },
      { name: 'About Us', Link: 'https://avomac.co.ke/' },
      { name: 'Blog', Link: 'https://avomac.co.ke/' }
    ]
  })
}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
