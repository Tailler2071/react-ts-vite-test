import {render, screen} from "@testing-library/react";
import {Greet} from "./greet.tsx";

describe("Greet", () => {
    test("Renders correctly", () => {
        render(<Greet/>);

        const textElement = screen.getByText(/hello/i);

        expect(textElement).toBeInTheDocument();
    });

    describe("Nested", () => {
        test("Renders a name", () => {
            render(<Greet name={"Alex"}/>);

            const textElement = screen.getByText(/hello alex/i);

            expect(textElement).toBeInTheDocument();
        });
    });
});

