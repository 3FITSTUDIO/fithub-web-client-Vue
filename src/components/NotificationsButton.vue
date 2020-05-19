<template>
<router-link to="/notifications">
  <input class="edit_btn btn" type="submit" :value="title_with_unseen"/>
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

<style scoped>
  .edit_btn {
    font-weight: bold;
    margin: 5px;
    color: whitesmoke;
    background-color: #3f9380;
    width: auto;
  }
  .edit_btn:hover {
    background-color: white;
  }
</style>
