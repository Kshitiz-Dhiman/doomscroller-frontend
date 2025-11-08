import { FileText, Clock, MessageSquare, Heart, ExternalLink, ChevronDown } from 'lucide-react';

export default function ArticleCard({ i, article, bgColor }) {
    return (
        <div
            key={i}
            className="snap-start snap-always h-screen w-full flex items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: bgColor }}
        >
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-lg mx-auto px-6">
                {/* Header Section */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Dev.to Article</p>
                            <p className="text-white text-sm font-semibold">#{i + 1}</p>
                        </div>
                    </div>

                    {/* Article Title */}
                    <h2 className="text-white text-3xl font-bold leading-tight mb-3">
                        {article?.title || "Article"}
                    </h2>

                    {/* Meta Info Bar */}
                    {article?.devto && (
                        <div className="flex items-center gap-4 text-white/80 text-sm flex-wrap">
                            {article.devto.author && (
                                <div className="flex items-center gap-1">
                                    <span className="font-medium">@{article.devto.author}</span>
                                </div>
                            )}
                            {article.devto.reactions && (
                                <div className="flex items-center gap-1">
                                    <Heart className="w-4 h-4 fill-current" />
                                    <span>{article.devto.reactions}</span>
                                </div>
                            )}
                            {article.devto.comments && (
                                <div className="flex items-center gap-1">
                                    <MessageSquare className="w-4 h-4" />
                                    <span>{article.devto.comments}</span>
                                </div>
                            )}
                            {article?.readTime && (
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{article.readTime}</span>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Tags */}
                    {article?.devto?.tags && article.devto.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {article.devto.tags.slice(0, 4).map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs font-medium border border-white/20"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Headline */}
                {article?.headline && (
                    <div className="mb-4">
                        <p className="text-white font-semibold text-lg italic border-l-4 border-white/40 pl-3">
                            "{article.headline}"
                        </p>
                    </div>
                )}

                {/* Summary Content */}
                <div className="space-y-4">
                    {article?.summary && (
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 max-h-80 overflow-y-auto">
                            <p className="text-white/90 text-base leading-relaxed whitespace-pre-line">
                                {article.summary}
                            </p>
                        </div>
                    )}

                    {article?.description && article.description !== article.summary && (
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                            <p className="text-white/80 text-sm leading-relaxed">
                                {article.description}
                            </p>
                        </div>
                    )}
                </div>

                {/* Action Button */}
                <div className="mt-6">
                    <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-full border border-white/30 transition-all duration-200 flex items-center justify-center gap-2">
                        <span>Read Full Article</span>
                        <ExternalLink className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Swipe Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-xs flex items-center gap-1">
                <ChevronDown className="w-4 h-4 animate-bounce" />
                <span>Swipe up</span>
            </div>
        </div>
    );
}
