import Content from "../components/Content";
import hobbiesImage from "../assets/hobbies.jpeg";
import Chip from "../components/Chip";

interface Hobby {
  hobby: string;
  link: string;
}

const RECIPES: Hobby[] = [
  {
    hobby: "Instant Pot Mac & Cheese",
    link: "https://thesaltymarshmallow.com/instant-pot-mac-and-cheese/",
  },
  {
    hobby: "Marinara",
    link: "https://cooking.nytimes.com/recipes/1015987-classic-marinara-sauce/",
  },
  {
    hobby: "Pan-Fried Chicken Tenders",
    link: "https://deliciouslittlebites.com/pan-fried-chicken-tenders/",
  },

  {
    hobby: "Chocolate Cheesecake",
    link: "https://cooking.nytimes.com/recipes/1026510-chocolate-cheesecake-with-raspberry-swirl/",
  },
  {
    hobby: "Steak Marinade",
    link: "https://www.allrecipes.com/recipe/143809/best-steak-marinade-in-existence/",
  },
  {
    hobby: "Dutch Baby",
    link: "https://cooking.nytimes.com/recipes/6648-dutch-baby/",
  },
  {
    hobby: "Taco Pasta",
    link: "https://tasty.co/recipe/one-pot-cheesy-taco-pasta/",
  },
];

const GAMES: Hobby[] = [
  {
    hobby: "Paper Mario",
    link: "https://www.nintendo.com/us/store/products/paper-mario-the-thousand-year-door-switch/",
  },
  {
    hobby: "Minecraft",
    link: "https://www.minecraft.net/en-us/",
  },
  {
    hobby: "Fortnite",
    link: "https://www.fortnite.com//",
  },
  { hobby: "Undertale", link: "https://undertale.com/" },
  {
    hobby: "Skyrim",
    link: "https://elderscrolls.bethesda.net/en-US/skyrim10/",
  },
  {
    hobby: "Portal 2",
    link: "https://store.steampowered.com/app/620/Portal_2/",
  },
  {
    hobby: "Pokémon",
    link: "https://www.pokemon.com/us/",
  },
];

export default function Hobbies() {
  return (
    <Content
      title="Hobbies"
      image={hobbiesImage}
      imageAlt="Joe Gilberto at laser tag."
    >
      <p>
        In my free time I enjoy spending time with my good friends and family,
        cooking new dishes, and playing video games.
      </p>
      <p>
        Weeknight dinner staples include Instant Pot mac and cheese, pasta with
        a homemade marinara, and steak tips in a delicious marinade. I also love
        baking for the holidays ranging from a chocolate raspberry cheesecake to
        a sugar free pumpkin pie! Always enjoy finding a new dish to try.
      </p>
      <div className="flex gap-2 justify-center items-center flex-wrap">
        {RECIPES.map(({ hobby, link }, i) => (
          <a key={i} href={link} target="_blank" rel="noopener noreferrer">
            <Chip
              style={{ animationDelay: `${i * 150}ms` }}
              className="motion-safe:animate-link-fade-in hover:decoration-current underline decoration-2 decoration-transparent underline-offset-4 cursor-pointer"
              text={hobby}
            />
          </a>
        ))}
      </div>
      <p>
        Some of my favorite games include Paper Mario, Minecraft, and, on
        occasion, Fortnite with my friends.
      </p>
      <div className="flex gap-2 justify-center items-center flex-wrap">
        {GAMES.map(({ hobby, link }, i) => (
          <a key={i} href={link} target="_blank" rel="noopener noreferrer">
            <Chip
              style={{
                animationDelay: `${(RECIPES.length + 1) * 150 + i * 150}ms`,
              }}
              className="motion-safe:animate-link-fade-in hover:decoration-current underline decoration-2 decoration-transparent underline-offset-4 cursor-pointer"
              text={hobby}
            />
          </a>
        ))}
      </div>
    </Content>
  );
}
