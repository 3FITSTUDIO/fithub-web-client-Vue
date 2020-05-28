<template>
<router-link to="/notifications">
  <b-button variant="dark"> {{title_with_unseen}} </b-button>
</router-link>
</template>

<script>
export default {
  name: 'NotificationsButton',
  data () {
    return {
      title: 'Notifications'
    }
  },
  computed: {
    title_with_unseen: function () {
      return this.title + ' (' + this.$store.state.notificationsData.length + ')'
    }
  }
}
</script>

<style scoped lang="sass">
  .btn-dark
    font-weight: bold
    color: #fff
    background-color: #3f9380!important
    border-color: #3f9380!important
    width: 200px
    &:hover
     color: #000000
     background-color: #ffffff!important
     border-color: #ffffff!important

</style>
