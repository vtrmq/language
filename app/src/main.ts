import { mount } from 'svelte'
import '$lib/css/style.css';

import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
