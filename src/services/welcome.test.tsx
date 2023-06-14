import { welcome } from "./welcome";


describe("Mensagem de boas vindas", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("should return a welcome message", () => {
    welcome();
    expect(mockAlert).toHaveBeenCalledWith("Boas Vindas!");
  });
});

// test("funfa", () => {
//   expect(1 + 1).toBe(2);
// })