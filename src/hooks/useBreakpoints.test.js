import { renderHook } from "@testing-library/react";
import useBreakpoint from "./useBreakpoints";

describe("useBreakpoint", () => {
  test(`Default value of breakpoint will be false`, () => {
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toStrictEqual({
      xs: false,
      sm: false,
      md: false,
      lg: true,
      xl: false,
    });
  });
  test(`window size 0 will set xs true`, () => {
    global.innerWidth = 0;
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toStrictEqual({
      xs: true,
      sm: false,
      md: false,
      lg: false,
      xl: false,
    });
  });

  test(`window size 600 will set sm true`, () => {
    global.innerWidth = 600;
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toStrictEqual({
      xs: false,
      sm: true,
      md: false,
      lg: false,
      xl: false,
    });
  });

  test(`window size 960 will set md true`, () => {
    global.innerWidth = 960;
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toStrictEqual({
      xs: false,
      sm: false,
      md: true,
      lg: false,
      xl: false,
    });
  });

  test(`window size 1270 will set lg true`, () => {
    global.innerWidth = 1270;
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toStrictEqual({
      xs: false,
      sm: false,
      md: false,
      lg: true,
      xl: false,
    });
  });
  test(`window size over 1280 will set xl true`, () => {
    global.innerWidth = 1300;
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toStrictEqual({
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: true,
    });
  });
});
