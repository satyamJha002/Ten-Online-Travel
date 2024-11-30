import { v4 as uuidv4 } from "uuid";

const randomNumericId = parseInt(uuidv4().replace(/-/g, "").slice(0, 12), 16);

export const packages = [
  {
    id: randomNumericId,
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/3c/2f/0f/chalo-kasol-camps-and.jpg?w=1200&h=-1&s=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/508599365.jpg?k=49a2b98e33f1d55d1f0d7975ba0a54b065e6a409d779f1842a9ab533e579ba99&o=&hp=1",
      "https://media.moxtain.com/blogs/CampingInKasol/576/campin+in+kasol.webp",
      "https://www.hireacamp.com/api/external/image?name=uploads/15e03a82b8f94ae68a56a340223be4c6.jpeg&size=3840x3840&q=75",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKjxdmpQfLK-hO5ayY4M4p_mz0PCgC3m5Ag&s",
      "https://media2.thrillophilia.com/images/photos/000/128/365/original/1569826089_shutterstock_1456011551_(2).jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true",
    ],
    title: "Kasol Camping | 2 Nights Stay",
    location: "Kasol",
    duration: "3 Days - 2 Nights",
    people: "2-60 People",
    discount: "25% Off",
    price: "₹3,700",
    originalPrice: "₹4,990",
    nextDepartures: ["Dec 1", "Dec 5", "Dec 10"],
    featured: true,
    description: "Relaxing getaway to Goa's stunning beaches and sunsets.",
    subDescription: "",
  },
];
