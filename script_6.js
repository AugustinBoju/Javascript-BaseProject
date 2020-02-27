let arn1 = "CCGUCGUUGCGCUACAGC";
let arn2 = "CCUCGCCGGUACUUCUCG";

function acidesArn(arn){
  let acides = [];
  arn.match(/.{1,3}/g).forEach((codon) => {
    if (codon == "UCU" || codon == "UCC" || codon == "UCA" || codon == "UCG" || codon == "AGU" || codon == "AGC") {
      acides.push("Sérine");
    } else if (codon == "CCU" || codon == "CCC" || codon == "CCA" || codon == "CCG") {
      acides.push("Proline");
    } else if (codon == "UUA" || codon == "UUG") {
      acides.push("Leucine");
    } else if (codon == "UUU" || codon == "UUC") {
      acides.push("Phénylalanine");
    } else if (codon == "CGU" || codon == "CGC" || codon == "CGA" || codon == "CGG" || codon == "AGA" || codon == "AGG") {
      acides.push("Arginine");
    } else if (codon == "UAU" || codon == "UAC") {
      acides.push("Tyrosine");
    } else {
      acides.push(codon);
    }
  });
  return acides.join('-');
}

console.log(`---> L'Arn \"${arn1}\" donne la protéine :`);
console.log(acidesArn(arn1));
console.log(`---> L'Arn \"${arn2}\" donne le protéine :`);
console.log(acidesArn(arn2));
