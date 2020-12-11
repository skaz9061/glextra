import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public static articles: Article[] = [
		{
			title: "Does CBD Cure Cancer?",
			date: "October 31, 2020",
			author: "Sean Glackin",
			imageUrl: "/assets/images/cancer.jpg",
			text: "Faecis cum locavit locum ora fossae congeriem possedit sponte aliud neu passim nondum quanto posset: ligavit: videre pace diremit septemque aurea dextra quem siccis aequalis retinebat suis caligine, quarum fidem mixta homini caecoque totidem perpetuum tractu induit os ignea animalia valles illic lucis unus ripis!" +
				"\n\nObsistitur carentem principio aera prima frigore cetera abscidit arce vultus illas litora stagna ille aliud dei nullus piscibus ipsa est nuper vos di quem solidumque galeae madescit imagine iners campos tonitrua totidem his ignea subsidere prima congestaque habitabilis nec haec liberioris cepit tractu dedit tellure illi animus vis sata sive recens quisquis secuit madescit pondere ut opifex securae orbem valles austro unda occiduo nondum auroram astra fuerant ad quisquis cum terras caeleste sinistra proximus mare speciem fuerat minantia fuerat persidaque derecti obliquis legebantur metusque permisit surgere mixta faecis duae fabricator madescit sua motura adhuc horrifer media sidera madescit quoque elementaque divino ne ubi fronde legebantur montibus melior undas ensis membra evolvit cetera calidis verba quarum tractu subsidere rerum frigida cinxit obsistitur circumdare nebulas ut flexi cesserunt uno utque toto densior tegit poena meis quicquam circumdare sibi nisi illi premuntur elementaque nabataeaque orbem zephyro proximus primaque contraria timebat regat, praebebat rectumque." +
				"\n\nDissociata fabricator ita nullus quin circumfuso auroram porrexerat zonae postquam haec rudis sibi duris ardentior semine amphitrite cinxit egens umentia solidumque non aestu proximus austro secuit induit fluminaque freta derecti obsistitur facientes margine diffundi dedit caelumque orbe sponte coegit quisquis animalibus caelumque dispositam illic retinebat."
		},
		
		{
			title: "Past and Projected Growth of CBD Sales",
			date: "April 1, 2020",
			author: "Gean Slackin",
			imageUrl: "/assets/images/growth-chart.jpg",
			text: "Faecis cum locavit locum ora fossae congeriem possedit sponte aliud neu passim nondum quanto posset: ligavit: videre pace diremit septemque aurea dextra quem siccis aequalis retinebat suis caligine, quarum fidem mixta homini caecoque totidem perpetuum tractu induit os ignea animalia valles illic lucis unus ripis!" +
				"\n\nObsistitur carentem principio aera prima frigore cetera abscidit arce vultus illas litora stagna ille aliud dei nullus piscibus ipsa est nuper vos di quem solidumque galeae madescit imagine iners campos tonitrua totidem his ignea subsidere prima congestaque habitabilis nec haec liberioris cepit tractu dedit tellure illi animus vis sata sive recens quisquis secuit madescit pondere ut opifex securae orbem valles austro unda occiduo nondum auroram astra fuerant ad quisquis cum terras caeleste sinistra proximus mare speciem fuerat minantia fuerat persidaque derecti obliquis legebantur metusque permisit surgere mixta faecis duae fabricator madescit sua motura adhuc horrifer media sidera madescit quoque elementaque divino ne ubi fronde legebantur montibus melior undas ensis membra evolvit cetera calidis verba quarum tractu subsidere rerum frigida cinxit obsistitur circumdare nebulas ut flexi cesserunt uno utque toto densior tegit poena meis quicquam circumdare sibi nisi illi premuntur elementaque nabataeaque orbem zephyro proximus primaque contraria timebat regat, praebebat rectumque." +
				"\n\nDissociata fabricator ita nullus quin circumfuso auroram porrexerat zonae postquam haec rudis sibi duris ardentior semine amphitrite cinxit egens umentia solidumque non aestu proximus austro secuit induit fluminaque freta derecti obsistitur facientes margine diffundi dedit caelumque orbe sponte coegit quisquis animalibus caelumque dispositam illic retinebat."
		}
	];
	
	public articlesInstance: Article[];
	
  constructor() { }

  ngOnInit(): void {
    this.articlesInstance = ArticlesComponent.articles;
  }

}

interface Article {
	title: string;
	date: string;
	author: string;
	imageUrl: string;
	text: string;
}