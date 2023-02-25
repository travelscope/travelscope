export function AboutUsRoute() {
  return (
    <div id="explore-section" className="">
      <header className="bg-blue-400 py-40 flex justify-between items-center px-5">
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <h1 className="text-white text-2xl max-w-sm">
            Explore thousands of options to enjoy life with TravelScope
          </h1>
          <img src="/about-us-hero.webp" alt="about us hero" />
        </div>
      </header>
      <div className="p-10">
        <h2 className="text-center text-xl">
          Travelscope
          <br />
          Life,Your Way
        </h2>
      </div>
      <div className="flex justify-between max-w-5xl mx-auto items-center">
        <img src="/about-us-travel.webp" alt="about us travel" />
        <div className="space-y-4">
          <p>
            TravelScope is Southeast Asia’s travel and lifestyle app, we provide
            you with access to discover and purchase different type of travel
            needs, local services, and financial services products.
          </p>
          <p>
            TravelScope's comprehensive product portfolio includes transport
            booking services such as flight tickets, bus, trains, car rental,
            airport transfer, as well as access to the largest accommodation
            inventory in Southeast Asia. Not only that, to help you fulfill more
            of your lifestyle aspirations, we also complete our offerings with a
            wide range of local attractions, activities as well as wellness and
            beauty clinics. So, whatever your lifestyle choice is, you are just
            one click away!
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <p>
          TravelScope believes that happiness may come in many forms for
          different people in different occassion. Therefore, with our
          credibility of more than 10 years experience, we promise you an
          extensive choices to ignite your very own state of happiness. Whether
          you are looking for a glamping experience or staycation in 5-stars
          resort, a relaxing spa day or a thrilling holiday adventure, a
          convenient first-class flight or exciting road trip, both for domestic
          and international trip, you got it all in one TravelScope app. With
          24/7 customer service in local languages as well as more than 30
          different local payment methods, TravelScope has been downloaded more
          than 100 million times, making it the most popular travel and
          lifestyle booking application in the Southeast Asian region. What are
          you waiting for? Book that well-planned trip or have your first last
          minute getaway with us. For all of your unique travel and lifestyle
          choices, as always, TravelScope got you covered.
        </p>
        <img src="/about-us-swimming.webp" alt="about us swimming" />
      </div>
      <div>
        <img src="/map-indonesia.png" alt="map indonesia" />
      </div>
    </div>
  );
}
