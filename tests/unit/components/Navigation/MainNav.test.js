import MainNav from "@/components/Navigation/MainNav";
import { shallowMount } from "@vue/test-utils";

describe("MainNav", () => {
  it("displays company name", async () => {
    const wrapper = shallowMount(MainNav);
    await wrapper.setData({
      company: "Super Corp",
    });
    expect(wrapper.text()).toMatch("Super Corp");
  });

  it("displays menu items for navigation", async () => {
    const wrapper = shallowMount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when user is logged out", () => {
    it("prompts user to sign in", async () => {
      const wrapper = shallowMount(MainNav);

      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user is logs in", () => {
    it("displays user profile image", async () => {
      const wrapper = shallowMount(MainNav);

      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displays sub navigation with additional information", async () => {
      const wrapper = shallowMount(MainNav);
      let subnavMenu = wrapper.find("[data-test='subnav-menu']");
      expect(subnavMenu.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");
      subnavMenu = wrapper.find("[data-test='subnav-menu']");
      expect(subnavMenu.exists()).toBe(true);
    });
  });
});
