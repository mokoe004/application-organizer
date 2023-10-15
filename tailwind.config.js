/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.{html,js,ejs}",
  ],
  theme: {
    fontFamily: {
      khand:"Khand",
      semibold: "Khand-SemiBold",
      bold: "Khand-Bold",
      medium: "Inter-Medium",
      light: "Inter-Light",
      extralight: "Inter-ExtraLight",
      interbold: "Inter-Bold",
      intersemibold: "Inter-SemiBold",
    },
    // colors: {
    //   gray: {
    //     100 : "#f6f8fa",
    //     200 : "#eaeef2",
    //     300 : "#d0d7de",
    //     400 : "#afb8c1",
    //     500 : "#8c959f",
    //     600 : "#6e7781",
    //     700 : "#57606a",
    //     800 : "#424a53",
    //     900 : "#32383f",
    //     950 : "#24292f"
    //   },
    //   blue: {
    //     100: "#b6e3ff",
    //     200: "#80ccff",
    //     300: "#54aeff",
    //     400: "#218bff",
    //     500: "#0969da",
    //     600: "#0550ae",
    //     700: "#033d8b",
    //     800: "#0a3069",
    //     900: "#002155"
    //   },
    // },
    extend: {},
  },
  plugins: [
  ],
}

