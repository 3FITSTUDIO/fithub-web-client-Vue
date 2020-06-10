<template>
  <input type="submit" class="btn edit_btn" value="Delete" v-on:click="deleteNotification"/>
</template>

<script>
export default {
  name: 'NotificationsDeleteButton',
  props: {
    buttonID: Number
  },
  methods: {
    deleteNotification () {
      this.$store.dispatch('deleteRecord', { path: 'notifications', itemID: this.buttonID })
        .then(() => {
          this.getArrayData()
        })
    },
    getArrayData () {
      this.$store.dispatch('getArrayData', { path: 'notifications' })
    }
  }
}
</script>

<style scoped>
  .edit_btn {
    margin: 5px;
    color: whitesmoke;
    background-color: red;
    width: 100px;
  }
</style>
