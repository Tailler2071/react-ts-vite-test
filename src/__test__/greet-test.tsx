import {render, screen} from "@testing-library/react";
import {Greet} from "../components/greet/greet";


describe("Greet", () => {
    test("Renders correctly", () => {
        render(<Greet/>);

        const textElement = screen.getByText(/hello/i);

        expect(textElement).toBeInTheDocument();
    });
});

