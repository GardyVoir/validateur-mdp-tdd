import { it, expect } from "vitest";
import checkPassword from "./checkPassword";

it("should display lenght error if smaller than 8", () => {
    expect(checkPassword("")).toContain("Le mot de passe doit comporter au moins 8 caractères");
    expect(checkPassword("abc")).toContain("Le mot de passe doit comporter au moins 8 caractères");
    expect(checkPassword("abcde")).toContain("Le mot de passe doit comporter au moins 8 caractères");
    expect(checkPassword("abcdefgh")).toContain("");
  });