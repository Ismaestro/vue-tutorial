import { mount, RouterLinkStub } from "@vue/test-utils";
import Headline from "@/components/JobSearch/Headline";
import { nextTick } from "vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm";

describe("JobSearchForm", () => {
  const push = jest.fn();
  const createConfig = () => ({
    attachTo: document.body,
    global: {
      mocks: {
        $router: {
          push,
        },
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("when user submits form", () => {
    it("directs user to job results page with users search parameters", async () => {
      const wrapper = mount(JobSearchForm, createConfig());
      const roleInput = wrapper.get("[data-test='role-input']");
      const locationInput = wrapper.get("[data-test='location-input']");
      const submitButton = wrapper.get("[data-test='form-submit-button']");

      await roleInput.setValue("Vue developer");
      await locationInput.setValue("Madrid");

      await submitButton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "JobResultsRoute",
        query: { role: "Vue developer", location: "Madrid" },
      });
    });
  });
});
