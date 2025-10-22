import { createRouter } from 'sv-router';
import Home from "./routes/(main)/Home.svelte";
import HomeLayout from "./routes/(main)/HomeLayout.svelte";
import Add from "./routes/(main)/(add)/Add.svelte";
import AddLayout from "./routes/(main)/(add)/AddLayout.svelte";

const routes = { 
  "/": {
    '/': Home,
    meta: {
			public: true,
		},
    layout: HomeLayout,
  },
  "/add": {
    '/': Add,
    layout: AddLayout
  },
};

export const { p, navigate, isActive, route } = createRouter(routes);
