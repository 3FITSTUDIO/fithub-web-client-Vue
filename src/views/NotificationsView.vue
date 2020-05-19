<template>
  <main class="w-100">
    <section class="features">
      <div class="container">
        <header v-if="notificationsData.length === 0" style="margin: 2%;">
          <h1>No notifications to read, you are up to date :)</h1>
        </header>
        <div  class="row" style=" margin-top: 2%;">
          <div class="col-sm-6 col-md-3" v-for="item in notificationsData" :key="item.id">
            <figure>
              <div class="d-flex justify-content-center">
                <div class="card">
                  <div class="card-header min-height">
                    <h3>Date: <p>{{item.date}}</p></h3>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-8 offset-md-2 d-inline-block">
                          <label>Message :</label>
                          <div class="message"><br/>{{item.message}}</div>
                        </div>
                      </div>
                    </form>
                    <notifications-delete-button :button-i-d="item.id"/>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import NotificationsDeleteButton from '../components/NotificationsDeleteButton'

export default {
  name: 'NotificationsView',
  components: { NotificationsDeleteButton },
  computed: mapState({
    notificationsData: state => state.notificationsData
  }),
  mounted () {
    this.logAll()
  },
  methods: {
    logAll () {
      console.log('Progress' + this.notificationsData)
    }
  }
}
</script>

<style scoped>
.card {
  padding: 0px;
  min-width: 400px;
}
.card-body{
  margin: auto;
  padding: 0px;
}
  .message {
    text-align: center;
    display: flex;
    width: auto;
    justify-content: center;
  }
</style>
