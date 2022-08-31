'use strict'
import templateUrl from './phones.html'
import ng = require('angular')

interface Phones {
	name: string
	snippet: string
	age: number
}

class PhoneListController implements ng.IController {
	static $inject = ['$state', '$http']
	phones: Phones[]
	orderProp: string

	constructor(public $state: ng.IController, public $http: ng.IHttpService) {
		$state.go('phone')
		$http
			.get('phones.json')
			.then((response) => (this.phones = response.data as Phones[]))

		this.orderProp = 'age'
	}
}

export class PhoneListComponent implements ng.IComponentOptions {
	static NAME: string = 'phone'
	controller: any
	templateUrl: any
	constructor() {
		this.controller = PhoneListController
		this.templateUrl = templateUrl
	}
}
