import { BookmarkHeader } from "@/components/bookmark-header";

import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("BookmarkHeader", () => {
  it("renders the title and AddNewButton", async () => {
    const wrapper = render(<BookmarkHeader />);

    // Check if the title "Bookmarks" is rendered
    expect(wrapper.findByText("Bookmarks"));
  });
});
