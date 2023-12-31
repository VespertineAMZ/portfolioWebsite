// Required by Webpack
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2|webp)$/i)
require.context('../stylesheets/', true, /\.(css)$/i)

//ES6 JavaScript code (if any) goes here
import 'bootstrap'

import { gallery } from './gallery';

if(document.querySelector("#concept-page")){
    gallery();
}