import {render, screen} from "@testing-library/react";
import {Greet} from "./greet.tsx";

describe("Greet", () => {
    it("Renders a name", () => {
        render(<Greet name={"Alex"}/>);

        const textElement = screen.getByText(/hello alex/i);

        expect(textElement).toBeInTheDocument();
    });
});
