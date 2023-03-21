import { timeAgo } from "~/utility/getFormatedDate";

describe("timeago functionality", () => {
  it("expect now time ", () => {
    let time = timeAgo(Date.now());
    expect(time).to.eq("now");
  });
  it("expect Today", () => {
    let BeforeAnHour = new Date().setHours(new Date().getHours() - 1);
    let time = timeAgo(BeforeAnHour);
    expect(time).to.eq("Today");
  });
});
