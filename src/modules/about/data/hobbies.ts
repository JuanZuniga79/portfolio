import type { ICard } from "@core/types/ICards";
import Books from "@core/assets/svg/books.svg"
import Games from "@core/assets/svg/games.svg"
import Camera from "@core/assets/svg/camera.svg"
import Basketball from "@core/assets/svg/basketball.svg"
import Music from "@core/assets/svg/music.svg"
import Terminal from "@core/assets/svg/terminal.svg"

const en: ICard[] = [
  {
    icon: Books,
    title: "Reading",
    subtitle: "Explore new worlds through books",
    description:
      "When diving into the world of reading, there is always something new that can be learned from.",
    class: ["from-blue-50/60", "to-blue-200/60", "from-blue-600", "to-blue-400", "border-blue-300"],
    level: 6,
    additional: ["Phylosophy", "Literature", "Software Development", "History"]
  },
  {
    icon: Games,
    title: "Gaming",
    subtitle: "Exploring stories, world and adventures.",
    description: "It helps me release stress through a few minutes of fun.",
    class: ["from-indigo-50/60", "to-indigo-200/60", "from-indigo-600", "to-indigo-400", "border-indigo-300"],
    level: 6,
    additional: ["RPG", "Gatcha", "Adventure", "Action"]
  },
  {
    icon: Camera,
    title: "Photography",
    subtitle: "Capture moments in time",
    description:
      "Whenever I discover a new place, or there is a landscape that I love, I like to take photos of it.",
    class: ["from-amber-50/60", "to-amber-200/60", "from-amber-600", "to-amber-400", "border-amber-300"],
    level: 3,
    additional: ["Nature", "Urban", "Portraits", "Landscapes"]
  },
  {
    icon: Basketball,
    title: "Basketball",
    subtitle: "I stay fit and disciplined through sport.",
    description: "I'm not the best, but still, I do my best.",
    class: ["from-purple-50/60", "to-purple-200/60", "from-purple-600", "to-purple-400", "border-purple-300"],
    level: 2,
    additional: ["Teamwork", "Discipline", "Physical Health", "Mental Health"]
  },
  {
    icon: Music,
    title: "Music",
    subtitle: "I release stress and concentrate through music.",
    description:
      "There is always a time for a song, and there is always a song for the moment.",
    class: ["from-emerald-50/60", "to-emerald-200/60", "from-emerald-600", "to-emerald-400", "border-emerald-300"],
    level: 10,
    additional: ["Rock", "Pop", "Country", "Lo-Fi", "Rap"]
  },
  {
    icon: Terminal,
    title: "Open Source",
    subtitle: "Contributing to the community",
    description: "I like to contribute to the community by sharing my knowledge and experiences.",
    class: ["from-cyan-50/60", "to-cyan-200/60", "from-cyan-600", "to-cyan-400", "border-cyan-300"],
    level: 7,
    additional: ["Linux", "Arch Linux", "Qtile", "Git", "GitHub"]
  }
];

const es: ICard[] = [
  {
    icon: Books,
    title: "Lectura",
    subtitle: "Explora nuevos mundos a través de los libros",
    description:
      "Al sumergirte en el mundo de la lectura, no importa si eres principiante, avanzado o experto. Siempre hay algo nuevo que se puede aprender.",
    class: en[0].class,
    level: en[0].level
  },
  {
    icon: Games,
    title: "Videojuegos",
    subtitle:
      "Explora historias, mundos y aventuras a través de los videojuegos",
    description: "Me ayuda a liberar estrés con unos minutos de diversión.",
    class: en[1].class,
    level: en[1].level
  },
  {
    icon: Camera,
    title: "Fotografía",
    subtitle: "Captura momentos en el tiempo",
    description:
      "Siempre que descubro un lugar nuevo o hay un paisaje que me encanta, me gusta tomarle fotos.",
    class: en[2].class,
    level: en[2].level
  },
  {
    icon: Basketball,
    title: "Baloncesto",
    subtitle: "Me mantengo en forma y disciplinado a través del deporte.",
    description: "No soy el mejor, pero aún así, doy lo mejor de mí.",
    class: en[3].class,
    level: en[3].level
  },
  {
    icon: Music,
    title: "Música",
    subtitle: "Libero estrés y me concentro a través de la música.",
    description:
      "Siempre hay un momento para una canción, y siempre hay una canción para el momento.",
    class: en[4].class,
    level: en[4].level
  },
];

const hobbies = (lang: string) => {
  const data = lang === "en" ? en : es;
  return data.sort((a, b) => a.title.localeCompare(b.title));
};

export default hobbies;
