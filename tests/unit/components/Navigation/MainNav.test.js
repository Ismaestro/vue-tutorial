import MainNav from "@/components/Navigation/MainNav";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";

describe("MainNav", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("displays company name", async () => {
    const wrapper = shallowMount(MainNav, createConfig());
    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("displays menu items for navigation", async () => {
    const wrapper = shallowMount(MainNav, createConfig());
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
      const wrapper = shallowMount(MainNav, createConfig());

      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user is logs in", () => {
    it("displays user profile image", async () => {
      const wrapper = shallowMount(MainNav, {
        global: {
          stubs: {
            "router-link": RouterLinkStub,
          },
        },
      });

      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displays sub navigation with additional information", async () => {
      const wrapper = shallowMount(MainNav, {
        global: {
          stubs: {
            "router-link": RouterLinkStub,
          },
        },
      });
      let subnavMenu = wrapper.find("[data-test='subnav-menu']");
      expect(subnavMenu.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");
      subnavMenu = wrapper.find("[data-test='subnav-menu']");
      expect(subnavMenu.exists()).toBe(true);
    });
  });
});
