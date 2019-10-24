import LostChameleon from "./LostChameleon.mp3";
import Rock from "./TheHipsta.mp3";
import Tobu from "./Tobu.mp3";

export const getSongs = URL => {
  const route = URL.split("/").pop();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (route === "songs") {
        resolve([
          {
            name: "Lost Chameleon - Genesis",
            file: LostChameleon
          },
          {
            name: "The Hipsta - Shaken Soda",
            file: Rock
          },
          {
            name: "Tobu - Such Fun",
            file: Tobu
          }
        ]);
      }

      reject({
        message: "route does not exist",
        status: 404
      });
    }, 2000);
  });
};
