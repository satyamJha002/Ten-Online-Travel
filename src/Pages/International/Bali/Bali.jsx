import React from "react";
import { Bali as BaliData } from "../../../assets/Data/BaliData";
import Card from "../../../Components/Card/Card";
import "./Bali.css";
// import './BaliArticle.css';

export default function Bali() {
  return (
    <>
      <div className="BaliIntro">
        <h1>Bali</h1>
        {/* BaliArticle Content */}
        <article className="bali-article">
          <div className="article-content">
            <p>
              <strong>Bali – "The Island of the Gods"</strong> is rightly the
              most popular tourist destination in Indonesia. It's the
              quintessential tropical paradise. Every day small offerings of
              flowers and burning incense sticks are left outside the hotels,
              bars and restaurants on the island. The gentle sound of a gong
              signals the passing of a parade of Balinese dressed in white
              robes. It is this rich culture, which has been enchanting tourists
              who come to the island for the last few hundred years.
            </p>

            <p>
              Bali is one Tourism in Bali is focused on the beaches and towns in
              the south of the island. <span className="location">Kuta</span>{" "}
              attracts the young partygoers,{" "}
              <span className="location">Canggu</span> has its hipsters,{" "}
              <span className="location">Ubud</span> is where the yogis gather,{" "}
              <span className="location">Seminyak</span> for the young and rich
              and <span className="location">Nusa Dua</span> is where you go for
              your all-inclusive 5-star resorts. It's this diversity which makes
              Bali such an easy choice for a relaxing holiday.
            </p>

            <p>
              Leaving the city behind you are quickly surrounded by paddy fields
              and thickly forested hills. The roads lead you through small
              villages and isolated temples perched on the slopes of the hills,
              the perfect place for a bicycle tour. In the highlands, there are
              dozens of tumbling waterfalls where you can go for a swim, which
              lead into the rushing rivers where people go white water rafting.
              Or if you're feeling adventurous you can spend your time jumping
              off waterfalls and abseiling on a day of canyoning.
            </p>

            <p>
              Among thousands of islands that make up the Republic of Indonesia.
              In the midst of the most populous Islamic country in the world,
              this small island has remained predominantly Hindu. A thousand
              years ago many people practised Hinduism across Southeast Asia.
              Today Bali is the only place in the entire region where these
              once-widespread traditions remain strong.
            </p>

            <div className="best-month">
              <h4>What is the best month to go to Bali?</h4>
              <p>
                The best time to visit Bali is between April and October, the
                island's dry season. Bali experiences only two seasons: the
                rainy season and the dry season.
              </p>
            </div>
          </div>
        </article>
        <div className="friAndFam">
          <h2>Friends & Family Tour</h2>
        </div>
        <div className="BaliCardsContainer">
          {BaliData.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
}
