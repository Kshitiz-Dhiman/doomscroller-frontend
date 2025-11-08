"use client";
import { useState } from "react";
import { Heart, Share, Settings, BookMarked } from "lucide-react"
export default function Toolbar() {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="flex items-center justify-center bg-white/5 backdrop-blur-md rounded-full h-16 w-2/3 lg:w-1/5 mx-auto px-6 shadow-lg border border-white/10 ">
            <button className="text-white/70 cursor-pointer hover:text-white px-4 py-2 rounded-full transition">
                {isLiked ? (
                    <Heart fill="red" stroke="red" onClick={() => setIsLiked(false)} />
                ) : (
                    <Heart onClick={() => setIsLiked(true)} />
                )}
            </button>
            <button className="text-white/70 cursor-pointer hover:text-white px-4 py-2 rounded-full transition">
                <Share />
            </button>
            <button className="text-white/70 cursor-pointer hover:text-white px-4 py-2 rounded-full transition">
                <BookMarked />
            </button>
            <button className="text-white/70 cursor-pointer hover:text-white px-4 py-2 rounded-full transition">
                <Settings />
            </button>
        </div>
    )
}
