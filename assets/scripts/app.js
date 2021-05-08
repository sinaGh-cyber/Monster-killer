const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUe = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
let chosenMaxLife = 100;
let enteredMaxLife = prompt(`Enter your chosen max life: `, `${chosenMaxLife}`);
chosenMaxLife = parseInt(enteredMaxLife);
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let bounsLife = 1;
function reset() {
  currentPlayerHealth = chosenMaxLife;
  currentMonsterHealth = chosenMaxLife;
  bounsLife++;
  resetGame(chosenMaxLife);
}
function damageDealer() {
  let initialPlayerHealth = currentPlayerHealth;
  playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentPlayerHealth <= 0 && bounsLife > 0) {
    bounsLife--;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert(`You woulde be dead but bouns life saved you! `);
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("your Won!");
  } else if (currentMonsterHealth >= 0 && currentPlayerHealth <= 0) {
    alert(`GAME OVER`);
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("even");
  }
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}
function attackMonster(mode) {
  let maxDamage;
  if (mode === `ATTACK`) {
    maxDamage = ATTACK_VALUE;
  } else if (mode === `STRONG_ATTACK`) {
    maxDamage = STRONG_ATTACK_VALUe;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  damageDealer();
}
adjustHealthBars(chosenMaxLife);

function attackHandler() {
  attackMonster(`ATTACK`);
}
function strongAttackHandler() {
  attackMonster(`STRONG_ATTACK`);
}

function healHandler() {
  let healValue;
  if (chosenMaxLife > HEAL_VALUE + currentPlayerHealth) {
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  damageDealer();
}

attackBtn.addEventListener(`click`, attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener(`click`, healHandler);
