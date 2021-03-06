import axios from "axios";
jest.mock("axios");
import { flushPromises, shallowMount } from "@vue/test-utils";
import JobListings from "@/components/JobResults/JobListings";

describe("JobListings", () => {
  it("fetches jobs", async () => {
    axios.get.mockResolvedValue({ data: [] });
    shallowMount(JobListings);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for each received job", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const wrapper = shallowMount(JobListings);
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(15);
  });
});
