const quotes = [
  // English Quotes - Math Category
  {
    lang: "en",
    quote:
      "Do not worry about your difficulties in mathematics; I can assure you that mine are still greater.",
    author: "Albert Einstein",
    category: "math",
  },
  {
    lang: "en",
    quote: "Pure mathematics is, in its way, the poetry of logical ideas.",
    author: "Albert Einstein",
    category: "math",
  },
  {
    lang: "en",
    quote: "Mathematics is the music of reason.",
    author: "James Joseph Sylvester",
    category: "math",
  },
  {
    lang: "en",
    quote:
      "In mathematics, the art of proposing a question must be held of higher value than solving it.",
    author: "Georg Cantor",
    category: "math",
  },
  {
    lang: "en",
    quote:
      "Mathematics may not teach us how to add love or subtract hate, but it gives us hope that every problem has a solution.",
    author: "Anonymous",
    category: "math",
  },

  // English Quotes - Philosophy Category
  {
    lang: "en",
    quote:
      "Don't walk in front of me; I may not follow. Don't walk behind me; I may not lead. Just walk beside me and be my friend.",
    author: "Albert Camus",
    category: "philosophy",
  },
  {
    lang: "en",
    quote:
      "In the midst of winter, I found there was, within me, an invincible summer.",
    author: "Albert Camus",
    category: "philosophy",
  },
  {
    lang: "en",
    quote: "The only way to deal with this life is to find meaning in it.",
    author: "Albert Camus",
    category: "philosophy",
  },
  {
    lang: "en",
    quote: "Man is the only creature who refuses to be what he is.",
    author: "Albert Camus",
    category: "philosophy",
  },
  {
    lang: "en",
    quote:
      "There is no sun without shadow, and it is essential to know the night.",
    author: "Albert Camus",
    category: "philosophy",
  },

  // English Quotes - Programming Category
  {
    lang: "en",
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    category: "programming",
  },
  {
    lang: "en",
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    category: "programming",
  },
  {
    lang: "en",
    quote:
      "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
    author: "Muhammad Waseem",
    category: "programming",
  },
  {
    lang: "en",
    quote:
      "Programming isn’t about what you know; it’s about what you can figure out.",
    author: "Chris Pine",
    category: "programming",
  },
  {
    lang: "en",
    quote:
      "In software, the most beautiful code is the code that isn’t written.",
    author: "David Linthicum",
    category: "programming",
  },

  // English Quotes - Literature Category
  {
    lang: "en",
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
    category: "literature",
  },
  {
    lang: "en",
    quote:
      "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    author: "Dr. Seuss",
    category: "literature",
  },
  {
    lang: "en",
    quote: "There is no friend as loyal as a book.",
    author: "Ernest Hemingway",
    category: "literature",
  },
  {
    lang: "en",
    quote:
      "A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading.",
    author: "William Styron",
    category: "literature",
  },
  {
    lang: "en",
    quote: "A book is a dream that you hold in your hand.",
    author: "Neil Gaiman",
    category: "literature",
  },

  // German Quotes - Math Category
  {
    lang: "de",
    quote:
      "Machen Sie sich keine Sorgen um Ihre Schwierigkeiten in der Mathematik; Ich kann Ihnen versichern, dass meine noch größer sind.",
    author: "Albert Einstein",
    category: "math",
  },
  {
    lang: "de",
    quote: "Die reine Mathematik ist sozusagen die Poesie logischer Ideen.",
    author: "Albert Einstein",
    category: "math",
  },
  {
    lang: "de",
    quote: "Mathematik ist die Musik der Vernunft.",
    author: "James Joseph Sylvester",
    category: "math",
  },
  {
    lang: "de",
    quote:
      "In der Mathematik muss die Kunst des Stellens einer Frage höher bewertet werden als ihre Lösung.",
    author: "Georg Cantor",
    category: "math",
  },
  {
    lang: "de",
    quote:
      "Mathematik lehrt uns vielleicht nicht, wie man Liebe addiert oder Hass subtrahiert, aber sie gibt uns Hoffnung, dass jedes Problem eine Lösung hat.",
    author: "Anonym",
    category: "math",
  },

  // German Quotes - Philosophy Category
  {
    lang: "de",
    quote:
      "Geh nicht vor mir, vielleicht folge ich nicht. Geh nicht hinter mir, vielleicht führe ich nicht. Geh einfach neben mir und sei mein Freund.",
    author: "Albert Camus",
    category: "philosophy",
  },
  {
    lang: "de",
    quote:
      "Mitten im Winter fand ich, dass in mir ein unbesiegbarer Sommer ist.",
    author: "Albert Camus",
    category: "philosophy",
  },
  {
    lang: "de",
    quote:
      "Die einzige Möglichkeit, mit diesem Leben umzugehen, besteht darin, darin einen Sinn zu finden.",
    author: "Albert Camus",
    category: "philosophy",
  },
  {
    lang: "de",
    quote:
      "Der Mensch ist das einzige Lebewesen, das sich weigert, das zu sein, was es ist.",
    author: "Albert Camus",
    category: "philosophy",
  },
  {
    lang: "de",
    quote:
      "Es gibt keine Sonne ohne Schatten, und es ist wichtig, die Nacht zu kennen.",
    author: "Albert Camus",
    category: "philosophy",
  },

  // German Quotes - Programming Category
  {
    lang: "de",
    quote:
      "Programme müssen für Menschen geschrieben werden, um sie zu lesen, und nur nebenbei für Maschinen, um sie auszuführen.",
    author: "Harold Abelson",
    category: "programming",
  },
  {
    lang: "de",
    quote:
      "Jeder Narr kann Code schreiben, den ein Computer verstehen kann. Gute Programmierer schreiben Code, den Menschen verstehen können.",
    author: "Martin Fowler",
    category: "programming",
  },
  {
    lang: "de",
    quote:
      "Gib einem Mann ein Programm, frustriere ihn für einen Tag. Lehre einen Mann das Programmieren, frustriere ihn für sein Leben.",
    author: "Muhammad Waseem",
    category: "programming",
  },
  {
    lang: "de",
    quote:
      "Programmieren geht nicht darum, was du weißt; es geht darum, was du herausfinden kannst.",
    author: "Chris Pine",
    category: "programming",
  },
  {
    lang: "de",
    quote:
      "In der Softwareentwicklung ist der schönste Code der Code, der nicht geschrieben wird.",
    author: "David Linthicum",
    category: "programming",
  },

  // German Quotes - Literature Category
  {
    lang: "de",
    quote: "Ein Raum ohne Bücher ist wie ein Körper ohne Seele.",
    author: "Marcus Tullius Cicero",
    category: "literature",
  },
  {
    lang: "de",
    quote:
      "Je mehr du liest, desto mehr Dinge wirst du wissen. Je mehr du lernst, desto mehr Orte wirst du besuchen.",
    author: "Dr. Seuss",
    category: "literature",
  },
  {
    lang: "de",
    quote: "Es gibt keinen Freund so loyal wie ein Buch.",
    author: "Ernest Hemingway",
    category: "literature",
  },
  {
    lang: "de",
    quote:
      "Ein großartiges Buch sollte dich mit vielen Erfahrungen zurücklassen und dich am Ende etwas erschöpft zurücklassen. Du lebst mehrere Leben beim Lesen.",
    author: "William Styron",
    category: "literature",
  },
  {
    lang: "de",
    quote: "Ein Buch ist ein Traum, den du in deiner Hand hältst.",
    author: "Neil Gaiman",
    category: "literature",
  },
];

export default quotes;