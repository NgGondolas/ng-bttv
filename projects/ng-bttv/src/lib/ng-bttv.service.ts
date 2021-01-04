import { Injectable } from '@angular/core';
import {EMOTES} from './emote-defaults.enum';

@Injectable({
    providedIn: 'root',
})
export class NgBttvService {
    constructor() { }

    static getBaseURL(): string {
        return 'https://cdn.betterttv.net/emote/';
    }

    static getEmote(id: string, size: number | string): string {
        return `${this.getBaseURL() + id}/${size}x`;
    }

    static getOMEGALUL(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.OMEGALUL}/${size}x`;
    }

    static getPogU(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.PogU}/${size}x`;
    }

    static getSadge(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.Sadge}/${size}x`;
    }

    static getZULUL(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.ZULUL}/${size}x`;
    }

    static getOkayge(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.Okayge}/${size}x`;
    }

    static getMonkaW(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.monkaW}/${size}x`;
    }

    static getLULW(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.LULW}/${size}x`;
    }

    static getMonkaPickle(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.monkaPickle}/${size}x`;
    }

    static getWeirdChamp(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.weirdChamp}/${size}x`;
    }

    static getForsenCD(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.forsenCD}/${size}x`;
    }

    static getPogO(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.PogO}/${size}x`;
    }

    static getYEPP(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.YEPP}/${size}x`;
    }

    static getEZ(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.EZ}/${size}x`;
    }

    static getPepeLaugh(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.pepeLaugh}/${size}x`;
    }

    static getFeelsWeirdMan(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.FeelsWeirdMan}/${size}x`;
    }

    static getForsenSmug(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.forsenSmug}/${size}x`;
    }

    static getPagMan(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.PagMan}/${size}x`;
    }

    static getMEGALUL(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.MEGALUL}/${size}x`;
    }

    static getPajaThink(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.pajaThink}/${size}x`;
    }

    static getGachiGASM(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.gachiGASM}/${size}x`;
    }

    // BELOW THIS COMMENT ARE GIFS
    static getForsenPls(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.forsenPls}/${size}x`;
    }

    static getFEELSWAYTOOGOOD(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.FEELSWAYTOOGOOD}/${size}x`;
    }

    static getHACKERMANS(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.HACKERMANS}/${size}x`;
    }

    static getForsenSWA(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.forsenSWA}/${size}x`;
    }

    static getWAYTOODANK(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.WAYTOODANK}/${size}x`;
    }

    static getMonkaE(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.monkaE}/${size}x`;
    }

    static getForsenDiscoSnake(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.forsenDiscoSnake}/${size}x`;
    }

    static getGondolaPls(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.gondolaPls}/${size}x`;
    }

    static getNODDERS(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.NODDERS}/${size}x`;
    }

    static getTeaTime(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.TeaTime}/${size}x`;
    }

    static getWEEBSDETECTED(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.WEEBSDETECTED}/${size}x`;
    }
}
