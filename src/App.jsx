import { useMemo, useState } from 'react';
import Header from './components/Header';
import AgentChatModal from './components/AgentChatModal';
import { ArrowRight, GraduationCap, Mail, Rocket, Briefcase, FolderGit2, Home, BookOpen } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const SYSTEM_PROMPT = `You are "Career-Twin," a professional AI Agent representing Muhammad Iqbal Hilmy Izzulhaq. Your personality is helpful, professional, and highly knowledgeable about Iqbal's skills. Your goal is to answer questions from recruiters and visitors about Iqbal's professional background.

STRICT RULES:
1. NEVER break character. You are Iqbal's agent.
2. ONLY answer questions about Muhammad Iqbal's professional life, skills, projects, and experience based on the provided context.
3. If asked unrelated questions (e.g., "what is the weather," "tell me a joke"), politely decline and redirect to Iqbal's professional info. Example: "My apologies, but my function is to provide information about Muhammad Iqbal's professional background. Do you have any questions about his AI projects or data science experience?"
4. Keep answers concise, professional, and factual.

FORMATTING RULES:
- MUST USE MARKDOWN.
- Bold key terms, project names, metrics.
- Use bulleted lists for items like skills, projects, or experience.

Muhammad Iqbal's CV Context:
- **Role:** Autonomous AI Agent Engineer, NLP & RAG Specialist, Data Scientist
- **Summary:** Highly motivated Data Scientist passionate about building intelligent, autonomous AI agents. Experienced in OpenAI Agents SDK, CrewAI, LangGraph, AutoGen.
- **Core Skills:** Agentic AI, Multi-agent Systems, LangGraph, CrewAI, RAG, NLP, Predictive Analytics, Python, SQL, Data Visualization (Tableau, Power BI), Machine Learning
- **Experience 1:** Data Scientist Intern @ DPR RI (April 2025 – Present)
  - Analyzed SUSENAS data for policy recommendations
  - NLP on Mahkamah Konstitusi verdicts
  - Built RAG prototype for legal document search and summarization
  - Used Dify.AI and n8n for no-code RAG workflows
- **Experience 2:** AI Engineering for Corporate Training @ RevoU (Client: Jalin) (Aug 2025 – Present)
  - Led first corporate AI Engineering training for non-developers
  - Taught no-code tools, prompt engineering, chatbot deployment
  - Guided assignments, led simulations, reported performance
- **Key Projects:**
  1. Career Digital Twin (RAG Chatbot)
  2. Trader Agent Simulator (OpenAI Agents SDK)
  3. Indonesian Parliament Activity Chatbot (LangChain + SQL)
  4. Telco Churn Analysis: 93.7% recall, saved $18.8K
  5. Airbnb Data Analysis: +7.6% December revenue (฿3.9M)
- **Education:** Purwadhika Digital Technology School (Data Analysis & ML), University of Brawijaya (B.S. Physics)
- **Certifications:** Agentic AI Engineering (Udemy), Artificial Intelligence (Kominfo), Metaverse Engineering (Kominfo)`;

function SectionContainer({ children }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 animate-fade-in">
      {children}
    </div>
  );
}

