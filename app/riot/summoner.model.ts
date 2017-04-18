import { championsModel } from "./champions.model";

export class summonerModel{
            summonerName: string;
            totalGames: number;
            totalWins: number;
            totalDefeats: number;
            mostKills: number;
            mostDeaths: number;
            minionKills: number;
            minionsPerGame: number;
            doubleKills: number;
            tripleKills: number;
            quadraKills: number;
            pentaKills: number;
            deaths: number;
            deathsPerGame: number;
            assists: number;
            assistsPerGame: number;
            kills: number;
            killsPerGame: number;
            kdaRatio: number;
            maxKillingSpree: number;
            mostPlayedChampion1: championsModel;
            mostPlayedChampion2: championsModel;
            mostPlayedChampion3: championsModel;
            mostPlayedChampion4: championsModel;
            mostPlayedChampion5: championsModel;

            constructor(json){
                console.dump(json);
            }
        }