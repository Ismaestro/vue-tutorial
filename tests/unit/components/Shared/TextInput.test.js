import { mount } from "@vue/test-utils";
import TextInput from "@/components/Shared/TextInput";

describe("TextInput", () => {
  it("communicates that user has entered character", async () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    input.setValue("N");
    await input.setValue("NY");
    await input.setValue("NYC");
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["N"], ["NY"], ["NYC"]]);
  });
});
