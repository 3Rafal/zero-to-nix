export type Snippet = {
  id: string;
  title: string;
  text: string;
};

export const snippets: Snippet[] = [
  {
    id: "derivation",
    title: "Derivation",
    text: "A set of build instructions for producing packages",
  },
  {
    id: "flake-inputs",
    title: "Flake inputs",
    text: "Just, you know, flake inputs",
  },
  {
    id: "flake-outputs",
    title: "Flake outputs",
    text: "What your flake produces. Includes things like dev environments, packages, and NixOS configurations.",
  },
  {
    id: "flake-templates",
    title: "Flake templates",
    text: "An easy way to get started with Nix flake projects",
  },
  {
    id: "harmonic",
    title: "Harmonic",
    text: "A quick and dirty Nix installer from Determinate Systems",
  },
  {
    id: "nix-store",
    title: "The Nix store",
    text: "The filesystem place where the good Nix stuff happend",
  },
  {
    id: "pinning",
    title: "Pinning dependencies",
    text: "A totally awesome thing that you should always do, trust us",
  },
];
