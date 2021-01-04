import { Injectable } from '@angular/core';
import {EMOTES} from './emote-defaults.enum';

@Injectable({
    providedIn: 'root',
})
export class NgBttvService {
    constructor() { }

    public static getBaseURL(): string {
        return 'https://cdn.betterttv.net/emote/';
    }

    public static getEmote(id: string, size: number | string): string {
        return `${this.getBaseURL() + id}/${size}x`;
    }

    public static getOMEGALUL(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.OMEGALUL}/${size}x`;
    }

    public static getPogU(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.PogU}/${size}x`;
    }

    public static getSadge(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.Sadge}/${size}x`;
    }

    public static getZULUL(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.ZULUL}/${size}x`;
    }

    public static getOkayge(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.Okayge}/${size}x`;
    }

    public static getMonkaW(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.monkaW}/${size}x`;
    }

    public static getLULW(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.LULW}/${size}x`;
    }

    public static getMonkaPickle(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.monkaPickle}/${size}x`;
    }

    public static getWeirdChamp(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.weirdChamp}/${size}x`;
    }

    public static getForsenCD(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.forsenCD}/${size}x`;
    }

    public static getPogO(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.PogO}/${size}x`;
    }

    public static getYEPP(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.YEPP}/${size}x`;
    }

    public static getEZ(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.EZ}/${size}x`;
    }

    public static getPepeLaugh(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.pepeLaugh}/${size}x`;
    }

    public static getFeelsWeirdMan(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.FeelsWeirdMan}/${size}x`;
    }

    public static getForsenSmug(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.forsenSmug}/${size}x`;
    }

    public static getPagMan(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.PagMan}/${size}x`;
    }

    public static getMEGALUL(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.MEGALUL}/${size}x`;
    }

    public static getPajaThink(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.pajaThink}/${size}x`;
    }

    public static getGachiGASM(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.gachiGASM}/${size}x`;
    }

    // BELOW THIS COMMENT ARE GIFS
    public static getForsenPls(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.forsenPls}/${size}x`;
    }

    public static getFEELSWAYTOOGOOD(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.FEELSWAYTOOGOOD}/${size}x`;
    }

    public static getHACKERMANS(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.HACKERMANS}/${size}x`;
    }

    public static getForsenSWA(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.forsenSWA}/${size}x`;
    }

    public static getWAYTOODANK(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.WAYTOODANK}/${size}x`;
    }

    public static getMonkaE(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.monkaE}/${size}x`;
    }

    public static getForsenDiscoSnake(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.forsenDiscoSnake}/${size}x`;
    }

    public static getGondolaPls(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.gondolaPls}/${size}x`;
    }

    public static getNODDERS(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.NODDERS}/${size}x`;
    }

    public static getTeaTime(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.TeaTime}/${size}x`;
    }

    public static getWEEBSDETECTED(size: number | string): string {
        return `${this.getBaseURL() + EMOTES.WEEBSDETECTED}/${size}x`;
    }
}
