import { describe, it, expect, afterEach } from "vitest";
import { render, screen, within, cleanup } from "@testing-library/react";
import ContactInfo from "@/components/contact/ContactInfo";

describe("ContactInfo Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the studio channels landmark and < 24h Response SLA badge", () => {
    render(<ContactInfo />);

    const panel = screen.getByTestId("contact-info-panel");
    expect(panel).toBeInTheDocument();
    expect(panel.tagName).toBe("ASIDE");

    expect(screen.getByText("// STUDIO CHANNELS")).toBeInTheDocument();
    expect(screen.getByTestId("sla-badge")).toHaveTextContent(
      "< 24h Response SLA"
    );
  });

  it("renders the direct studio email link with the proper mailto href", () => {
    render(<ContactInfo />);

    const emailLink = screen.getByTestId("contact-direct-email");
    expect(emailLink).toHaveTextContent("contact@vectrasolutions.dev");
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:contact@vectrasolutions.dev"
    );
  });

  it("displays the engineering base timezone and discovery call availability", () => {
    render(<ContactInfo />);

    expect(
      screen.getByText("Sri Lanka (UTC+5:30) — Serving Global Teams")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Mon – Sat • Flexible Async & Live Slots")
    ).toBeInTheDocument();
  });

  it("renders the 'What Happens Next' card with all 3 sequential onboarding steps", () => {
    render(<ContactInfo />);

    const processCard = screen.getByTestId("contact-process-card");
    expect(processCard).toBeInTheDocument();
    expect(
      within(processCard).getByRole("heading", { name: /what happens next/i })
    ).toBeInTheDocument();

    const listItems = within(processCard).getAllByRole("listitem");
    expect(listItems).toHaveLength(3);

    expect(listItems[0]).toHaveTextContent("01");
    expect(listItems[0]).toHaveTextContent("Technical Triage");

    expect(listItems[1]).toHaveTextContent("02");
    expect(listItems[1]).toHaveTextContent("Discovery Call");

    expect(listItems[2]).toHaveTextContent("03");
    expect(listItems[2]).toHaveTextContent("Actionable Proposal");
  });
});