import {MuiMode} from "./mui-mode";
import {render, screen} from "../../test-utils";

describe("MuiMode", () => {
    test("renders test correctly", () => {
        render(<MuiMode/>);
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("dark mode");
    });
});