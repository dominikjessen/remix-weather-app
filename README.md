# Remix Weather App

A very simple app to get the weather using openmeteo's API built with Remix and deployed using Fly.io.

[Check out the live app here](https://remix-weather-app.fly.dev/)

## Other implementations

- [Sveltekit](https://github.com/dominikjessen/svelte-weather-app)
- [Vue (Nuxt)](https://github.com/dominikjessen/nuxt-weather-app)

## About this app

This small weather app is part of a series of apps I've built to explore Remix, Nuxt, and Svelte. I mainly build projects using NextJS normally, so out of curiosity I wanted to see how these other frameworks handle things. The remaining parts of the app like weather data API and designs are the same across all of them. This one specifically is built using Remix.

## Things I like about Remix at first glance

What I enjoyed about Remix is the loader-approach it takes. It creates a very neat encapsulation for server-side code and client-side code while still keeping everything in one place making for good DX - especially for small components or apps.

In terms of performance and speed there don't seem to be any issues, and while I don't have to make use of it in this app, let's assume the "Current" and "Daily" Forecasts were 2 separate API calls. Remix would make it super easy to hydrate those two components separately without having to manage it yourself.

As a React-based framework, it of course comes with all the good - and bad/verbose - of React. Personally, I enjoy the way React handles a lot of things because it's very JavaScript-y.

## Things I dislike about Remix at first glance

While the CLI for Remix is pretty good, a thing I dislike when looking at the app is that the boilerplate compared to the Nuxt or the Sveltekit version is rather large.

One example of how Svelte handles things more elegantly in my opinion is having to use a callback to notify the parent component of the location change (e.g. 'London, UK') as opposed to immediate reactivity of the location variable.
