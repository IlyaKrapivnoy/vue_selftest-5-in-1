import { adjectives, nouns, suffixes } from "@/data/band";
import { getRandomItem } from "@/common/helpers";

export const bandNamesModule = {
  state() {
    return {
      bandAdjectives: adjectives,
      bandNouns: nouns,
      bandSuffixes: suffixes,
      savedBandNames: [],
    };
  },
  mutations: {
    generateBandName(state) {
      const adjective = getRandomItem(state.bandAdjectives);
      const noun = getRandomItem(state.bandNouns);
      const suffix = getRandomItem(state.bandSuffixes);
      state.bandName = `${adjective} ${noun} ${suffix}`;
    },
    saveBandName(state) {
      const newBandNameData = {
        id: Date.now(),
        name: state.bandName,
        score: Math.floor(Math.random() * 101),
      };
      state.savedBandNames.push(newBandNameData);
      state.bandName = "";
    },
    removeSavedBandName(state, nameId) {
      state.savedBandNames = state.savedBandNames.filter(
        (name) => name.id !== nameId
      );
    },
  },
};
