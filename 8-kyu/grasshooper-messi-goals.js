



/*

Grasshopper - Messi Goals

Use variables to find the sum of the goals Messi scored in 3 competitions

Information
Messi goal scoring statistics:

Competition	Goals
La Liga	43
Champions League	10
Copa del Rey	5
Define
Create three variables and store the appropriate values using the table above:

laLigaGoals
championsLeagueGoals
copaDelReyGoals
Create a fourth variable named totalGoals (javascript, C#, Java) or total_goals (python, ruby)
. totalGoals/total_goals should store the sum of all of Messi's goals for this year.

*/




// 1

const laLigaGoals = 43;
const championsLeagueGoals = 10;
const copaDelReyGoals = 5;

const totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

console.log(totalGoals); // 58




// 2

const laLigaGoals = 43;
const championsLeagueGoals = 10;
const copaDelReyGoals = 5;

const goalScoringStatistics = [
  {
    competition: 'La Liga',
    goals: laLigaGoals,
  },
  {
    competition: 'Champions League',
    goals: championsLeagueGoals,
  },
  {
    competition: 'Copa del Rey',
    goals: copaDelReyGoals,
  }
]

const countGoals = (arr) => {
  let sum = 0;

  arr.forEach((item) => {
    sum += item.goals;
  });

  return sum;
}

const totalGoals = countGoals(goalScoringStatistics);
console.log(totalGoals); // 58