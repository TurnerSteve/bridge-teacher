"use client"
import { useState } from "react";

export default function SaveDealsPage() {
    const [pbnContent, setPbnContent] = useState("");

    const savePbnFile = () => {
        const blob = new Blob([pbnContent], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "deals.pbn";
        link.click();
        URL.revokeObjectURL(link.href);
    };

    return (
        <div>
            <h1>Save Deals in PBN Format</h1>
            <textarea
                rows={10}
                cols={50}
                value={pbnContent}
                onChange={(e) => setPbnContent(e.target.value)}
                placeholder="Enter PBN content here..."
            />
            <br />
            <button onClick={savePbnFile}>Save as PBN</button>
        </div>
    );
}