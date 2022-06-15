import { mount } from "@vue/test-utils";
import Subnav from "@/components/Navigation/Subnav";

describe("Subnav", () => {
  const createConfig = (routeName) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("when user is on job page", () => {
    it("displays job count", async () => {
      const wrapper = mount(Subnav, createConfig("JobResultsRoute"));

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  describe("when user is not on job page", () => {
    it("does NOT displays job count", async () => {
      const wrapper = mount(Subnav, createConfig("HomeRoute"));

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
