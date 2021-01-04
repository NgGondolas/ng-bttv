import { Injectable } from '@angular/core';
import {EMOTES} from './emote-defaults.enum';

@Injectable({
    providedIn: 'root',
})
export class NgBttvService {
    constructor() { }

    public getBaseURL(): string {
        return 'https://cdn.betterttv.net/emote/';
    }

    public getEmote(id: string, size: number | string): string {
        return `${this.getBaseURL() + id}/${size}x`;
    }

    public getOMEGALUL(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.OMEGALUL}/${size}x`;
    }

    public getPogU(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.PogU}/${size}x`;
    }

    public getSadge(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.Sadge}/${size}x`;
    }

    public getZULUL(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.ZULUL}/${size}x`;
    }

    public getOkayge(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.Okayge}/${size}x`;
    }

    public getMonkaW(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.monkaW}/${size}x`;
    }

    public getLULW(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.LULW}/${size}x`;
    }

    public getMonkaPickle(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.monkaPickle}/${size}x`;
    }

    public getWeirdChamp(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.weirdChamp}/${size}x`;
    }

    public getForsenCD(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.forsenCD}/${size}x`;
    }

    public getPogOh(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.PogOh}/${size}x`;
    }

    public getYEPP(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.YEPP}/${size}x`;
    }

    public getEZ(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.EZ}/${size}x`;
    }

    public getPepeLaugh(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.pepeLaugh}/${size}x`;
    }

    public getFeelsWeirdMan(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.FeelsWeirdMan}/${size}x`;
    }

    public getForsenSmug(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.forsenSmug}/${size}x`;
    }

    public getPagMan(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.PagMan}/${size}x`;
    }

    public getMEGALUL(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.MEGALUL}/${size}x`;
    }

    public getPajaThink(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.pajaThink}/${size}x`;
    }

    public getGachiGASM(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.gachiGASM}/${size}x`;
    }

    // BELOW THIS COMMENT ARE GIFS
    public getForsenPls(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.forsenPls}/${size}x`;
    }

    public getFEELSWAYTOOGOOD(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.FEELSWAYTOOGOOD}/${size}x`;
    }

    public getHACKERMANS(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.HACKERMANS}/${size}x`;
    }

    public getForsenSWA(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.forsenSWA}/${size}x`;
    }

    public getWAYTOODANK(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.WAYTOODANK}/${size}x`;
    }

    public getMonkaE(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.monkaE}/${size}x`;
    }

    public getForsenDiscoSnake(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.forsenDiscoSnake}/${size}x`;
    }

    public getGondolaPls(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.gondolaPls}/${size}x`;
    }

    public getNODDERS(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.NODDERS}/${size}x`;
    }

    public getTeaTime(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.TeaTime}/${size}x`;
    }

    public getWEEBSDETECTED(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.WEEBSDETECTED}/${size}x`;
    }
}
