import { Injectable } from '@angular/core';

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
}
