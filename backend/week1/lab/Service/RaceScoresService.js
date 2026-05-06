import fs from 'fs';
import { RaceResult } from '../Model/RaceResult.js';
import { Duration } from '../Model/Duration.js';

export class RaceScoresService {
    /**
    * Adds a new race result to the race list.
    * @param {RaceResult} result - The race result to add.
    */
    addRaceResult(result) {
        // TODO
        this.result.push(result);
    }

    constructor() {
        /** @type {RaceResult[]} */
        this.result = [];
    }

    /**
    * Saves the race results list to a JSON file.
    * @param {string} filePath - The path to the file data should be saved.
    */
    saveToFile(filePath) {
        // Your code
        fs.writeFileSync(filePath, JSON.stringify(this.result), 'utf8');
    }

    /**
    * Loads the race results list from a JSON file.
    * @param {string} filePath - The path to the file to load data from.
    * @returns {boolean} True if loading was successful, false otherwise.
    */
    loadFromFile(filePath) {
        // Your code
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            const loadedResults = JSON.parse(data);
            this.result = loadedResults.map(result => new RaceResult(
                result.participantID,
                result.sportType,
                new Duration(result.duration._totalSeconds)
            ));
            return true;
        } catch (error) {
            console.error('Error loading race results:', error);
            return false;
        }
    }

    /**
    * Retrieves the race time for a given participant and sport.
    * @param {string} participantId - Participant ID.
    * @param {string} sport - Sport name.
    * @returns {Duration|null} Duration if found, else null.
    */
    getTimeForParticipant(participantId, sport) {
        // Your code
        const found = this.result.find(
            r => r.participantID === participantId && r.sportType === sport
        );
        return found ? found.duration : null;    
    }

    /** 
     * Computes total time for a given participant by summing their race times. 
     * @param {string} participant_id - The ID of the participant. 
     * @returns {Duration} The total Duration object 
     */ 
    getTotalTimeForParticipant(participant_id) { 
        // Your code 
        const participantResults = this.result.filter(r => r.participantID === participant_id);
        const totalDuration = participantResults.reduce((accumulator, curr) => accumulator.plus(curr.duration), new Duration(0));
        return totalDuration;
    } 
}