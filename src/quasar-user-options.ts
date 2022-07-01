import "./styles/quasar.scss";
import lang from "quasar/lang/ko-KR.js";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";
import "@quasar/extras/material-icons/material-icons.css";
import {Notify} from 'quasar'

// To be used on app.use(Quasar, { ... })
export default {
  config: {
    notify:'',
  },
  plugins: [Notify],
  lang: lang,
};
