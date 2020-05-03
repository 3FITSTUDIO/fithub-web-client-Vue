export default {
  sortByDate (data1, data2) {
    return new Date(data1.date).getTime() - new Date(data2.date).getTime()
  }
}
