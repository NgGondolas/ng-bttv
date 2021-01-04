# NgBttv

**ng-bttv** is simple Angular service for fetching BTTV emotes (JPEG, PNG or GIFs).

![FEELSWAYTOOGOOD](https://cdn.betterttv.net/emote/5e1891efbca2995f13fb29a4/2x "FEELSWAYTOOGOOD") [Showcase](https://nggondolas.github.io/ng-bttv-demo/)

![YEPP](https://cdn.betterttv.net/emote/5e978e20d023b362f638339d/2x "YEPP") [Demo Repo](https://github.com/NgGondolas/ng-bttv-demo)

## IF NYMN SEES THIS, VI VON ![ZULUL](https://cdn.betterttv.net/emote/5e2c51908af14b5f1b4462b9/3x "ZULUL") AND HAS TO ENABLE ![YEPP](https://cdn.betterttv.net/emote/5e978e20d023b362f638339d/3x "YEPP")

## How to install

```bash
npm i --save @nggondolas/ng-bttv
```

Now import the `NgBttvModule` on your `app.module.ts`.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgBttvModule } from '@nggondolas/ng-bttv';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgBttvModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
```

And inject the `NgBttvService` in your component.

```typescript
import { Component } from '@angular/core';
import { NgBttvService } from '@nggondolas/ng-bttv';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    // First param is the emote ID
    // Second is the size (1 || 2 || 3)
    okayge = this.emoteService.getEmote('5dfd5fd19e2cd00d968d3a4d', 1);

    constructor(private emoteService: NgBttvService) {
    }
}
```

Now you can use it like this:

```html
<a class="circle-link" href="#">
    <img [src]="okayge">
</a>
```

### List of built-in emotes

Some emotes are already baked in to the service via helper methods. </br>
If you can't find them on this list, then just use the `getEmote()` with the ID and size you want.

| Emote                                                                       	| Method              	|
|-----------------------------------------------------------------------------	|---------------------	|
| ![OMEGALUL](https://cdn.betterttv.net/emote/583089f4737a8e61abb0186b/2x "OMEGALUL") 	| getOMEGALUL         	|
| ![PogU](https://cdn.betterttv.net/emote/5e4e7a1f08b4447d56a92967/2x "PogU") 	| getPogU             	|
| ![Sadge](https://cdn.betterttv.net/emote/5e0fa9d40550d42106b8a489/2x "Sadge") 	| getSadge            	|
| ![ZULUL](https://cdn.betterttv.net/emote/5e2c51908af14b5f1b4462b9/2x "ZULUL") 	| getZULUL            	|
| ![Okayge](https://cdn.betterttv.net/emote/5dfd5fd19e2cd00d968d3a4d/2x "Okayge") 	| getOkayge           	|
| ![monkaW](https://cdn.betterttv.net/emote/59ca6551b27c823d5b1fd872/2x "monkaW") 	| getMonkaW           	|
| ![LULW](https://cdn.betterttv.net/emote/5dc79d1b27360247dd6516ec/2x "LULW") 	| getLULW             	|
| ![monkaPickle](https://cdn.betterttv.net/emote/5f242002fe85fb4472d1bdd2/2x "monkaPickle") 	| getMonkaPickle      	|
| ![WeirdChamp](https://cdn.betterttv.net/emote/5d20a55de1cfde376e532972/2x "WeirdChamp") 	| getWeirdChamp       	|
| ![forsenCD](https://cdn.betterttv.net/emote/5d3e250a6d68672adc3fbff7/2x "forsenCD") 	| getForsenCD         	|
| ![PogOh](https://cdn.betterttv.net/emote/5e9cdca974046462f7673006/2x "PogOh") 	| getPogOh             	|
| ![YEPP](https://cdn.betterttv.net/emote/5e978e20d023b362f638339d/2x "YEPP") 	| getYEPP             	|
| ![EZ](https://cdn.betterttv.net/emote/5590b223b344e2c42a9e28e3/2x "EZ") 	| getEZ               	|
| ![PepeLaugh](https://cdn.betterttv.net/emote/59b73909b27c823d5b1f6052/2x "PepeLaugh") 	| getPepeLaugh        	|
| ![FeelsWeirdMan](https://cdn.betterttv.net/emote/5603731ce5fc5eff1de93229/2x "FeelsWeirdMan") 	| getFeelsWeirdMan    	|
| ![ForsenSmug](https://cdn.betterttv.net/emote/5e108bc9b9741121048001e9/2x "ForsenSmug") 	| getForsenSmug       	|
| ![PagMan](https://cdn.betterttv.net/emote/5e87b595acae25096140ca84/2x "PagMan") 	| getPagMan           	|
| ![MEGALUL](https://cdn.betterttv.net/emote/5e49b8f1e383e37d5d9d931c/2x "MEGALUL") 	| getMEGALUL          	|
| ![PajaThink](https://cdn.betterttv.net/emote/5d51d7e364ae370ac807f11f/2x "PajaThink") 	| getPajaThink        	|
| ![GachiGASM](https://cdn.betterttv.net/emote/55999813f0db38ef6c7c663e/2x "GachiGASM") 	| getGachiGASM        	|
| ![ForsenPls](https://cdn.betterttv.net/emote/55e2096ea6fa8b261f81b12a/2x "ForsenPls") 	| getForsenPls        	|
| ![FEELSWAYTOOGOOD](https://cdn.betterttv.net/emote/5e1891efbca2995f13fb29a4/2x "FEELSWAYTOOGOOD") 	| getFEELSWAYTOOGOOD  	|
| ![HACKERMANS](https://cdn.betterttv.net/emote/5b490e73cf46791f8491f6f4/2x "HACKERMANS") 	| getHACKERMANS       	|
| ![ForsenSWA](https://cdn.betterttv.net/emote/571647c4793a158658202e2e/2x "ForsenSWA") 	| getForsenSWA        	|
| ![WAYTOODANK](https://cdn.betterttv.net/emote/5ad22a7096065b6c6bddf7f3/2x "WAYTOODANK") 	| getWAYTOODANK       	|
| ![monkaE](https://cdn.betterttv.net/emote/5e10fd8c3267f72103fd4f25/2x "monkaE") 	| getMonkaE           	|
| ![ForsenDiscoSnake](https://cdn.betterttv.net/emote/5a8314b61686393232d31027/2x "ForsenDiscoSnake") 	| getForsenDiscoSnake 	|
| ![GondolaPls](https://cdn.betterttv.net/emote/5c6d5e89b620383e57c8f3ec/2x "GondolaPls") 	| getGondolaPls       	|
| ![NODDERS](https://cdn.betterttv.net/emote/5eadf40074046462f7687d0f/2x "NODDERS") 	| getNODDERS          	|
| ![TeaTime](https://cdn.betterttv.net/emote/56f6eb647ee3e8fc6e4fe48e/2x "TeaTime") 	| getTeaTime          	|
| ![WEEBSDETECTED](https://cdn.betterttv.net/emote/5c5055045e0cb51b417fa6b8/2x "WEEBSDETECTED") 	| getWEEBSDETECTED    	|
