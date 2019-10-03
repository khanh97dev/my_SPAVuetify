import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'

const options = {
  color: 'rgba(4,167,248,1)',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    termination: 300
  },
  autoRevert: true,
  inverse: false
}

Vue.use(VueProgressBar, options)