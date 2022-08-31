// app.ts
import { module, element, bootstrap } from 'angular'
import '@uirouter/angularjs'
import { AppComponent } from './app.component'

import './app.scss'
import { PhoneListComponent } from './phones/phone-list.component'

let app = module('app', ['ui.router'])

app
	.config(($stateProvider, $urlRouterProvider) => {
		const appState = { name: 'app', url: '/app', component: AppComponent.NAME }

		const phoneState = {
			name: 'phone',
			url: '/',
			component: PhoneListComponent.NAME,
		}

		$stateProvider.state(phoneState)
		$stateProvider.state(appState)

		$urlRouterProvider.otherwise('/')
	})
	.component(PhoneListComponent.NAME, new PhoneListComponent())
	.component(AppComponent.NAME, new AppComponent())

element(document).ready(() => {
	bootstrap(document, ['app'])
})

export default app
