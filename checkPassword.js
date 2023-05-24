export default function checkPassword(password) {
    var Results = [];
    if (password.length < 8) {
        Results.push("Le mot de passe doit comporter au moins 8 caractères");
    }
    if (!/[0-9]/.test(password)) {
        Results.push("Le mot de passe doit contenir au moins 1 chiffre");        
    }
    return Results;
  }