const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
function resultCheck(currentMonsterHealth, currentPlayerHealth) {
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("your Won!");
  } else if (currentMonsterHealth >= 0 && currentPlayerHealth <= 0) {
    alert(`GAME OVER`);
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("even");
  }
}
adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  resultCheck(currentMonsterHealth, currentPlayerHealth);
}
attackBtn.addEventListener(`click`, attackHandler);
