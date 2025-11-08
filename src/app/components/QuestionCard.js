import { HelpCircle, Eye, ThumbsUp, MessageCircle, CheckCircle, ExternalLink, ChevronDown } from 'lucide-react';

export default function QuestionCard({ i, article, bgColor }) {
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
                            <HelpCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Stack Overflow</p>
                            <p className="text-white text-sm font-semibold">#{i + 1}</p>
                        </div>
                    </div>

                    {/* Question Title */}
                    <h2 className="text-white text-3xl font-bold leading-tight mb-3">
                        {article?.title || "Question"}
                    </h2>

                    {/* Meta Info Bar */}
                    {article?.stackapi && (
                        <div className="flex items-center gap-4 text-white/80 text-sm flex-wrap">
                            {article.stackapi.author && (
                                <div className="flex items-center gap-1">
                                    <span className="font-medium">{article.stackapi.author}</span>
                                </div>
                            )}
                            {article.stackapi.votes !== undefined && (
                                <div className="flex items-center gap-1">
                                    <ThumbsUp className="w-4 h-4" />
                                    <span>{article.stackapi.votes}</span>
                                </div>
                            )}
                            {article.stackapi.views && (
                                <div className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    <span>{article.stackapi.views.toLocaleString()}</span>
                                </div>
                            )}
                            {article.stackapi.answers !== undefined && (
                                <div className="flex items-center gap-1">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{article.stackapi.answers}</span>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Status Badge & Tags */}
                    <div className="flex items-center gap-2 mt-3 flex-wrap">
                        {article?.stackapi?.isAnswered && (
                            <div className="flex items-center gap-1 px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/30">
                                <CheckCircle className="w-3 h-3 text-green-400" />
                                <span className="text-green-300 text-xs font-medium">Answered</span>
                            </div>
                        )}

                        {article?.stackapi?.tags && article.stackapi.tags.length > 0 && (
                            article.stackapi.tags.slice(0, 3).map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs font-medium border border-white/20"
                                >
                                    {tag}
                                </span>
                            ))
                        )}
                    </div>
                </div>

                {/* Headline */}
                {article?.headline && (
                    <div className="mb-4">
                        <p className="text-white font-semibold text-lg italic border-l-4 border-white/40 pl-3">
                            {article.headline}
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

                {/* Category Badge */}
                {article?.category && (
                    <div className="mt-4">
                        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/70 text-xs font-medium border border-white/20">
                            {article.category}
                        </span>
                    </div>
                )}

                {/* Action Button */}
                <div className="mt-6">
                    <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-full border border-white/30 transition-all duration-200 flex items-center justify-center gap-2">
                        <span>View on Stack Overflow</span>
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
