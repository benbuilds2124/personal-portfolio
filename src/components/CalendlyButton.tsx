import { Calendar } from "lucide-react";
import { useEffect } from "react";

declare global {
    interface Window {
        Calendly: any;
    }
}

export default function CalendlyButton() {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
            "https://assets.calendly.com/assets/external/widget.css";

        document.head.appendChild(link);

        const script = document.createElement("script");
        script.src =
            "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const openCalendly = () => {
        window.Calendly.initPopupWidget({
            url: "https://calendly.com/moonrider2124",
        });
    };

    return (
        <button onClick={openCalendly} className="flex items-center justify-center gap-3">
            <Calendar className="h-5 w-5 text-violet-400 dark:text-violet-500" />
            Schedule a Call
        </button>
    );
}