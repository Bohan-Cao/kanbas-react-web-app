import { ReactNode } from "react";

function Hightlight({ children }: { children: ReactNode}) {
    return (
        <span style={{ backgroundColor: "yellow", color: "red"}}>
            {children}
        </span>
    );
};

export default Hightlight;