const agents = [
  { color: 'bg-[#7C3AED]', title: 'STORY WEAVER', desc: 'Co-write stories, invent characters, and build fictional worlds with a creative writing companion.', icon: '📖' },
  { color: 'bg-[#3B82F6]', title: 'HOMEWORK HELPER', desc: 'A patient tutor that explains concepts, walks through problems, and answers doubts across subjects.', icon: '🎓' },
  { color: 'bg-[#22C55E]', title: 'CAREER COACH', desc: 'Explore career options, understand different paths, and get guidance tailored to your interests.', icon: '💼' },
  { color: 'bg-[#F97316]', title: 'DEBATE BUDDY', desc: 'Practise argumentation, prepare for debates, and strengthen critical thinking with a sparring partner.', icon: '🗣️' },
  { color: 'bg-[#14B8A6]', title: 'SCIENCE EXPLORER', desc: 'Ask big questions, design experiments, and understand how the world works through curiosity-led chats.', icon: '🔬' },
  { color: 'bg-[#8B5CF6]', title: 'MATH MENTOR', desc: 'Break down tricky problems step by step, practise techniques, and build confidence in numbers.', icon: '➗' },
  { color: 'bg-[#EAB308]', title: 'CODE COMPANION', desc: 'Learn to code, debug errors, and build your first programmes with a friendly coding buddy.', icon: '💻' },
  { color: 'bg-[#84CC16]', title: 'CLIMATE STRATEGIST', desc: 'Explore sustainability scenarios, model climate solutions, and design ideas to help the planet.', icon: '🌍' },
  { color: 'bg-[#EC4899]', title: 'LANGUAGE BUDDY', desc: 'Practise English, Hindi, French, Spanish, or Mandarin through natural conversation.', icon: '🔤' },
  { color: 'bg-[#F472B6]', title: 'WELLNESS GUIDE', desc: 'Mindfulness prompts, journaling companions, and gentle support for emotional well-being.', icon: '🧘' },
  { color: 'bg-[#0EA5E9]', title: 'SPACE EXPLORER', desc: 'Journey through galaxies, understand space missions, and ask anything about the universe.', icon: '🚀' },
  { color: 'bg-[#EF4444]', title: 'HISTORY TIME MACHINE', desc: 'Travel through time, meet historical figures, and explore events through immersive storytelling.', icon: '⏳' },
];

export default function AgentLibrary() {
  return (
    <section className="bg-brand-purple py-12 sm:py-16 lg:py-20">
      <div className="container-main">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="section-heading text-white">
            The Prebuilt Agent Library
          </h2>
          <p className="text-[15px] sm:text-[17px] mt-3">
            <span className="text-white font-medium">12 starter agents. </span>
            <span className="text-[#F472B6] italic font-semibold">Endless possibilities.</span>
          </p>
          <p className="text-white/80 text-[13px] sm:text-[14px] mt-4 sm:mt-5 max-w-[680px] mx-auto leading-relaxed px-2">
            Every agent is designed by educators and AI experts, pre-tested for age-appropriate content,
            and ready for students to customise. Pick one that matches your interest – or remix several
            to create something entirely new.
          </p>
        </div>

        {/* Agent grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {agents.map((agent) => (
            <div
              key={agent.title}
              className="bg-[#1E1245] hover:bg-[#261558] transition-colors rounded-2xl p-4 flex items-start gap-3 cursor-pointer"
            >
              <div className={`${agent.color} w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-base shadow-sm`}>
                {agent.icon}
              </div>
              <div>
                <p className="text-white text-[11px] font-bold tracking-wide mb-1">{agent.title}</p>
                <p className="text-white/60 text-[11px] leading-relaxed">{agent.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Agent Builder CTA */}
        <div className="mt-8 sm:mt-10 lg:mt-12 bg-[#1E1245] rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 lg:gap-8 text-center sm:text-left">
          <div className="flex-shrink-0 w-[100px] h-[90px] sm:w-[140px] sm:h-[120px] flex items-center justify-center">
            <img
              src="/agent-robot.png"
              alt="AI robot"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div>
            <p className="text-white font-bold text-[16px] sm:text-[18px] lg:text-[20px] mb-2">
              Can&apos;t find the agent you want?
            </p>
            <p className="text-white/70 text-[14px] leading-relaxed">
              Students at Grades 8+ can use the Agent Builder to create entirely original agents from
              scratch – <strong className="text-white font-semibold">no coding required.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
