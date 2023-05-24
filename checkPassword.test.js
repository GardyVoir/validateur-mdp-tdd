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
  expect(checkPassword("abcdefgh").length).toBe(0);
});

it("should display number error if don't contain a number", () => {
  expect(checkPassword("")).toContain(
    "Le mot de passe doit contenir au moins 1 chiffre"
  );
  expect(checkPassword("abc")).toContain(
    "Le mot de passe doit contenir au moins 1 chiffre"
  );
  expect(checkPassword("abcde")).toContain(
    "Le mot de passe doit contenir au moins 1 chiffre"
  );
  expect(checkPassword("abcdefgh1").length).toBe(0);
});
