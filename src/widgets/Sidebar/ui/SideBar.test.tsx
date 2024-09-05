import { render, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar";

describe("SideBar", () => {
    test('test', () => {
        render(<Sidebar/>);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    })
})