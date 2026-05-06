import { Duration } from './Model/Duration.js';
import { RaceResult } from './Model/RaceResult.js';
import { RaceScoresService } from './Service/RaceScoresService.js';

// Initialize race scores
const raceManager = new RaceScoresService();

raceManager.addRaceResult(new RaceResult('participant1', 'swim', Duration.fromMinutesAndSeconds(2, 30)));
raceManager.addRaceResult(new RaceResult('participant1', 'run', Duration.fromMinutesAndSeconds(1, 45)));
raceManager.addRaceResult(new RaceResult('participant2', 'swim', Duration.fromMinutesAndSeconds(3, 15)));
// Save results to file
raceManager.saveToFile('./Data/RaceScores.json');