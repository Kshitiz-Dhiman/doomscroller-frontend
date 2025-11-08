"use client";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import GitCard from "./components/GitCard";
import ArticleCard from "./components/ArticleCard";
import QuestionCard from "./components/QuestionCard";
import Toolbar from "./components/Toolbar";
export default function HomePage() {
    const URL = process.env.SERVER_URL || "http://localhost:8000";
    // Now instead of using images , we will get text data from an API
    // const [images, setImages] = useState(Array.from({ length: 10 }));
    const colors = [
        "#2D2640",
        "#003737",
        "#3B0B08",
        "#001D32",
        "#1C1D00",
        "#3A2C00",
        "#2B1700",
        "#00363A",
        "#3E2D00",
        "#1F1B16"
    ]
    //   const array = ["b095f6", "f0a177", "e6ee96", "55cffa", "ffcf7d"];

    const sampleData = [
        {
            description: "Sample article description 1",
            summary: "This is a summary of the first sample article. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fuThis is a summary of the first sample article. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dogiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            type: "repository"

        },
        {
            description: "Sample article description 2",
            summary: "This is a summary of the second sample article. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            , type: "article"
        },
        {
            description: "Sample article description 3",
            summary: "This is a summary of the third sample article."
            , type: "question"
        }
    ]
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`${URL}/api/aisummary`);
                setArticles(response.data.summaries);
            } catch (error) {
                console.error(error);
            }
        };
        fetchArticles();
    }, []);

    const fetchMoreArticles = () => {
        setTimeout(() => {
            setArticles((prevArticles) => [
                ...prevArticles,
                ...Array.from({ length: 10 }),
            ]);
        }, 1500);
    }

    return (
        <div className="h-screen w-full bg-black flex flex-col">
            <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/55 to-transparent">
                <h1 className="text-white text-3xl font-bold ">Doomscroller</h1>
                <p className="text-white/70 text-sm">Beta 1.0</p>
            </div>
            {/* Toolbar */}
            <div className="absolute z-10  w-full h-16 bottom-4 lg:bottom-10">
                <Toolbar />
            </div>
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-lg h-screen relative">

                    <InfiniteScroll
                        dataLength={articles.length}
                        // next={fetchMoreArticles}
                        hasMore={false}
                        loader={
                            <div className="h-screen flex items-center justify-center">
                                <h4 className="text-white">Loading...</h4>
                            </div>
                        }
                        scrollableTarget="scrollableDiv"
                    >
                        <div id="scrollableDiv"
                            className="snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth"
                        // style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >

                            {articles.map((article, i) => {
                                console.log(article);

                                const bgColor = colors[Math.floor(Math.random() * colors.length)];
                                if (article.type === "article") {
                                    return (
                                        <ArticleCard
                                            key={i}
                                            i={i}
                                            article={article}
                                            bgColor={bgColor}
                                        />
                                    )
                                } else if (article.type === "question") {
                                    return (
                                        <QuestionCard
                                            key={i}
                                            i={i}
                                            article={article}
                                            bgColor={bgColor}
                                        />
                                    )
                                } else {
                                    return (
                                        <GitCard
                                            key={i}
                                            i={i}
                                            article={article}
                                            bgColor={bgColor}
                                        />
                                    )
                                }

                            })}

                        </div>
                    </InfiniteScroll>
                </div >
            </div >
        </div >
    );
}