function HomeSection({ onAsk, onNavigate }) {
  return (
    <div className="relative min-h-[80vh] grid lg:grid-cols-2 items-center gap-8">
      <div className="relative z-10">
        <p className="text-sky-400 text-sm font-medium tracking-wide mb-3">Autonomous AI Agent Engineer</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Muhammad Iqbal Hilmy Izzulhaq
        </h1>
        <p className="mt-4 text-white/70 text-lg max-w-xl">
          Autonomous AI Agent Engineer | NLP & RAG Specialist | Data Scientist
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => onNavigate('About')} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 text-white hover:bg-sky-400 transition">
            View My Work
            <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={onAsk} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/10 transition">
            Ask My Agent ✨
          </button>
        </div>
        <div className="mt-6 flex gap-4 text-white/70 text-sm">
          <a className="hover:text-white" href="https://www.linkedin.com/in/izzulhaq-iqbal/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-white" href="https://github.com/Shiverion" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-white" href="https://huggingface.co/spaces/Shiverion/career_conversations" target="_blank" rel="noreferrer">Hugging Face</a>
          <a className="hover:text-white" href="https://medium.com/@miqbal.izzulhaq" target="_blank" rel="noreferrer">Medium</a>
          <a className="hover:text-white" href="https://www.instagram.com/izzulhaq_iqbal/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-purple-500/20 via-sky-400/10 to-orange-400/10" />
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-white font-semibold text-lg mb-2 flex items-center gap-2"><BookOpen className="h-5 w-5 text-sky-400"/> Summary</h3>
        <p className="text-white/70 text-sm leading-relaxed">
          Highly motivated Data Scientist passionate about building intelligent, autonomous AI agents. Experienced in OpenAI Agents SDK, CrewAI, LangGraph, and AutoGen with a strong foundation in NLP and RAG.
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-white font-semibold text-lg mb-2 flex items-center gap-2"><Rocket className="h-5 w-5 text-sky-400"/> Core Skills</h3>
        <ul className="grid grid-cols-2 gap-2 text-sm text-white/80">
          {['Agentic AI','Multi-agent Systems','LangGraph','CrewAI','RAG','NLP','Predictive Analytics','Python','SQL','Tableau','Power BI','Machine Learning'].map(s => (
            <li key={s} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div className="space-y-6">
      {[{
        role: 'Data Scientist Intern', org: 'DPR RI', time: 'Apr 2025 – Present', points: [
          'Analyzed SUSENAS data for policy recommendations',
          'NLP on Mahkamah Konstitusi verdicts',
          'Built RAG prototype for legal document search and summarization',
          'Used Dify.AI and n8n for no-code RAG workflows'
        ]
      },{
        role: 'AI Engineering for Corporate Training', org: 'RevoU (Client: Jalin)', time: 'Aug 2025 – Present', points: [
          'Led first corporate AI Engineering training for non-developers',
          'Taught no-code tools, prompt engineering, chatbot deployment',
          'Guided assignments, led simulations, reported performance'
        ]
      }].map((e, i) => (
        <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h4 className="text-white font-semibold">{e.role} · {e.org}</h4>
            <span className="text-xs text-white/60">{e.time}</span>
          </div>
          <ul className="mt-3 list-disc list-inside text-white/70 text-sm space-y-1">
            {e.points.map((p, idx) => <li key={idx}>{p}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    { name: 'Career Digital Twin (RAG Chatbot)', desc: 'Personal career assistant powered by RAG to answer recruiter questions.', tag: 'RAG, NLP' },
    { name: 'Trader Agent Simulator', desc: 'Autonomous trading agents using OpenAI Agents SDK.', tag: 'Agents' },
    { name: 'Indonesian Parliament Activity Chatbot', desc: 'LangChain + SQL chatbot for parliamentary data.', tag: 'LangChain, SQL' },
    { name: 'Telco Churn Analysis', desc: '93.7% recall, estimated $18.8K saved.', tag: 'ML, Analytics' },
    { name: 'Airbnb Data Analysis', desc: '+7.6% December revenue (฿3.9M).', tag: 'Analytics' },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <h4 className="text-white font-semibold">{p.name}</h4>
            <FolderGit2 className="h-5 w-5 text-sky-400" />
          </div>
          <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
          <div className="mt-3 inline-flex px-2 py-1 rounded bg-sky-400/10 text-sky-300 text-xs border border-sky-400/20">{p.tag}</div>
        </div>
      ))}
    </div>
  );
}

function EducationSection() {
  const items = [
    { school: 'Purwadhika Digital Technology School', detail: 'Data Analysis & Machine Learning' },
    { school: 'University of Brawijaya', detail: 'B.S. Physics' },
  ];
  return (
    <div className="space-y-6">
      {items.map((e) => (
        <div key={e.school} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h4 className="text-white font-semibold">{e.school}</h4>
          <p className="text-white/70 text-sm mt-1">{e.detail}</p>
        </div>
      ))}
    </div>
  );
}

function ContactSection() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
      <Mail className="h-6 w-6 text-sky-400 inline-block"/>
      <h4 className="text-white font-semibold mt-2">Get in touch</h4>
      <p className="text-white/70 text-sm mt-1">miqbal.izzulhaq@gmail.com</p>
      <a href="mailto:miqbal.izzulhaq@gmail.com" className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 text-white hover:bg-sky-400 transition">Say Hello</a>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [chatOpen, setChatOpen] = useState(false);

  const page = useMemo(() => {
    switch (currentPage) {
      case 'Home':
        return <HomeSection onAsk={() => setChatOpen(true)} onNavigate={setCurrentPage} />
      case 'About':
        return <AboutSection />
      case 'Experience':
        return <ExperienceSection />
      case 'Projects':
        return <ProjectsSection />
      case 'Education':
        return <EducationSection />
      case 'Contact':
        return <ContactSection />
      default:
        return <HomeSection onAsk={() => setChatOpen(true)} onNavigate={setCurrentPage} />
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-950 font-sans">
      <div className="fixed inset-0 -z-0 opacity-40">
        <div className="absolute -top-20 -left-20 h-96 w-96 bg-sky-500 blur-3xl rounded-full mix-blend-screen opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] bg-purple-600 blur-3xl rounded-full mix-blend-screen opacity-20 animate-pulse" />
      </div>

      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="pt-28">
        <SectionContainer>
          {page}
        </SectionContainer>
      </main>

      <AgentChatModal open={chatOpen} onClose={() => setChatOpen(false)} systemInstruction={SYSTEM_PROMPT} />
    </div>
  );
}
