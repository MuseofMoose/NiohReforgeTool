import Vue from 'vue'

Vue.http.interceptors.push(function (request, next) {
  next(function (response) {
    // modify response here
  })
})
