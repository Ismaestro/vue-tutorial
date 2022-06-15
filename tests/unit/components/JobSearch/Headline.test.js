import { mount } from "@vue/test-utils";
import Headline from "@/components/JobSearch/Headline";
import { nextTick } from "vue";

describe("Headline", () => {
  let wrapper;
  let actionPhrase;

  beforeEach(() => {
    jest.useFakeTimers("legacy");
    wrapper = mount(Headline);
    actionPhrase = wrapper.find("[data-test='action-phrase']");
  });

  it("displays introductory action verb", async () => {
    expect(actionPhrase.text()).toBe("Build for everyone");
  });

  it("changes action verb at a consistent interval", async () => {
    expect(setInterval).toHaveBeenCalled();
  });

  it("swaps action verb after first interval", async () => {
    jest.runOnlyPendingTimers();
    await nextTick();
    expect(actionPhrase.text()).toBe("Create for everyone");
  });

  it("removes interval when component disappears", async () => {
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });

  afterEach(() => {
    jest.useRealTimers();
  });
});
