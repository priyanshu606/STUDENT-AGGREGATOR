export default function AboutPage() {
    return (
        <div className="mt-20 mb-10 relative">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            {/* Header */}
            <h1 className="text-3xl font-semibold text-center mx-auto">
                About Student Opportunity Aggregator
            </h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
                Our platform collects and curates the best opportunities for students — from hackathons and internships 
                to coding contests, blogs, and tech events — all in one place.
            </p>
            
            {/* Section Layout */}
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-12">
                {/* Background Glow */}
                <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#E1F5FE]"></div>
                
                {/* Image */}
                <img 
                    className="max-w-sm w-full rounded-xl h-auto"
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=830&h=844&auto=format&fit=crop" 
                    alt="Students collaborating"
                />
                
                {/* Content */}
                <div>
                    <h2 className="text-3xl font-semibold">Why Choose Our Platform?</h2>
                    <p className="text-sm text-slate-500 mt-2">
                        Built for students who want to grow their careers — discover events, sharpen skills, and never 
                        miss out on opportunities again.
                    </p>
            
                    {/* Features */}
                    <div className="flex flex-col gap-10 mt-6">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-blue-50 border border-blue-200 rounded">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png" alt="Hackathon" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Hackathons & Contests</h3>
                                <p className="text-sm text-slate-500">
                                    Stay updated with coding challenges, hackathons, and competitions to test your skills.
                                </p>
                            </div>
                        </div>
                        
                        {/* Feature 2 */}
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-green-50 border border-green-200 rounded">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135673.png" alt="Internships" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Internships & Jobs</h3>
                                <p className="text-sm text-slate-500">
                                    Explore real-world opportunities — internships, freelance gigs, and entry-level jobs.
                                </p>
                            </div>
                        </div>
                        
                        {/* Feature 3 */}
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-purple-50 border border-purple-200 rounded">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135799.png" alt="Learning" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Skill Development</h3>
                                <p className="text-sm text-slate-500">
                                    Access resources and events that help you improve your technical and soft skills.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 - Blog */}
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-yellow-50 border border-yellow-200 rounded">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135815.png" alt="Blog" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Blog & Resources</h3>
                                <p className="text-sm text-slate-500">
                                    Read career tips, success stories, tutorials, and guides to stay inspired and informed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-4xl mx-auto text-center mt-16">
                <h2 className="text-2xl font-bold text-gray-800">Our Mission & Vision</h2>
                <p className="text-sm text-slate-500 mt-3">
                    We aim to bridge the gap between students and opportunities by creating a hub where career growth 
                    meets community. Our vision is to empower every student to reach their full potential by providing 
                    equal access to opportunities worldwide.
                </p>
            </div>

            {/* How It Works */}
            <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 rounded-lg border bg-white shadow-sm">
                    <h3 className="text-lg font-semibold">🔍 Collect</h3>
                    <p className="text-sm text-slate-500 mt-2">We gather opportunities from top platforms and sources.</p>
                </div>
                <div className="p-6 rounded-lg border bg-white shadow-sm">
                    <h3 className="text-lg font-semibold">⚡ Curate</h3>
                    <p className="text-sm text-slate-500 mt-2">We filter and organize them to make browsing effortless.</p>
                </div>
                <div className="p-6 rounded-lg border bg-white shadow-sm">
                    <h3 className="text-lg font-semibold">🚀 Share</h3>
                    <p className="text-sm text-slate-500 mt-2">We deliver all the latest events to you in one dashboard.</p>
                </div>
            </div>

            {/* Blog Highlight Section */}
            <div className="max-w-5xl mx-auto mt-20 text-center">
                <h2 className="text-2xl font-bold text-gray-800">Our Blog</h2>
                <p className="text-sm text-slate-500 mt-3 max-w-2xl mx-auto">
                    Knowledge is just as important as opportunities. Explore our blog for practical tips, 
                    success stories, coding tutorials, interview guidance, and insights from the student community.
                </p>

                {/* Blog Preview Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    <div className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold text-lg">💡 Career Tips</h3>
                        <p className="text-sm text-slate-500 mt-2">Get guidance on resumes, interviews, and career growth strategies.</p>
                    </div>
                    <div className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold text-lg">👨‍💻 Coding Tutorials</h3>
                        <p className="text-sm text-slate-500 mt-2">Step-by-step tutorials and articles to sharpen your skills.</p>
                    </div>
                    <div className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold text-lg">🌍 Student Stories</h3>
                        <p className="text-sm text-slate-500 mt-2">Read inspiring journeys of students who made it big.</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
                <h2 className="text-2xl font-bold text-gray-800">Ready to Explore Opportunities?</h2>
                <p className="text-sm text-slate-500 mt-2">
                    Join thousands of students and never miss out on your next big chance.
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                    Get Started
                </button>
            </div>
        </div>
    );
}
