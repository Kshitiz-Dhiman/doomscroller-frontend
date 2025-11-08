import { Github, Star, ExternalLink, ChevronDown } from 'lucide-react';

export default function GitCard({ i, article, bgColor }) {
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
                            <Github className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-white/60 text-xs font-medium uppercase tracking-wider">GitHub Repository</p>
                            <p className="text-white text-sm font-semibold">#{i + 1}</p>
                        </div>
                    </div>

                    {/* Repository Name/Title */}
                    <h2 className="text-white text-3xl font-bold leading-tight mb-3">
                        {article?.title || article?.name || "Repository"}
                    </h2>

                    {/* Stats Bar */}
                    {article?.gitRepo && (
                        <div className="flex items-center gap-4 text-white/80 text-sm">
                            {article.gitRepo.stars && (
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span>{article.gitRepo.stars.toLocaleString()}</span>
                                </div>
                            )}
                            {article.gitRepo.language && (
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-white/80" />
                                    <span>{article.gitRepo.language}</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Description & Summary */}
                <div className="space-y-4">
                    {article?.description && (
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                            <p className="text-white/90 text-base leading-relaxed">
                                {article.description}
                            </p>
                        </div>
                    )}

                    {article?.summary && (
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                            <p className="text-white/80 text-sm leading-relaxed">
                                {article.summary}
                            </p>
                        </div>
                    )}
                </div>

                {/* Action Button */}
                <div className="mt-6">
                    <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-full border border-white/30 transition-all duration-200 flex items-center justify-center gap-2">
                        <span>View Repository</span>
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
