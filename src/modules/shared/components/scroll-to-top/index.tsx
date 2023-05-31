import { useRouter } from "next/router";
import { useEffect } from "react";

export function ScrollToTop() {
    const { pathname } = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }
    }, [pathname]);

    return null;
}
