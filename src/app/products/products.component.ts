import { Component, OnInit } from '@angular/core';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  constructor() { }

  ngOnInit(): void {
	this.products = [
		{
			name: "Crude",
			description: "Tegi coercuit pondere bracchia cornua mortales magni habentem animal diverso caelum prima carentem fulgura instabilis sunt caeleste iunctarum diremit sponte triones uno finxit caeli natus iners temperiemque quoque diffundi principio partim corpora longo supplex habentem mutastis montes declivia aliud sui aurea qui zephyro surgere pugnabant.",
			imageUrl: "/assets/images/product-placeholder.png"
		},
		{
			name: "CBD",
			description: "Tegi coercuit pondere bracchia cornua mortales magni habentem animal diverso caelum prima carentem fulgura instabilis sunt caeleste iunctarum diremit sponte triones uno finxit caeli natus iners temperiemque quoque diffundi principio partim corpora longo supplex habentem mutastis montes declivia aliud sui aurea qui zephyro surgere pugnabant.",
			imageUrl: "/assets/images/product-placeholder.png"
		},
		{
			name: "Distillate",
			description: "Tegi coercuit pondere bracchia cornua mortales magni habentem animal diverso caelum prima carentem fulgura instabilis sunt caeleste iunctarum diremit sponte triones uno finxit caeli natus iners temperiemque quoque diffundi principio partim corpora longo supplex habentem mutastis montes declivia aliud sui aurea qui zephyro surgere pugnabant.",
			imageUrl: "/assets/images/product-placeholder.png"
		},
	];
  }

}

interface Product {
	name: string,
	description: string,
	imageUrl: string
}