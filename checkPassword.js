export default function checkPassword(password) {
    var Results = [];
    if (password.length < 8) {
        Results.push("Le mot de passe doit comporter au moins 8 caractères");
    }
    return Results;
  }