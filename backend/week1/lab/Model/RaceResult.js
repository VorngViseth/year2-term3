import { Duration } from "./Duration.js";

export class RaceResult {
    /**
     * @param {string} participantID
     * @param {string} sportType
     * @param {Duration} duration
     */

    constructor(participantID, sportType, duration) {
        this.participantID = participantID;
        this.sportType = sportType;
        this.duration = duration;
    }
}