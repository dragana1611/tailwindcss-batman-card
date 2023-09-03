module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://cdn.europosters.eu/image/1300/art-photo/the-batman-2022-i120278.jpg')"
      },
      keyframes: {
        flow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "50% 100%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      animation: {
        flow: "flow 4s ease-in-out infinite"
      },
      boxShadow: {
        "3xl":
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
      }
    },
  },
  plugins: [],
}