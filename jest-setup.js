import "@testing-library/jest-dom";
// import fetchMock from "jest-fetch-mock";

// fetchMock.enableMocks();

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
