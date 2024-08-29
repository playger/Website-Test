import "./styles/index.scss";
import { classNames } from "shared/lib/className/classNames";
import { useTheme } from "./providers/themeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect } from "react";

const App = () => {
    const { theme } = useTheme();

    useEffect (()=>{
        if (Math.random() < 0.5){
            throw new Error
        }
    },
    [])
    return (
        <div
            className={classNames("app", { hovered: true, Selected: true }, [
                theme,
                "cls2",
                "cls3",
            ])}
        >
            <Navbar />
            <Suspense fallback="">
                <div className="content-page">
                    <Sidebar></Sidebar>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
