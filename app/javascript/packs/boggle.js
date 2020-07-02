/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'boggle' %> (and
// <%= stylesheet_pack_tag 'boggle' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
//
//
//
// If the project is using turbolinks, install 'vue-turbolinks':
//
// yarn add vue-turbolinks
//
import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import Boggle from '../boggle.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  const boggle = new Vue({
    el: '#boggle',
    data: () => {
      return {
        message: "Let's play boggle!"
      }
    },
    components: { Boggle }
  })
})
