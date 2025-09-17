import React, { useEffect, useMemo, useState } from "react";



export default function CodingContestPage() {
  // UI state
  const [contests, setContests] = useState([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // all | upcoming | ongoing | past
  const [tagFilter, setTagFilter] = useState("");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;
  const [selectedContest, setSelectedContest] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock fetch - replace with your API
  async function fetchContests() {
    setLoading(true);
    // Simulate network latency
    await new Promise((r) => setTimeout(r, 300));

    const now = new Date();
    const mock = [
      {
        id: "c1",
        title: "AlgoSprint - Weekly",
        platform: "DevArena",
        start: new Date(now.getTime() + 1000 * 60 * 60 * 24 * 2).toISOString(), // in 2 days
        end: new Date(now.getTime() + 1000 * 60 * 60 * 26 * 2).toISOString(),
        tags: ["algorithms", "beginner"],
        link: "https://example.com/algosprint",
        prize: "Top 10 swag + certificates",
        description: "A fast-paced 2 hour contest focused on greedy & dp problems.",
      },
      {
        id: "c2",
        title: "Hack & Code - Campus Cup",
        platform: "CampusHub",
        start: new Date(now.getTime() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
        end: new Date(now.getTime() + 1000 * 60 * 60 * 2).toISOString(), // in 2 hours
        tags: ["team", "hackathon"],
        link: "https://example.com/hackandcode",
        prize: "Cash prizes + internships",
        description: "24 hour team hackathon with mentoring and interviews for winners.",
      },
      {
        id: "c3",
        title: "CodeGolf Challenge",
        platform: "ByteByte",
        start: new Date(now.getTime() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
        end: new Date(now.getTime() - 1000 * 60 * 60 * 36).toISOString(),
        tags: ["shortest-code", "advanced"],
        link: "https://example.com/codegolf",
        prize: "Top 3: gift cards",
        description: "Show off your code golfing skills with tricky puzzles.",
      },
      // more mock items to show pagination
      {
        id: "c4",
        title: "DSA Marathon",
        platform: "AlgoSphere",
        start: new Date(now.getTime() + 1000 * 60 * 60 * 48).toISOString(),
        end: new Date(now.getTime() + 1000 * 60 * 60 * 50).toISOString(),
        tags: ["data-structures", "intermediate"],
        link: "https://example.com/dsam",
        prize: "Certificates + leaderboard recognition",
        description: "Focus on trees, graphs and segment trees.",
      },
      {
        id: "c5",
        title: "Frontend Frenzy",
        platform: "UIClash",
        start: new Date(now.getTime() + 1000 * 60 * 60 * 72).toISOString(),
        end: new Date(now.getTime() + 1000 * 60 * 60 * 74).toISOString(),
        tags: ["frontend", "design"],
        link: "https://example.com/frontendfrenzy",
        prize: "Top projects showcased",
        description: "Build a polished UI in 3 hours.",
      },
      {
        id: "c6",
        title: "Security CTF - Novice",
        platform: "Secured",
        start: new Date(now.getTime() + 1000 * 60 * 60 * 6).toISOString(),
        end: new Date(now.getTime() + 1000 * 60 * 60 * 12).toISOString(),
        tags: ["ctf", "security", "beginner"],
        link: "https://example.com/ctf-novice",
        prize: "Badges + mentor calls",
        description: "Introductory CTF covering web and crypto basics.",
      },
      {
        id: "c7",
        title: "AI Modelathon",
        platform: "MLHouse",
        start: new Date(now.getTime() + 1000 * 60 * 60 * 120).toISOString(),
        end: new Date(now.getTime() + 1000 * 60 * 60 * 144).toISOString(),
        tags: ["ml", "project"],
        link: "https://example.com/modelathon",
        prize: "Cloud credits + mentorship",
        description: "Build an end-to-end ML model and deploy it.",
      },
    ];

    setContests(mock);
    setLoading(false);
  }

  useEffect(() => {
    fetchContests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Helpers for status
  function getStatus(c) {
    const now = new Date();
    const s = new Date(c.start);
    const e = new Date(c.end);
    if (now < s) return "upcoming";
    if (now >= s && now <= e) return "ongoing";
    return "past";
  }

  const allTags = useMemo(() => {
    const t = new Set();
    contests.forEach((c) => c.tags.forEach((x) => t.add(x)));
    return Array.from(t).sort();
  }, [contests]);

  // Filtering + searching
  const filtered = useMemo(() => {
    let arr = contests.slice();
    if (statusFilter !== "all") arr = arr.filter((c) => getStatus(c) === statusFilter);
    if (tagFilter) arr = arr.filter((c) => c.tags.includes(tagFilter));
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.platform.toLowerCase().includes(q) ||
          c.tags.join(" ").toLowerCase().includes(q)
      );
    }
    // sort upcoming/ongoing by start date asc, past by end date desc
    arr.sort((a, b) => {
      if (statusFilter === "past") return new Date(b.end) - new Date(a.end);
      return new Date(a.start) - new Date(b.start);
    });
    return arr;
  }, [contests, statusFilter, tagFilter, query]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageData = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    // if page out of range after filters change, reset to 1
    if (page > totalPages) setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages]);

  // Register action (open external link or call backend)
  function handleRegister(contest) {
    // Example: open external link in new tab
    window.open(contest.link, "_blank", "noopener noreferrer");
    // You can also call your backend to register using fetch/axios here.
  }

  return (
    <div className="p-4 md:p-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">Coding Contests</h1>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search contests, tags, platform..."
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-1"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm opacity-60"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex gap-2">
              <select
                className="border rounded-lg px-3 py-2"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="past">Past</option>
              </select>

              <button
                onClick={() => {
                  setQuery("");
                  setTagFilter("");
                  setStatusFilter("all");
                }}
                className="border rounded-lg px-3 py-2"
              >
                Reset
              </button>
            </div>
          </div>
        </header>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setTagFilter("")}
            className={`px-3 py-1 rounded-full border ${!tagFilter ? "bg-slate-100" : ""}`}
          >
            All tags
          </button>
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setTagFilter(t)}
              className={`px-3 py-1 rounded-full border ${tagFilter === t ? "bg-slate-100" : ""}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Main grid + side panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-slate-600">
                Showing <strong>{filtered.length}</strong> contests
              </div>
              <div className="text-sm text-slate-600">Page {page} / {totalPages}</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {loading ? (
                <div className="col-span-full p-6 border rounded-lg">Loading contests...</div>
              ) : pageData.length === 0 ? (
                <div className="col-span-full p-6 border rounded-lg">No contests found.</div>
              ) : (
                pageData.map((c) => {
                  const status = getStatus(c);
                  return (
                    <article key={c.id} className="border rounded-lg p-4 flex flex-col gap-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-lg">{c.title}</h3>
                          <div className="text-sm text-slate-600">{c.platform}</div>
                        </div>

                        <div className="text-right">
                          <div className="text-sm">{new Date(c.start).toLocaleString()}</div>
                          <div className="mt-1 text-xs inline-block px-2 py-1 rounded-full border">
                            {status}
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-slate-700 truncate">{c.description}</p>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex gap-2 flex-wrap">
                          {c.tags.map((t) => (
                            <span
                              key={t}
                              onClick={() => setTagFilter(t)}
                              className="text-xs px-2 py-1 rounded-full border cursor-pointer"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedContest(c)}
                            className="px-3 py-1 rounded-lg border"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => handleRegister(c)}
                            className="px-3 py-1 rounded-lg bg-slate-800 text-white"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })
              )}
            </div>

            {/* Pagination controls */}
            <div className="mt-6 flex items-center justify-between">
              <div>
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="px-3 py-1 border rounded-lg mr-2"
                  disabled={page === 1}
                >
                  Prev
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="px-3 py-1 border rounded-lg"
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </div>

              <div className="text-sm text-slate-600">Show {PAGE_SIZE} per page</div>
            </div>
          </div>

          {/* Right side detail panel */}
          <aside className="border rounded-lg p-4">
            {selectedContest ? (
              <div>
                <h2 className="text-xl font-semibold mb-2">{selectedContest.title}</h2>
                <div className="text-sm text-slate-600 mb-3">{selectedContest.platform}</div>
                <div className="text-sm mb-2">
                  <strong>Start:</strong> {new Date(selectedContest.start).toLocaleString()}
                </div>
                <div className="text-sm mb-2">
                  <strong>End:</strong> {new Date(selectedContest.end).toLocaleString()}
                </div>
                <p className="text-sm text-slate-700 mb-3">{selectedContest.description}</p>
                <div className="flex gap-2 flex-wrap mb-3">
                  {selectedContest.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full border">{t}</span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button onClick={() => handleRegister(selectedContest)} className="px-3 py-2 bg-slate-800 text-white rounded-lg">Register</button>
                  <a href={selectedContest.link} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded-lg inline-block">Open platform</a>
                  <button onClick={() => setSelectedContest(null)} className="px-3 py-2 border rounded-lg">Close</button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-lg font-medium mb-2">Select a contest</h2>
                <p className="text-sm text-slate-600">Click a contest's Details to view more information and register.</p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
