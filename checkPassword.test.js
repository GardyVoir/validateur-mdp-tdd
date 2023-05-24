import { it, expect } from "vitest";
import checkPassword from "./checkPassword";

it("should display lenght error if smaller than 8", () => {
  expect(checkPassword("")).toContain(
    "Le mot de passe doit comporter au moins 8 caractères"
  );
  expect(checkPassword("abc")).toContain(
    "Le mot de passe doit comporter au moins 8 caractères"
  );
  expect(checkPassword("abcde")).toContain(
    "Le mot de passe doit comporter au moins 8 caractères"
  );
  expect(checkPassword("abcdefgh")).not.toContain(
    "Le mot de passe doit comporter au moins 8 caractères"
  );
});

it("should display number error if don't contain a number", () => {
  expect(checkPassword("")).toContain(
    "Le mot de passe doit contenir au moins 1 chiffre"
  );
  expect(checkPassword("abc")).toContain(
    "Le mot de passe doit contenir au moins 1 chiffre"
  );
  expect(checkPassword("1")).not.toContain(
    "Le mot de passe doit contenir au moins 1 chiffre"
  );
});

it("should display capital error if don't contain a capital", () => {
  expect(checkPassword("")).toContain(
    "Le mot de passe doit contenir au moins une lettre majuscule"
  );
  expect(checkPassword("abc")).toContain(
    "Le mot de passe doit contenir au moins une lettre majuscule"
  );
  expect(checkPassword("Abc")).not.toContain(
    "Le mot de passe doit contenir au moins une lettre majuscule"
  );
});

it("should display special character error if don't contain a special character", () => {
  expect(checkPassword("")).toContain(
    "Le mot de passe doit contenir au moins un caractère spécial"
  );
  expect(checkPassword("abc")).toContain(
    "Le mot de passe doit contenir au moins un caractère spécial"
  );
  expect(checkPassword("@bc")).not.toContain(
    "Le mot de passe doit contenir au moins un caractère spécial"
  );
});
