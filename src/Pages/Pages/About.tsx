function About() {
  return (
    <div className="pt-10 mx-4">
      <div
        id="paragraph"
        className="text-sm flex flex-col gap-4 text-Text bg-Second p-5 rounded-xl tablet:text-2xl"
      >
        <p>
          Welcome to Recipe Rocket, your go-to destination for discovering and
          cooking delicious recipes with ease! Our platform leverages the latest
          technologies, including React, Tailwind CSS, and TypeScript, to
          provide you with a seamless and visually appealing experience. Whether
          you're a culinary novice or a seasoned chef, Recipe Rocket offers a
          vast collection of recipes tailored to suit every taste and dietary
          preference.
        </p>
        <p>
          At Recipe Rocket, we believe that cooking should be a joyful and
          accessible experience for everyone. Our intuitive search feature
          allows you to find the perfect recipe based on your ingredients,
          favorite cuisines, or dietary needs. Each recipe comes with clear,
          step-by-step instructions and helpful tips, ensuring that you can
          confidently create mouthwatering dishes every time. Additionally, we
          provide nutritional information and user reviews to help you make
          informed choices and elevate your culinary skills.
        </p>
        <p>
          Join us on this exciting gastronomic journey and let Recipe Rocket
          ignite your passion for cooking. With our extensive recipe collection
          and user-friendly interface, you'll find inspiration and guidance to
          create delicious meals effortlessly. Dive into the world of flavors
          and let your culinary creativity soar with Recipe Rocket, where every
          recipe is just a search away!
        </p>
      </div>
      <div
        id="api-github"
        className="bg-Second mt-6 rounded-xl p-5 text-lg text-Text mb-20"
      >
        <div>
          <span>API- </span>
          <span
            className="text-sm text-gray-300"
            onClick={() => window.open("https://www.themealdb.com/api.php")}
          >
            https://www.themealdb.com/api.php
          </span>
        </div>
        <div>
          <span>Github- </span>
          <span
            className="text-sm text-gray-300"
            onClick={() =>
              window.open("https://github.com/nishan812/Recipe-Rocket")
            }
          >
            https://github.com/nishan812/Recipe-Rocket
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
