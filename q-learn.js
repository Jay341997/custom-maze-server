// TypeScript
//import { DQNSolver, DQNOpt, DQNEnv } from 'reinforce-js';

//JavaScript
 const DQNSolver = require('reinforce-js').DQNSolver;
 const DQNEnv = require('reinforce-js').DQNEnv;
 const DQNOpt = require('reinforce-js').DQNOpt;

const width = 400;
const height = 400;
const numberOfStates = 2;
const numberOfActions = 4;
const env = new DQNEnv(width, height, numberOfStates, numberOfActions);

const opt = new DQNOpt();
opt.setTrainingMode(true);
opt.setNumberOfHiddenUnits([100]);
opt.setEpsilonDecay(1.0, 0.1, 1e3);
opt.setEpsilon(1.0);
opt.setGamma(0.95);
opt.setAlpha(0.005);
opt.setLossClipping(true);
opt.setLossClamp(1.0);
opt.setRewardClipping(true);
opt.setRewardClamp(1.0);
opt.setExperienceSize(1e6);
opt.setReplayInterval(5);
opt.setReplaySteps(5);

/*
Outfit solver with environment complexity and specs.
After configuration it's ready to train its untrained Q-Network and learn from SARSA experiences.
*/
const dqnSolver = new DQNSolver(env, opt);
var rewards = {};
var maze = [[1,0,1,1,1],[1,0,1,1,1],[1,0,1,1,1],[1,0,0,0,0],[1,1,1,1,1]];

/*for(var i=0;i<5;i++)
{
    for(var j=0;j<5;j++)
    {
        const action = dqnSolver.decide([i,j]);
        if(action==0&&j>0)
        {
           if(maze[i][j-1])
           {
               if(rewards[i+"_"+j])
               {
                   rewards[i+"_"+j]-=-1.0;
                   
               }
           }
           else
           {

           }
        }
        if(action==1)
        {

        }
        if(action==2)
        {

        }
        if(action==3)
        {

        }
    }
}*/
/*
Determine a state, e.g.:
*/


/*
Now inject state and receive the preferred action as index from 0 to 3 as configured via numberOfActions.
*/
var t=0;
var t2=0;
var t3=0;
var t4=0;
for(var i=0;i<1500;i++)
{
for(var j=0;j<2;j++)
{    
var state=[0,j];
const action = dqnSolver.decide(state);
if(action==0)
{ 
   if(j)
   { 
   const reward=-1.0;
   dqnSolver.learn(reward);
   }
   else
   {
   const reward=0.9;
   dqnSolver.learn(reward);
   }
}
if(action==1)
{
    if(j)
    { 
    const reward=0.3;
    dqnSolver.learn(reward);
    }
    else
    {
    const reward=0.6;
    dqnSolver.learn(reward);
    }
}
if(action==2)
{
    if(j)
    { 
    const reward=0.6;
    dqnSolver.learn(reward);
    }
    else
    {
    const reward=0.3;
    dqnSolver.learn(reward);
    }
}
if(action==3)
{ 
   if(j)
   { 
   const reward=0.9;
   dqnSolver.learn(reward);
   }
   else
   {
   const reward=-1.0;
   dqnSolver.learn(reward);
   }
}
console.log(action);
}
}

for(var i=0;i<100;i++)
{
    var state = [0,0];
    const action = dqnSolver.decide(state);
    if(action==0)
    {
       t++;
    }
    if(action==1)
    {
        t2++;
    }
    if(action==2)
    {
        t3++;
    }
    if(action==3)
    {
        t4++;
    }
         

}
console.log(t+" "+t2+ " " + t3 + " "+t4);

t=0;
t2=0;
t3=0;
t4=0;
for(var i=0;i<100;i++)
{
    var state = [0,1];
    const action = dqnSolver.decide(state);
    if(action==0)
    {
       t++;
    }
    if(action==1)
    {
        t2++;
    }
    if(action==2)
    {
        t3++;
    }
    if(action==3)
    {
        t4++;
    }
         

}
console.log(t+" "+t2+ " " + t3 + " "+t4);
/*
Now calculate some Reward and let the Solver learn from it, e.g.:
*/

