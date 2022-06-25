<template>
  <v-select v-model="$i18n.locale"
            :items="locales"
            item-text="name"
            item-value="val"
            class="mt-4"
            >
    <template v-slot:item="slotProps" >
      <gb-flag :code="slotProps.item.flag" size="small" class="mr-2"></gb-flag>
      {{slotProps.item.name}}
    </template>
    <template v-slot:selection="{ item }">
      <gb-flag :code="item.flag" size="small" class="mr-2"></gb-flag>
      {{item.name}}
    </template>
  </v-select>
</template>

<style scoped>
li {
  text-decoration: underline;
  color: #459CE7;
  cursor: pointer;
}
</style>

<script>
export default {
  name: 'LocaleSwitcher',
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    }
  },
  data() {
    return {
      locales: [
        {
          name: 'Deutsch',
          val: 'de',
          flag: 'de'
        },
        {
          name: 'English',
          val: 'en',
          flag: 'us'
        },
        {
          name: 'Français',
          val: 'fr',
          flag: 'fr'
        },
        {
          name: 'Italiano',
          val: 'it',
          flag: 'it'
        },
        {
          name: 'Shqiptare',
          val: 'al',
          flag: 'al'
        },
        {
          name: 'Türkçe',
          val: 'tr',
          flag: 'tr'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>