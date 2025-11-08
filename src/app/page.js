"use client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function HomePage() {
    const [images, setImages] = useState(Array.from({ length: 10 }));

    const fetchMoreImages = () => {
        setTimeout(() => {
            setImages((prevImages) => [
                ...prevImages,
                ...Array.from({ length: 10 }),
            ]);
        }, 1500);
    };

    return (
        <div className="h-screen w-full bg-black flex flex-col">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/60 to-transparent">
                <h1 className="text-white text-2xl font-bold">Doomscroller</h1>
                <p className="text-white/70 text-sm">Beta 1.0</p>
            </div>

            {/* Reels Container */}
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-md h-screen relative">
                    <InfiniteScroll
                        dataLength={images.length}
                        next={fetchMoreImages}
                        hasMore={true}
                        loader={
                            <div className="h-screen flex items-center justify-center">
                                <h4 className="text-white">Loading...</h4>
                            </div>
                        }
                        scrollableTarget="scrollableDiv"
                    >
                        <div
                            id="scrollableDiv"
                            className="snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <style jsx>{`
                                #scrollableDiv::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                            {images.map((_, i) => (
                                <div
                                    key={i}
                                    className="snap-start snap-always h-screen w-full flex items-center justify-center relative"
                                >
                                    <img
                                        src={`https://picsum.photos/400/700?random=${i}`}
                                        alt={`Reel ${i + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay with reel number */}
                                    <div className="absolute bottom-20 left-4 text-white">
                                        <p className="text-lg font-semibold">Reel #{i + 1}</p>
                                        <p className="text-sm text-white/70">Swipe up for more</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    );
}
