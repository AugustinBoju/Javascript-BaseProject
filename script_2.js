let n;
n = prompt("De quel nombre veux-tu calculer la factorielle ?");
n = Number(n);

function factorielle(n)
{
  if (n<0) {
    alert ("Veuillez Saisir Un Entier Positif ou null");
  return "### Erreur ###";
  }
  else {
    if (n == 0) {
    return 1;
    }
    else {
      return n * factorielle (n-1);
    }
  }
}
 console.log(factorielle(n));
