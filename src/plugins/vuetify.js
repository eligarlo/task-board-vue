import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#9c27b0',
        accent: '#2196f3',
        error: '#f44336',
        warning: '#ff5722',
        info: '#ffc107',
        success: '#4caf50'
      }
    }
  }
});
