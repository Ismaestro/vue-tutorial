import { mount, RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/JobResults/JobListing";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "Bobo",
    locations: ["NYC"],
    minimumQualifications: ["code", "develop"],
    ...jobProps,
  });
  const createConfig = (jobProps) => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
    props: {
      job: {
        ...jobProps,
      },
    },
  });

  it("renders job title", async () => {
    const jobProps = createJobProps({ title: "Vue Developer" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Vue Developer");
  });

  it("renders job organization", async () => {
    const jobProps = createJobProps({ organization: "Bobo" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Bobo");
  });

  it("renders job locations", async () => {
    const jobProps = createJobProps({
      locations: ["Orlando", "San Francisco"],
    });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Orlando");
    expect(wrapper.text()).toMatch("San Francisco");
  });

  it("renders job qualifications", async () => {
    const jobProps = createJobProps({
      minimumQualifications: ["Code", "Develop"],
    });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Code");
    expect(wrapper.text()).toMatch("Develop");
  });

  it("links to individual job's page", async () => {
    const jobProps = createJobProps({
      id: 15,
    });
    const wrapper = mount(JobListing, createConfig(jobProps));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15");
  });
});
